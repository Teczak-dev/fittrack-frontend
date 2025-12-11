[← Powrót do spisu komponentów](../../components_storybook.md)

# ChangePassword

Source: `src/components/organisms/ChangePassword/ChangePassword.tsx`

Exports: `ChangePassword`

Opis:
- Modal pozwalający użytkownikowi zmienić aktualne hasło. Zawiera walidację długości hasła i potwierdzenia.

Props:
- `closeChangePassword: () => void` — funkcja zamykająca modal.

Użycie:
```tsx
import { ChangePassword } from 'src/components/organisms/ChangePassword/ChangePassword';
<ChangePassword closeChangePassword={() => setOpen(false)} />
```

Uwagi:
- Używa `changePassword` z `src/api/auth` oraz `validatePassword` z `src/utils/validation`.
