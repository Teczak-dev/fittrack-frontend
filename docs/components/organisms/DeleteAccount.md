[← Powrót do spisu komponentów](../../components_storybook.md)

# DeleteAccount

Source: `src/components/organisms/DeleteAccount/DeleteAccount.tsx`

Exports: `DeleteAccount`

Opis:
- Modal do usuwania konta użytkownika. Prosi o potwierdzenie hasłem i wywołuje API usunięcia konta.

Props:
- `closeDelete: () => void` — funkcja zamykająca modal.

Użycie:
```tsx
import { DeleteAccount } from 'src/components/organisms/DeleteAccount/DeleteAccount';
<DeleteAccount closeDelete={() => setOpen(false)} />
```

Uwagi:
- Po usunięciu wywołuje `logout()` i nawigację do strony logowania.
