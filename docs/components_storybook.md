# Komponenty — statyczny "storybook"

[← Powrót do README](../README.md)

Ten plik to prosty, statyczny spis komponentów znajdujących się w `src/components`. Nie wymaga uruchamiania Storybook — zawiera krótkie przykłady importu i podstawowego użycia.

Uwaga: przykłady pokazują minimalne użycie; niektóre komponenty oczekują dodatkowych zależności (np. providerów) lub plików stylów znajdujących się w repozytorium.

## Atomy (`src/components/atoms`)

- [Button](components/atoms/Button.md)
- [Input](components/atoms/Input.md)
- [Link](components/atoms/Link.md)
- [Image](components/atoms/Image.md)
- [LoadingSpinner](components/atoms/LoadingSpinner.md)
- [Typography](components/atoms/Typography.md)
- [ListElement](components/atoms/LinstElement.md)
## Molekuły (`src/components/molecules`)

- [TextWithBG](components/molecules/TextWithBG.md)
- [PricingBox](components/molecules/PricingBox.md)

## Organisms

- [AddWorkout](components/organisms/AddWorkout.md)
- [Banner](components/organisms/Banner.md)
- [ChangePassword](components/organisms/ChangePassword.md)
- [DeleteAccount](components/organisms/DeleteAccount.md)
- [Discover](components/organisms/Discover.md)
- [Footer](components/organisms/Footer.md)
- [Forms](components/organisms/Forms.md)
- [Header](components/organisms/Header.md)
- [Navigation](components/organisms/Navigation.md)
- [Pricing](components/organisms/Pricing.md)
- [ProtectedRoute](components/organisms/ProtectedRoute.md)
- [Widgets](components/organisms/Widgets.md)

## Szablony (`src/components/templates`)

Szablony to układy stron — importuj z katalogu `templates`, np.:

```tsx
import { HomePageLayout } from 'src/components/templates/HomePageLayout/HomePageLayout';
<HomePageLayout />
```

### Lista szablonów (templates)

- [HomePageLayout](components/templates/HomePageLayout.md) — Strona główna aplikacji (baner, discover, sekcje informacyjne).
- [MainAppLayout](components/templates/MainAppLayout.md) — Główny layout aplikacji po zalogowaniu (nagłówek, nawigacja, obszar treści).
- [AccountLayout](components/templates/AccountLayout.md) — Układ strony konta użytkownika.
- [AnalizeLayout](components/templates/AnalizeLayout.md) — Układ dla widoków analiz i wykresów.
- [CaloriesLayout](components/templates/CaloriesLayout.md) — Widok kalorii i historii kalorii.
- [DashboardLayout](components/templates/DashboardLayout.md) — Pulpit użytkownika z widgetami i podsumowaniami.
- [ForgotPasswordLayout](components/templates/ForgotPasswordLayout.md) — Layout procesu przypominania hasła.
- [LoginLayout](components/templates/LoginLayout.md) — Layout strony logowania.
- [RegisterLayout](components/templates/RegisterLayout.md) — Layout strony rejestracji.
- [ResetPasswordLayout](components/templates/ResetPasswordLayout.md) — Layout ustawienia nowego hasła.
- [VerifyAccountLayout](components/templates/VerifyAccountLayout.md) — Layout potwierdzania konta / weryfikacji email.
- [WorkoutsLayout](components/templates/WorkoutsLayout.md) — Layout listy treningów i szczegółów.
