# Changelog

## [1.2.0] - 2024-12-19

### Changed

- Změněn Gemini model na `gemini-1.5-flash-exp` pro minimalizaci nákladů (nejlevnější dostupný model)

## [1.1.0] - 2024-12-19

### Added

- Bezpečné použití environment proměnných pro API klíče
- Lepší error handling pro API chyby
- Optimalizace pro client-side routing
- Vylepšené UX s lepšími chybovými zprávami

### Changed

- API klíč nyní používá `GEMINI_API_KEY` environment proměnnou
- Přidána validace environment proměnných
- Optimalizovány event handlery pomocí `useCallback`
- Vylepšené error handling pro různé typy API chyb

### Security

- Odstraněn hardcoded API klíč z kódu
- Přidány bezpečnostní headers
- API klíč je nyní bezpečně uložen v environment proměnných

### Documentation

- Aktualizován README.md s instrukcemi pro nastavení environment proměnných
- Přidány instrukce pro získání Google Gemini API klíče
- Přidány instrukce pro Vercel deployment

## [1.0.0] - 2024-12-19

### Added

- Český Lorem Ipsum Generator s AI
- HTML formátování (odstavce, nadpisy, seznamy, tučný text, kurzíva)
- Tmavý/světlý režim
- Responzivní design
- Google Gemini API integrace
