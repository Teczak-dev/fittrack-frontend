> **Czas spędzony nad projektem:** ~70h
# FitTrack Frontend

## Krótki opis
FitTrack to prosty front-end aplikacji śledzącej aktywność fizyczną (React + TypeScript + Vite). Aplikacja prezentuje pulpit użytkownika z widgetami, stronę główną z bannerem/promocją, ekran ćwiczeń oraz formularze logowania/rejestracji/resetu hasła.

## Funkcjonalności
- Strona główna z bannerem i sekcjami Discover i Pricing
- Formularze: logowanie, rejestracja, reset hasła (z walidacją)
- Dashboard z widgetami (siatka 4x3 na desktopie)
- Responsywne komponenty (desktop / tablet / mobile)
- Theme (ciemny / jasny) z globalnymi klasami
- Prosty system widgetów (przykładowe widgety)
Krótki przewodnik po frontendzie aplikacji FitTrack.

##Struktura projektu

Zobacz `docs/structure.md` dla szczegółowego opisu struktury projektu i lokalizacji ważnych plików.

Przydatne pliki

- `src/global.css` — globalne utility (przyciski, rounded, shadow)
- `src/hooks/` — niestandardowe hooki (np. `useLoginForm`, `useRegisterForm`)
- `src/reducers/` — reducery (np. `registerFormReducer`)
- `src/components/` — komponenty aplikacji (atoms/molecules/organisms/templates)

Następne kroki / docs

Pełna dokumentacja znajduje się w folderze `docs/`. Sugerowane kolejne pliki do uzupełnienia:

- `docs/setup.md` — szczegółowy opis uruchamiania (już zawarty)
- `docs/architecture.md` — diagramy i opis architektury
- `docs/components.md` — kluczowe komponenty i ich API
- `docs/adr.md` — decyzje architektoniczne

## Szybki start
1. Sklonuj repozytorium
```bash
git clone <repo-url>
cd fittrack-frontend
```
2. Zainstaluj zależności
```bash
npm install
```
3. Uruchom w trybie deweloperskim
```bash
npm run dev
```
4. Otwórz w przeglądarce (Vite poda URL, zwykle `http://localhost:5173`)

## Budowanie produkcyjne
```bash
npm run build
npm run preview
```

## Konfiguracja
- Projekt nie wymaga kluczy API w tym repo (jest front-endem). Jeśli podłączysz backend, skonfiguruj URL w `src/api/*` lub przez zmienne środowiskowe.

## Struktura projektu (krótko)
- `src/` — kod źródłowy
  - `components/` — atoms/molecules/organisms/templates
  - `context/` — React Contexts (Theme, Workouts itp.)
  - `hooks/` — custom hooks (`useRegisterForm`, `useLoginForm`)
  - `reducers/` — reducer-y (np. `registerFormReducer`)
  - `utils/` — helpery i walidacja
  - `assets/` — obrazy i zasoby publiczne
- `public/` — statyczne pliki publiczne

Pełna dokumentacja znajduje się w katalogu `docs/`.

## Biblioteki (wybrane)
- React + TypeScript — bezpieczny, typowany front-end
- Vite — szybki bundler i dev server
- react-router-dom — routowanie (jeśli jest używane)

## Screenshots
Zobacz `docs/screenshots.md` — zawiera min. 2 zrzuty ekranu oraz instrukcję jak je podmienić.

## Known issues
Spis znanych problemów w `docs/known_issues.md`.

## Architektura i komponenty
- Diagram architektury i opis kluczowych komponentów: `docs/architecture.md` i `docs/components.md`.

## Co sprawiło trudność
- Krótkie omówienie problemów i rozwiązań: `docs/adr.md`.

## Contribution
- Instrukcja dodawania funkcjonalności: `docs/contribution.md`.

## Live demo
- Jeśli uruchomisz backend i wdrożysz, podaj link do live demo tutaj.

## Video demo
- Dodaj screencast w `docs/video.md` (link do YouTube lub plik `.webp`).

## Licencja
Sprawdź plik `LICENSE` w repozytorium.
# Fittrack - Frontend Solution💀

---

## 👨‍💻 Autor

**Mikołaj Sobczak** - [@Teczak-dev](https://github.com/Teczak-dev)

- 🌐 **Website:** [mikolaj-sobczak.pl](https://mikolaj-sobczak.pl/)
- 💼 **LinkedIn:** [Mikołaj Sobczak](https://www.linkedin.com/in/mikołaj-sobczak-27b0a429a)
- 📧 **Contact:** poprzez GitHub Issues

---

*Projekt stworzony w celach edukacyjnych jako demonstracja nowoczesnych technik frontend development.*
