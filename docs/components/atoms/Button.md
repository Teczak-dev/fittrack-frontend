[← Powrót do spisu komponentów](../../components_storybook.md)

# Button

Source: `src/components/atoms/Button/Button.tsx`

Exports: `Button`, `ThemeButton`

Opis:
- Przyciski używane w całej aplikacji. `ThemeButton` ma dodatkowe style zależne od aktualnego motywu.

Props (wybrane):
- `children: React.ReactNode`
- `onClick?: () => void`
- `variant?: 'primary' | 'secondary'`
- `disabled?: boolean`

Użycie:
```tsx
import { Button } from 'src/components/atoms/Button/Button';
<Button onClick={() => {}}>Kliknij</Button>
```
