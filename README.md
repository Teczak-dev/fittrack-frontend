# Fittrack

## Krótki opis
FitTrack to front-end aplikacji śledzącej aktywność fizyczną, stworzony w React, TypeScript i Vite.  
Aplikacja oferuje pulpit użytkownika z widgetami, stronę główną z bannerami/promocjami, ekran ćwiczeń oraz formularze logowania, rejestracji i resetu hasła.  
FitTrack komunikuje się z backendowym API, gdzie użytkownik otrzymuje token JWT po zalogowaniu, aby uzyskać dostęp do chronionych funkcji aplikacji .
Front-end obsługuje również przypadki brzegowe, takie jak nieważne tokeny, błędy w żądaniach czy walidacja formularzy, zapewniając płynne i bezpieczne doświadczenie użytkownika.

## Live demo
- [Link do live demo ->](https://fittrack.mikolaj-sobczak.pl)

## Screenshots
![pulpit](./public/img1.png)
![analiza](./public/img2.png)

## Video demo
![Video](./public/wideo.webp) 

## Funkcjonalności
- Strona główna
- Formularze: logowanie, rejestracja, reset hasła (z walidacją), weryfikacja maila
- Dashboard z widgetami (siatka 4x3 na desktopie) ( siatka 2x6 na urządzeniach mobilnych)
- Responsywne komponenty (desktop / tablet / mobile)
- Theme (ciemny / jasny) z globalnymi klasami
- Prosty system widgetów (przykładowe widgety)

### Krótki przewodnik po frontendzie aplikacji FitTrack.

## Szybki start
1. Sklonuj repozytorium
```bash
git clone https://github.com/Teczak-dev/fittrack-frontend.git
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
- Projekt nie wymaga kluczy API w tym repo, API jest prywatnym projektem do którego nie ma dostępu publicznego ze względów bezpieczeństwa, jeżeli masz własne API to zmień lokalizację w vite.config.ts 

- Wyjasnienie endpointów API znajdują się w [docs/api.md](./docs/api.md)

## Struktura projektu (krótko)
- `src/` — kod źródłowy
  - `components/` — atoms/molecules/organisms/templates
  - `context/` — React Contexts (Theme, Workouts itp.)
  - `hooks/` — custom hooks (`useRegisterForm`, `useLoginForm`)
  - `reducers/` — reducer-y (np. `registerFormReducer`)
  - `utils/` — helpery i walidacja
  - `assets/` — obrazy i zasoby publiczne

Pełna dokumentacja znajduje się w katalogu [docs/structure](./docs/structure.md).

## Biblioteki

- `hamburger-react` ^2.5.2 - do menu hamburget na stronie /home
- `react-circular-progressbar` ^2.2.0 - do renderowania kółka
- `react-device-detect` ^2.2.3 - do wykrywania typu urządzenia ( telefon / komputer )
- `recharts` ^3.5.1 - użyte do wyświetlania statystyk

## Known issues
Spis znanych problemów w [docs/known_issues.md](./docs/known_issues.md).

## Architektura i komponenty
- Diagram architektury i opis kluczowych komponentów: [docs/architecture.md](./docs/architecture.md) i [docs/components.md](./docs/components.md).

## ADR — Decisions
- dokładny opis: [docs/adr.md](./docs/adr.md).

Projekt stosuje atomic design oraz stylowanie za pomocą modułów

## Contribution
- Instrukcja dodawania funkcjonalności: [docs/contribution.md](./docs/contribution.md).

## Q&A
#### Co sprawiło największe problemy i jak je rozwiązałeś?
Największym problemem okazały się operacje na zbiorach danych (ćwiczenia). To na nich spędziłem najwięcej czasu. Poradziłem sobie dzięki korzystaniu z dokumentacji JS/TS, zasobów na StackOverflow oraz rozrysowaniu problemu.

## Licencja
Sprawdź plik `LICENSE` w repozytorium.

---

## 👨‍💻 Autor

**Mikołaj Sobczak** - [@Teczak-dev](https://github.com/Teczak-dev)

- 🌐 **Website:** [mikolaj-sobczak.pl](https://mikolaj-sobczak.pl/)
- 💼 **LinkedIn:** [Mikołaj Sobczak](https://www.linkedin.com/in/mikołaj-sobczak-27b0a429a)
- 📧 **Contact:** poprzez GitHub Issues

