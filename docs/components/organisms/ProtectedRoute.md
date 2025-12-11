[← Powrót do spisu komponentów](../../components_storybook.md)

# ProtectedRoute

Source: `src/components/organisms/ProtectedRoute/ProtectedRoute.tsx`

Exports: `ProtectedRoute`

Opis:
- Komponent rutingu chronionego. Sprawdza token w `localStorage` i w przypadku braku przekierowuje na stronę domową. Jeśli jest token, otacza aplikację providerami (`UserProvider`, `WorkoutsProvider`, `WorkoutCategoryProvider`) i renderuje `MainAppLayout`.

Props: brak

Użycie:
```tsx
import { ProtectedRoute } from 'src/components/organisms/ProtectedRoute/ProtectedRoute';
<ProtectedRoute />
```

Uwagi:
- Komponent jest przeznaczony do użycia jako zabezpieczony punkt wejścia w pliku routingu aplikacji.
