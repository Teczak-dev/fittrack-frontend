# Struktura projektu (szczegóły)

Poniżej znajduje się opis głównych katalogów i plików w src.

```bash
src
 |-- api
 |   |-- auth.ts # export funckji łączących z api (związane z kontem)
 |   |-- streak.ts # export funckji łączących z api (związane z streakiem)
 |   |-- workoutCategory.ts # export funckji łączących z api (związane z typem ćwiczeń)
 |   |__ workouts.ts # export funckji łączących z api (związane z ćwiczeniami użytkownika)
 |-- assets
 |   |__ images
 |       |__ # zdjęcia 
 |-- components
 |   |-- atoms
 |   |   |--
 |   |-- molecules
 |   |   |--
 |   |-- organisms
 |   |   |--
 |   |-- templates
 |       |--
 |-- context
 |   |-- ScreenWidthContext.tsx # Context szerokości ekranu
 |   |-- ThemeContext.tsx # Context motywu użytkownika
 |   |-- UserContext.tsx # Context użytkownika
 |   |-- workoutCategoryContext.tsx # Context typów ćwiczeń
 |   |__ WorkoutsContext.tsx # Context ćwiczeń użytkownika
 |-- hooks
 |   |-- useLoginForm.ts # Custom hook walidujacy formularz logowania
 |   |-- useRegisterForm.ts # Custom hook walidujacy formularz rejestracji
 |   |-- useScreenWidth.ts # Custom hook do contextu szerokości ekranu
 |   |-- useTheme.ts # Custom hook do contextu motywu
 |   |-- useUser.ts # Custom hook do contextu użytkownika
 |   |-- useWorkoutCategoty.ts # Custom hook do contextu typów ćwiczeń
 |   |__ useWorkouts.ts # Custom hook do contextu ćwiczeń użytkownika
 |-- pages
 |   |-- Account.tsx
 |   |-- Analize.tsx
 |   |-- Calories.tsx
 |   |-- Dashboard.tsx
 |   |-- ForgotPassword.tsx
 |   |-- Home.tsx
 |   |-- LoadingPage.tsx
 |   |-- Login.tsx
 |   |-- Me.tsx
 |   |-- Register.tsx
 |   |-- ResetPassword.tsx
 |   |-- VerifyAccount.tsx
 |   |-- Workouts.tsx
 |   |-- WrongAdress.tsx
 |-- reducers
 |   |__ registerFormReducer.ts # reducer do custom hooka walidującego formularz rejestracji
 |-- types
 |   |-- savedData.ts
 |   |-- user.ts
 |   |-- workout.ts
 |   |-- workoutCategory.ts
 |-- utils
 |   |-- mottos.ts # posiada pare haseł które losuje na dany dzień
 |   |-- safeParseJson.ts # export funkcji do bezpiecznej zmiany danych z response
 |   |-- sendToFile.ts # tworzy plik do pobrania po czym go pobiera
 |   |-- validation.ts # exportuje funckje do walidacji pól formularzy
 |   |__ workoutsManipulation.ts # exportuje funkcje do manipulacji danymi ćwiczeń użytkownika
 |-- App.tsx # przekierowuje na /me
 |-- global.css #
 |-- main.tsx # główny plik projektu
```
