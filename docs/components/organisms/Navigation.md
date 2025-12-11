[← Powrót do spisu komponentów](../../components_storybook.md)

# Navigation

Source: `src/components/organisms/Navigation/Navigation.tsx`

Exports: `Navigation`, `NavigationDesktopMedium`, `NavigationMobile`

Opis:
- Elementy nawigacji aplikacji (pulpit, ćwiczenia, analizuj, kalorie). Dostępne różne warianty dostosowane do rozmiaru ekranu.

Props: brak (komponenty samodzielnie korzystają z kontekstu i hooków)

Użycie:
```tsx
import { Navigation } from 'src/components/organisms/Navigation/Navigation';
<Navigation />
```

Uwagi:
- Używa `NavigationLink` (atom) oraz grafik ikon nawigacji; reaguje na `useTheme`.
