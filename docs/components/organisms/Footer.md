[← Powrót do spisu komponentów](../../components_storybook.md)

# Footer

Source: `src/components/organisms/Footer/Footer.tsx`

Exports: `Footer`

Opis:
- Stopka aplikacji z linkami do zewnętrznych zasobów i informacją o autorze.

Props: brak

Użycie:
```tsx
import { Footer } from 'src/components/organisms/Footer/Footer';
<Footer />
```

Uwagi:
- Używa `Link` oraz `ListElement` z atomów; reaguje na `useTheme` aby dopasować wygląd.
