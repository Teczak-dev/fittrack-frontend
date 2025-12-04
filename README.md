# Fittrack - Frontend Solution

> **Czas spędzony nad projektem:** ~60h💀

## 📋 Opis Projektu

Ta aplikacja umożliwia śledzenie treningów, dodawanie, edytowanie i analizowanie postępów treningowych. Frontend stworzony zgodnie z zasadami **Atomic Design** w React z TypeScript.

## 🎯 Główne Funkcje

- ✅ Tworzenie i logowanie konta z walidacją
- 🏋️ Dodawanie, przeglądanie i usuwanie treningów
- 📊 Postępy ćwiczeń z dnia, tygodnia, miesiąca
- 📈 Analizowanie postępów (czas, kalorie, typ ćwiczeń)
- 🔥 Utrzymywanie streak'u ćwiczeń
- 💭 Dodawanie motta
- 🌗 Jasny i ciemny motyw
- 📱 Pełna responsywność na urządzenia mobilne

---

## 🛠️ Technologie i Biblioteki

### 🎯 Core Technologies
- **React** `v19.2.0` - Biblioteka UI
- **TypeScript** `v5.9.3` - Typy statyczne
- **Vite** `v7.2.2` - Build tool i dev server

### 📚 Dependencies
- **React Router DOM** `v7.9.5` - Routing aplikacji
- **React Device Detect** `v2.2.3` - Wykrywanie urządzeń (mobile/desktop)
- **Hamburger React** `v2.5.2` - Komponent menu hamburger
- **OGL** `v1.0.11` - WebGL library (efekty wizualne)
- **React Bits** `v1.0.5` - Utility components

---

## 🏗️ Architektura Projektu

### 📁 Struktura Folderów

```
src/
├── 🎯 pages/                    # Strony aplikacji (top-level)
│   ├── Home.tsx                 # Strona główna
│   ├── Login.tsx               # Strona logowania
│   ├── Register.tsx            # Strona rejestracji
│   ├── ForgotPassword.tsx      # Reset hasła
│   └── Dashboard.tsx           # Panel użytkownika
├── 🧩 components/              # Komponenty Atomic Design
│   ├── ⚛️ atoms/               # Podstawowe komponenty
│   │   ├── Button/             # Przyciski
│   │   ├── Input/              # Pola input
│   │   ├── Typography/         # Komponenty tekstowe
│   │   ├── Image/              # Obrazy
│   │   ├── Link/               # Linki
│   │   ├── ErrorMessage/       # Komunikaty błędów
│   │   └── ListElement/        # Elementy listy
│   ├── 🔗 molecules/           # Kombinacje atomów
│   │   ├── TextWithBG/         # Tekst z tłem
│   │   └── PricingBox/         # Box cennikowy
│   ├── 🏢 organisms/           # Złożone komponenty
│   │   ├── Header/             # Nagłówek (desktop/mobile)
│   │   ├── Footer/             # Stopka
│   │   ├── Banner/             # Banner główny
│   │   ├── Forms/              # Formularze (Login/Register/Reset)
│   │   ├── Discover/           # Sekcja odkrywania
│   │   └── Pricing/            # Sekcja cennik
│   └── 📄 templates/           # Layouty stron
│       ├── HomePageLayout/     # Layout strony głównej
│       ├── LoginLayout/        # Layout logowania
│       ├── RegisterLayout/     # Layout rejestracji
│       └── ForgotPasswordLayout/ # Layout resetu hasła
├── 🎨 context/                 # Context API
│   ├── ThemeContext.tsx        # Provider motywów
│   ├── ThemeContextDefinition.ts # Definicja context
│   └── useTheme.ts            # Hook do motywów
├── 🔧 utils/                   # Utilities
│   └── validation.ts          # Funkcje walidacji
├── 🖼️ assets/                 # Statyczne zasoby
│   └── images/                # Obrazy
├── 🎨 global.css              # Globalne style
└── 📍 main.tsx                # Entry point
```

---

## 🧩 Kluczowe Komponenty

### ⚛️ **Atoms (Podstawowe komponenty)**

#### 🔘 Button Component
```tsx
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
}

// Użycie:
<Button variant="primary" onClick={handleLogin}>
    Zaloguj się
</Button>
```

#### 📝 Input Component
```tsx
interface InputProps {
    type?: 'text' | 'email' | 'password';
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    className?: string;
}

// Użycie:
<Input 
    type="email" 
    value={email} 
    onChange={setEmail}
    onBlur={handleEmailBlur}
/>
```

#### ✏️ Typography Component
```tsx
interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'body' | 'small';
    children: React.ReactNode;
    className?: string;
}

// Użycie:
<Typography variant="h1">Witaj w FitTracker</Typography>
```

### 🏢 **Organisms (Złożone komponenty)**

#### 📋 Forms Component
```tsx
// Formularz logowania z walidacją
export const LoginForm: React.FC<LoginFormProps> = ({login}) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const handleEmailBlur = () => {
        if (!isValidEmail(email)) {
            setEmailError('Podaj poprawny email');
        }
    };
    
    // Renderowanie formularza...
}
```

#### 🎪 Header Component
```tsx
// Header responsywny (desktop/mobile)
export const HeaderHome: React.FC<HeaderProps> = ({home, discover, price}) => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className={styles.header}>
            <Navigation />
            <ThemeButton onClick={toggleTheme} />
        </header>
    );
}
```

### 🎨 **Context & State Management**

#### 🌗 Theme Context
```tsx
// Zarządzanie motywami jasny/ciemny
export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Auto-detect system preference
        const localTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return localTheme ?? systemTheme;
    });
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', newTheme);
    };
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
```

---

## 🚀 Instalacja i Uruchomienie

### 📋 Wymagania
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0

### 🔧 Kroki instalacji

```bash
# 1. Klonowanie repozytorium
git clone https://github.com/Teczak-dev/fittrack-frontend.git
cd fittrack-frontend

# 2. Instalacja zależności
npm install

# 3. Uruchomienie w trybie deweloperskim
npm run dev

# 4. Build produkcyjny
npm run build

# 5. Preview buildu
npm run preview

# 6. Linting kodu
npm run lint
```

### 🌐 Dostęp do aplikacji
- **Development:** http://localhost:5173/app/fittrack/
- **Preview:** http://localhost:4173/app/fittrack/

---

## 📐 Atomic Design - Szczegółowe zastosowanie

### 🎯 **Filosofia projektu**

#### ⚛️ **Atoms** - Fundamentalne bloki
- Pojedyncze, nie do dalszego podziału komponenty
- Tylko props, bez wewnętrznej logiki biznesowej
- Przykłady: `Button`, `Input`, `Typography`, `Image`

#### 🔗 **Molecules** - Kombinacje Atomów  
- Grupują atomy w funkcjonalne jednostki
- Mogą mieć prostą logikę prezentacji
- Przykłady: `TextWithBG`, `PricingBox`

#### 🏢 **Organisms** - Sekcje Interfejsu
- Kompleksowe komponenty z logiką biznesową
- Zarządzają stanem i interakcjami
- Przykłady: `Header`, `Forms`, `Banner`

#### 📄 **Templates** - Układy Stron
- Definiują strukturę bez treści
- Kompozycja organizmów
- Przykłady: `HomePageLayout`, `LoginLayout`

#### 📱 **Pages** - Konkretne Strony
- Templates wypełnione danymi
- Połączenie z React Router
- Przykłady: `Home`, `Login`, `Register`

---

## 📊 Statystyki Projektu

```
📁 Struktura:
├── ~45 komponentów React
├── ~100 plików stylów CSS
├── 16 stron aplikacji
├── 5 contextów
├── x utility library
└── ~ 4500 linijek kodu

🧩 Breakdown komponentów:
├── Atoms: 8 komponentów
├── Molecules: 2 komponenty  
├── Organisms: 22 komponentów
├── Templates: 12 komponenty
└── Pages: 13 stron
```

---

## 📜 Licencja

**MIT License** - Zobacz [LICENSE](./LICENSE) dla szczegółów.

---

## 👨‍💻 Autor

**Mikołaj Sobczak** - [@Teczak-dev](https://github.com/Teczak-dev)

- 🌐 **Website:** [mikolaj-sobczak.pl](https://mikolaj-sobczak.pl/)
- 💼 **LinkedIn:** [Mikołaj Sobczak](https://www.linkedin.com/in/mikołaj-sobczak-27b0a429a)
- 📧 **Contact:** poprzez GitHub Issues

---

*Projekt stworzony w celach edukacyjnych jako demonstracja nowoczesnych technik frontend development.*
