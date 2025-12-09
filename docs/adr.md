# ADR — Decisions

Zbiór istotnych decyzji architektonicznych (Architecture Decision Records).

1. Stylowanie
- Użycie CSS Modules + `src/global.css` dla powtarzalnych utility classes.

2. State management
- Lokalny stan formularzy w hookach + reducer dla bardziej złożonych formularzy (rejestracja).
- Nie wprowadzono globalnego store (Redux) — aktualne wymagania nie wymagają skomplikowanego zarządzania stanem.

3. Bundler
- Vite wybrano ze względu na szybki restart i prostą konfigurację z TypeScript.
