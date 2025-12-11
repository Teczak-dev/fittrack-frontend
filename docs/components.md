# Kluczowe komponenty

[← Powrót do README](../README.md)

## Opis ważnych komponentów i konwencji ich użycia.

- `HeaderHome` — pasek górny, zawiera nawigację i akcje (login/register). home, discover i price są typu: 
    - ```tsx 
        () => void;
      ```
    - Użycie: 
        ```tsx
            <HeaderHome home={homeHandler} discover={discoverHandler} price={priceHandler} />
        ```
- `Button` — Custom komponent przycisku, posiada startowe style. 
    - Opcjonalne atrybuty:
    ```tsx
        onClick: ()=> void;
        variant: 'primary' | 'secondary';
        disabled: boolean;
        className: string;
    ```
    - Użycie:
    ```tsx
        {/* Sposób 1 */}
        <Button onClick={clickHandler} variant={'primary'} disabled={false} className='nazwa'>
            Tekst
        </Button>
        {/* Sposób 2 */}
        <Button onClick={clickHandler} variant={'secondary'} disabled={false}>
            Tekst
        </Button>
        {/* Sposób 3 */}
        <Button onClick={clickHandler}>
            Tekst
        </Button>
    ```
- `Forms` — komponenty formularzy logowania/rejestracji i innych.
    - komponent LoginForm:
        ```tsx
            {/* typy argumentów */}
            login: () => void;
            error?: null;
            {/* przykładowe użycie */}
            <LoginForm login={loginHandler} error={'treść błędu'} />
        ```
- `DashboardLayout` — grid widgetów; 4x3 na desktopie, responsywne układy dla mniejszych ekranów 2x6.
    - Użycie:
    ```tsx
        {/* Sposób 1 */}
        <DashboardLayout className='nazwa' />
        {/* Sposób 2 */}
        <DashboardLayout  />
    ```

Konwencje
- Każdy komponent ma swój katalog i plik CSS Module (`Component.module.css`).
- Preferuj prosty interface props i unikaj przekazywania zbyt wielu booleanów.
