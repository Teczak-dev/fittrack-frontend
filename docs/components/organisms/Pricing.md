# Pricing

Source: `src/components/organisms/Pricing/Pricing.tsx`

Exports: `Pricing`

Opis:
- Sekcja cennika wyświetlająca tytuł, pudełka cenowe (`PricingBox`) i opis polityki cenowej aplikacji.

Props:
- `onClick: () => void` — callback przekazywany do `PricingBox`.

Użycie:
```tsx
import { Pricing } from 'src/components/organisms/Pricing/Pricing';
<Pricing onClick={() => console.log('clicked')} />
```

Uwagi:
- Korzysta z molekuły `PricingBox`.
