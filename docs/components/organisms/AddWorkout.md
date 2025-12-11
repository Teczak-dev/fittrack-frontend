[← Powrót do spisu komponentów](../../components_storybook.md)

# AddWorkout

Source: `src/components/organisms/AddWorkout/AddWorkout.tsx`

Exports: `AddWorkout`

Opis:
- Modal / overlay służący do dodawania nowego treningu. Pokazuje formularz z wyborem nazwy treningu, czasu trwania i spalonych kalorii.

Props:
- `switchDisplay: () => void` — funkcja do zamknięcia/podmiany widoku (przełączenie wyświetlania formularza).

Użycie:
```tsx
import { AddWorkout } from 'src/components/organisms/AddWorkout/AddWorkout';
<AddWorkout switchDisplay={() => setShow(false)} />
```

Uwagi:
- Wykorzystuje `useWorkoutCategory`, `useWorkouts` oraz API `addWorkoutToDB`/`getUserWorkouts`.
