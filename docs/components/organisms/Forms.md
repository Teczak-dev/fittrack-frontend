
[← Powrót do spisu komponentów](../../components_storybook.md)

# Forms

Source: `src/components/organisms/Forms/Forms.tsx`

Exports: `LoginForm`, `RegisterForm`, `ForgotPasswordForm`, `ResetPasswordForm`

Opis:
- Zestaw komponentów formularzowych używanych w otoczeniu autoryzacji: logowanie, rejestracja, reset hasła, zapomniane hasło.

Props (wybrane):
- `LoginForm`: `login: (email:string, pass:string) => void`, `error?: string`.
- `RegisterForm`: `register: (email:string, pass:string, username: string) => void`, `error?: string`.
- `ForgotPasswordForm`: `resetPassword: (email: string) => void`, `msg?: string`.
- `ResetPasswordForm`: `handleReset: (newPassword: string) => void`, `msg: string`.

Użycie:
```tsx
import { LoginForm, RegisterForm } from 'src/components/organisms/Forms/Forms';

<LoginForm login={(e,p) => console.log(e,p)} />
<RegisterForm register={(e,p,u) => console.log(e,p,u)} />
```

Uwagi:
- Formularze korzystają z hooków `useLoginForm` / `useRegisterForm` oraz `validateEmail`/`validatePassword`.
