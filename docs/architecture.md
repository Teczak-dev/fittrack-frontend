# Architektura aplikacji

Krótki opis architektury frontendowej FitTrack.

1. Warstwa prezentacji
- `src/components/` — komponenty podzielone według podejścia atomic: `atoms`, `molecules`, `organisms`, `templates`.

2. Logika aplikacji
- `src/hooks/` — niestandardowe hooki enkapsulujące logikę (np. `useLoginForm`, `useRegisterForm`).
- `src/reducers/` — czyste reducery do złożonego zarządzania stanem lokalnym.
- `src/context/` — konteksty React (ThemeContext, WorkoutsContext itp.).

3. Stylowanie
- CSS Modules per-komponent oraz `src/global.css` dla utility classes (przyciski, shadow, rounded).

4. Narzędzia i procesy
- Vite jako bundler / dev server.
- TypeScript dla bezpieczniejszego typowania.

Wskazówki do rozwoju
- Utrzymuj komponenty “czyste” — unikać side-effectów w renderze, przenieś logikę do hooków.
