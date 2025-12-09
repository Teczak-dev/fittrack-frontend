# Kluczowe komponenty

Opis ważnych komponentów i konwencji ich użycia.

- `Header` — pasek górny, zawiera nawigację i akcje (login/register). Używa klas tematycznych `.Light`/`.Dark`.
- `Banner` — hero na stronie głównej; responsywny grid: desktop obraz z lewej / tekst z prawej, mobile tekst przed obrazem.
- `Discover` — sekcja z kartami; korzysta z utility classes (`.card`, `.shadow-*`, `.rounded-*`).
- `Forms` — komponenty formularzy logowania/rejestracji; logika przeniesiona do `src/hooks/useLoginForm.ts` i `src/hooks/useRegisterForm.ts`.
- `DashboardLayout` — grid widgetów; 4x3 na desktopie, responsywne układy dla mniejszych ekranów.

Konwencje
- Każdy komponent ma swój katalog i plik CSS Module (`Component.module.css`).
- Preferuj prosty interface props i unikaj przekazywania zbyt wielu booleanów.
