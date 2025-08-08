# Český Lorem Ipsum Generator

Generátor českého lorem ipsum textu s AI pomocí Google Gemini API.

## Funkce

- 🤖 AI-powered generování českého textu
- 🎨 HTML formátování (odstavce, nadpisy, seznamy, tučný text, kurzíva)
- 🌙 Tmavý/světlý režim
- 📱 Responzivní design
- ⚡ Rychlé generování

## Instalace

1. Naklonujte repozitář:

```bash
git clone <repository-url>
cd lorem-ipsum
```

2. Nainstalujte závislosti:

```bash
npm install
```

3. Nastavte environment proměnné:

### Lokální vývoj

Vytvořte soubor `.env.local` v root adresáři:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Vercel deployment

V Vercel dashboardu přidejte environment proměnnou:

- Název: `GEMINI_API_KEY`
- Hodnota: Váš Google Gemini API klíč

## Získání API klíče

1. Jděte na [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Přihlaste se s Google účtem
3. Klikněte na "Create API Key"
4. Zkopírujte klíč a použijte ho v environment proměnné

## Spuštění

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči.

## Deployment

Nejjednodušší způsob je použít [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Nezapomeňte nastavit environment proměnnou `GEMINI_API_KEY` v Vercel dashboardu.

## Technologie

- [Next.js 14](https://nextjs.org/) - React framework
- [HeroUI](https://heroui.com/) - UI komponenty
- [Google Gemini API](https://ai.google.dev/) - AI generování
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Licence

MIT License
