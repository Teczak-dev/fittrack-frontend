[← Powrót do spisu komponentów](../../components_storybook.md)

# Widgets

Source: `src/components/organisms/Widgets/` (wiele małych komponentów)

Exports (przykładowe pliki):
- `Data.tsx`, `LastWorkout.tsx`, `Motto.tsx`, `RadarOfWorkouts.tsx`, `SoonAdded.tsx`, `Stats.tsx`, `StatsMonth.tsx`, `Streak.tsx`, `TodaySummary.tsx`, `WheelOfWorkouts.tsx`, `WorkoutInfo.tsx`.

Opis:
- Zbiór drobnych widgetów wyświetlanych w panelu użytkownika: podsumowania dzienne, statystyki, ostatni trening, pasek streak itp.

Użycie:
```tsx
import { LastWorkout } from 'src/components/organisms/Widgets/LastWorkout';
<LastWorkout />
```

Uwagi:
- Każdy widget jest małym komponentem i może wymagać dostępu do kontekstu `Workouts` lub `User`.
- Sprawdź pliki w `src/components/organisms/Widgets/` aby znaleźć dokładne API każdego widgetu.

## Widgety (osobne pliki)

- [Data](Data.md)
- [LastWorkout](LastWorkout.md)
- [Motto](Motto.md)
- [RadarOfWorkouts](RadarOfWorkouts.md)
- [SoonAdded](SoonAdded.md)
- [Stats](Stats.md)
- [StatsMonth](StatsMonth.md)
- [Streak](Streak.md)
- [TodaySummary](TodaySummary.md)
- [WheelOfWorkouts](WheelOfWorkouts.md)
- [WorkoutInfo](WorkoutInfo.md)
