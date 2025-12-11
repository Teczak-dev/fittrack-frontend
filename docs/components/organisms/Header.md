[← Powrót do spisu komponentów](../../components_storybook.md)

# Header

Source: `src/components/organisms/Header/Header.tsx`

Exports: `HeaderHome`, `HeaderHomeMobile`, `HeaderApp`, `HeaderAppMobile`

Opis:
- Różne warianty nagłówka (desktop/mobile, strona główna i aplikacja po zalogowaniu). Zawiera logo, nawigację oraz przyciski akcji (zmiana motywu, logowanie/rejestracja).

Props (wybrane):
- `HeaderHome` / `HeaderHomeMobile`: `home: () => void`, `discover: () => void`, `price: () => void`.

Użycie:
```tsx
import { HeaderHome, HeaderApp } from 'src/components/organisms/Header/Header';
<HeaderHome home={() => {}} discover={() => {}} price={() => {}} />
<HeaderApp />
```

Uwagi:
- Korzysta z `useTheme`, `useScreenWidth`, `useUser`, `getProfile` i `logout`.
