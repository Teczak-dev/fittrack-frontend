# Struktura projektu (szczegóły)

Poniżej znajduje się opis głównych katalogów i plików w repozytorium.

- `src/` — kod źródłowy aplikacji
  - `components/` — komponenty podzielone według podejścia atomic (atoms, molecules, organisms, templates)
  - `assets/` — obrazy i zasoby
  - `context/` — React Contexts (np. ThemeContext, WorkoutsContext)
  - `hooks/` — niestandardowe hooki (np. `useLoginForm`, `useRegisterForm`)
  - `reducers/` — czyste funkcje reducerów (np. `registerFormReducer`)
  - `utils/` — pomocnicze funkcje i walidacja
  - `templates/` — strony i layouty (HomePageLayout, DashboardLayout, AccountLayout)

- `README.md` — główna dokumentacja (krótki przewodnik + odnośniki do `docs/`)
- `docs/` — rozszerzona dokumentacja projektu (ten folder)