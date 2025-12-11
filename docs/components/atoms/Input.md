[← Powrót do spisu komponentów](../../components_storybook.md)

# Input

Source: `src/components/atoms/Input/Input.tsx`

Exports: `Input`

Opis:
- Prosty komponent input używany w formularzach. Przyjmuje typ, placeholder, value i callback `onChange`.

Props (wybrane):
- `type?: 'text' | 'email' | 'password'`
- `placeholder?: string`
- `value?: string`
- `onChange?: (value: string) => void`

Użycie:
```tsx
import { Input } from 'src/components/atoms/Input/Input';
<Input placeholder="Wpisz..." value={value} onChange={setValue} />
```
