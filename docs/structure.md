# Struktura projektu (szczegóły)

[← Powrót do README](../README.md)

Poniżej znajduje się opis głównych katalogów i plików w src.

opis komponentów znajduje się [tutaj](./components_storybook.md)

każdy folder w atoms, molecules, organisms i templates posiada pliki `.tsx` i `module.css` o takiej samej nazwie

```bash
src
├── api
│   ├── auth.ts                     # funkcje łączące z API (konto)
│   ├── streak.ts                   # funkcje łączące z API (streak)
│   ├── workoutCategory.ts          # funkcje łączące z API (typy ćwiczeń)
│   └── workouts.ts                 # funkcje łączące z API (ćwiczenia użytkownika)
├── assets
│   └── images/                     # obrazy i statyczne zasoby
├── components
│   ├── atoms
│   │   ├── Button/
│   │   ├── ErrorMessage/
│   │   ├── Image/
│   │   ├── Input/
│   │   ├── Link/
│   │   ├── LinstElement/
│   │   ├── LoadingSpinner/
│   │   └── Typography/
│   ├── molecules
│   │   ├── PricingBox/
│   │   └── TextWithBG/
│   ├── organisms
│   │   ├── AddWorkout/
│   │   ├── Banner/
│   │   ├── ChangePassword/
│   │   ├── DeleteAccount/
│   │   ├── Discover/
│   │   ├── Footer/
│   │   ├── Forms/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── Pricing/
│   │   ├── ProtectedRoute/
│   │   └── Widgets/
│   │       ├── Data.tsx
│   │       ├── LastWorkout.tsx
│   │       ├── Motto.tsx
│   │       ├── RadarOfWorkouts.tsx
│   │       ├── SoonAdded.tsx
│   │       ├── Stats.tsx
│   │       ├── StatsMonth.tsx
│   │       ├── Streak.tsx
│   │       ├── TodaySummary.tsx
│   │       ├── WheelOfWorkouts.tsx
│   │       └── WorkoutInfo.tsx
│   └── templates
│       ├── AccountLayout/
│       ├── AnalizeLayout/
│       ├── CaloriesLayout/
│       ├── DashboardLayout/
│       ├── ForgotPasswordLayout/
│       ├── HomePageLayout/
│       ├── LoginLayout/
│       ├── MainAppLayout/
│       ├── RegisterLayout/
│       ├── ResetPasswordLayout/
│       ├── VerifyAccountLayout/
│       └── WorkoutsLayout/
├── context
│   ├── ScreenWidthContext.tsx      # Context szerokości ekranu
│   ├── ThemeContext.tsx            # Context motywu użytkownika
│   ├── UserContext.tsx             # Context użytkownika
│   ├── workoutCategoryContext.tsx  # Context typów ćwiczeń
│   └── WorkoutsContext.tsx         # Context ćwiczeń
├── hooks
│   ├── useLoginForm.ts             # Custom hook do formularza logowania
│   ├── useRegisterForm.ts          # Custom hook do formularza rejestracji
│   ├── useScreenWidth.ts
│   ├── useTheme.ts
│   ├── useUser.ts
│   ├── useWorkoutCategoty.ts
│   └── useWorkouts.ts
├── pages
│   ├── Account.tsx
│   ├── Analize.tsx
│   ├── Calories.tsx
│   ├── Dashboard.tsx
│   ├── ForgotPassword.tsx
│   ├── Home.tsx
│   ├── LoadingPage.tsx
│   ├── Login.tsx
│   ├── Me.tsx
│   ├── Register.tsx
│   ├── ResetPassword.tsx
│   ├── VerifyAccount.tsx
│   ├── Workouts.tsx
│   └── WrongAdress.tsx
├── reducers
│   └── registerFormReducer.ts      # Reducer używany do stanów pól w formularzu rejestracji
├── types
│   ├── savedData.ts
│   ├── user.ts
│   ├── workout.ts
│   └── workoutCategory.ts
├── utils
│   ├── mottos.ts                   # Utility plik do manipulacji mottami
│   ├── safeParseJson.ts            # Utility plik do bezpiecznego parsowania response z api
│   ├── sendToFile.ts               # Utility plik do pobrania pliku z danymi uzytkownika
│   ├── validation.ts               # Utility plik do walidacji formularzy
│   └── workoutsManipulation.ts     # Utility plik do manipulacji na ćwiczeniach
├── App.tsx
├── global.css
└── main.tsx
```
