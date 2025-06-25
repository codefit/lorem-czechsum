"use client";

import { useState, useCallback } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Button } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import { Input } from "@heroui/react";
import { Textarea } from "@heroui/react";
import { Divider } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";

interface TextSettings {
  paragraphs: boolean;
  headings: boolean;
  lists: boolean;
  strong: boolean;
  italic: boolean;
  wordCount: number;
}

interface GeneratedContent {
  formatted: string;
  raw: string;
}

export default function Home() {
  const [settings, setSettings] = useState<TextSettings>({
    paragraphs: true,
    headings: false,
    lists: false,
    strong: false,
    italic: false,
    wordCount: 100
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [activeTab, setActiveTab] = useState("formatted");

  const handleWordCountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, wordCount: parseInt(e.target.value) || 100 }));
  }, []);

  const handleSettingChange = useCallback((setting: keyof TextSettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text zkopírován do schránky!');
    } catch (error) {
      console.error('Chyba při kopírování:', error);
      alert('Chyba při kopírování textu');
    }
  }, []);

  const handleTabChange = useCallback((key: React.Key) => {
    setActiveTab(key as string);
  }, []);

  const generateLoremIpsum = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    setIsGenerating(true);
    
    try {
      // Zajistíme, že settings existuje a má správné hodnoty
      const currentSettings = settings || {
        paragraphs: true,
        headings: false,
        lists: false,
        strong: false,
        italic: false,
        wordCount: 100
      };
      
      const prompt = `Vygeneruj český text s následujícími požadavky:
- Počet slov: ${currentSettings.wordCount}
- Vždy použij odstavce (<p>)
${currentSettings.headings ? '- Přidej nadpisy (h1-h6)' : ''}
${currentSettings.lists ? '- Přidej seznamy (ul, ol)' : ''}
${currentSettings.strong ? '- Použij tučné texty (<strong>)' : ''}
${currentSettings.italic ? '- Použij kurzíva (<em>)' : ''}

Text musí být v češtině a musí obsahovat HTML značky. Vrať mi pouze čistý HTML kód bez jakéhokoliv markdown formátování, bez \`\`\`html nebo \`\`\` na začátku nebo konci.`;

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Chyba při generování');
      }

      const data = await response.json();
      setGeneratedContent({
        formatted: data.content,
        raw: data.content
      });
    } catch (error) {
      console.error('Chyba:', error);
      alert('Došlo k chybě při generování textu');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
      <div className="p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-4 mb-4">
              Český Lorem Ipsum Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Generujte český placeholder text pomocí AI s možností formátování
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Nastavení */}
            <Card className="w-full p-4">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-semibold">Nastavení generování</h2>
              </CardHeader>
              <CardBody className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Počet slov</label>
                  <Input
                    type="number"
                    value={String(settings?.wordCount || 100)}
                    onChange={handleWordCountChange}
                    min="10"
                    max="1000"
                    className="w-full"
                  />
                </div>

                <Divider />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">HTML elementy</h3>
                  
                  <div className="flex flex-col gap-2">
                    <Checkbox
                      isSelected={settings.paragraphs}
                      onValueChange={(checked) => handleSettingChange('paragraphs', checked)}
                      isDisabled
                    >
                      Odstavce (p) - vždy povoleno
                    </Checkbox>

                    <Checkbox
                      isSelected={settings.headings}
                      onValueChange={(checked) => handleSettingChange('headings', checked)}
                    >
                      Nadpisy (h1-h6)
                    </Checkbox>

                    <Checkbox
                      isSelected={settings.lists}
                      onValueChange={(checked) => handleSettingChange('lists', checked)}
                    >
                      Seznamy (ul, ol)
                    </Checkbox>

                    <Checkbox
                      isSelected={settings.strong}
                      onValueChange={(checked) => handleSettingChange('strong', checked)}
                    >
                      Tučný text (strong)
                    </Checkbox>

                    <Checkbox
                      isSelected={settings.italic}
                      onValueChange={(checked) => handleSettingChange('italic', checked)}
                    >
                      Kurzíva (em)
                    </Checkbox>
                  </div>
                </div>

                <Button
                  color="primary"
                  size="lg"
                  className="w-full"
                  onClick={generateLoremIpsum}
                  isLoading={isGenerating}
                >
                  {isGenerating ? 'Generuji...' : 'Vygenerovat text'}
                </Button>
              </CardBody>
            </Card>

            {/* Výsledek */}
            <Card className="w-full p-4">
              <CardHeader className="pb-3">
                <div className="flex w-full items-center">
                  <h2 className="text-xl font-semibold">Vygenerovaný text</h2>
                  {generatedContent && (
                    <Button
                      size="sm"
                      variant="flat"
                      className="ml-auto"
                      onClick={() => copyToClipboard(activeTab === "formatted" ? generatedContent.formatted : generatedContent.raw)}
                    >
                      Kopírovat
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardBody>
                {generatedContent ? (
                  <Tabs 
                    selectedKey={activeTab} 
                    onSelectionChange={handleTabChange}
                    className="w-full"
                  >
                    <Tab key="formatted" title="Formátovaný">
                      <div 
                        className="prose prose-sm max-w-none dark:prose-invert prose-p:mb-4 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-ul:list-disc prose-ol:list-decimal prose-li:mb-1"
                        dangerouslySetInnerHTML={{ __html: generatedContent.formatted }}
                      />
                    </Tab>
                    <Tab key="raw" title="HTML kód">
                        <Textarea
                          isClearable
                          className="w-full"
                          value={generatedContent.raw}
                          label="Description"
                          placeholder="Generated text"
                          variant="bordered"
                          minRows={24}
                          maxRows={24}
                          onClear={() => console.log('textarea cleared')}
                        />
                    </Tab>
                  </Tabs>
                ) : (
                  <div className="text-gray-500 dark:text-gray-400">
                    <p>Vyberte nastavení a klikněte na Vygenerovat text</p>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>

          {/* Informace */}
          <Card className="mt-6">
            <CardBody>
              <div className="flex flex-wrap gap-2">
                <Chip color="primary" variant="flat">AI Powered</Chip>
                <Chip color="secondary" variant="flat">Český text</Chip>
                <Chip color="success" variant="flat">HTML formátování</Chip>
                <Chip color="warning" variant="flat">Google Gemini API</Chip>
                <Chip color="danger" variant="flat">Hero UI</Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
  );
}
