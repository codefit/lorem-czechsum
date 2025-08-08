import { NextRequest, NextResponse } from 'next/server';

function cleanHtmlContent(content: string): string {
  // Odstraň markdown formátování
  let cleaned = content;
  
  // Odstraň ```html na začátku
  cleaned = cleaned.replace(/^```html\s*/i, '');
  
  // Odstraň ``` na konci
  cleaned = cleaned.replace(/\s*```\s*$/i, '');
  
  // Odstraň případné ``` na začátku (bez html)
  cleaned = cleaned.replace(/^```\s*/i, '');
  
  // Odstraň případné ``` na konci
  cleaned = cleaned.replace(/\s*```\s*$/i, '');
  
  // Odstraň nadbytečné mezery na začátku a konci
  cleaned = cleaned.trim();
  
  return cleaned;
}

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    // Získej API klíč z environment proměnné
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'API klíč není nakonfigurován' },
        { status: 500 }
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const data = {
      model : "gemini-2.5-flash-lite",
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.candidates && result.candidates[0] && result.candidates[0].content) {
      const rawContent = result.candidates[0].content.parts[0].text;
      const cleanedContent = cleanHtmlContent(rawContent);
      return NextResponse.json({ content: cleanedContent });
    } else {
      throw new Error('Invalid response format from Gemini API');
    }

  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Chyba při generování textu' },
      { status: 500 }
    );
  }
} 