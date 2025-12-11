# Architektura aplikacji

[← Powrót do README](../README.md)

## Krótki opis architektury frontendowej FitTrack.

1. Warstwa prezentacji
- `src/components/` — komponenty podzielone według podejścia atomic: `atoms`, `molecules`, `organisms`, `templates`.

2. Logika aplikacji
- `src/hooks/` — niestandardowe hooki enkapsulujące logikę (np. `useLoginForm`, `useRegisterForm`).
- `src/reducers/` — czyste reducery do złożonego zarządzania stanem lokalnym.
- `src/context/` — konteksty React (ThemeContext, WorkoutsContext itp.).

3. Stylowanie
- CSS Modules per-komponent oraz `src/global.css` dla utility classes (przyciski, shadow, rounded).

4. Łączenie z api
- `src/api` - połączenia z api.

5. Typy wiekszych danych
- `src/types` - znajdują się tutaj istotne interfejsy złożonych obiektów istotnych np. `User`, `Workouts`.

6. Logika pomocnicza
- `src/utils` - funckje które nie wymagają umieszczenia w custom hooki, reducery.
