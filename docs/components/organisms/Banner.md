[← Powrót do spisu komponentów](../../components_storybook.md)

# Banner

# Banner

Source: `src/components/organisms/Banner/Banner.tsx`

Exports: `BannerHP`

Opis:
- Sekcja banera używana na stronie głównej. Pokazuje tytuł aplikacji i obrazek po prawej (desktop) lub poniżej (mobile).

Props: brak

Użycie:
```tsx
import { BannerHP } from 'src/components/organisms/Banner/Banner';
<BannerHP />
```

Uwagi:
- Korzysta z kontekstu `useTheme` aby dopasować kolory i z lokalnych zasobów obrazów (`assets/images/banner.png`).
