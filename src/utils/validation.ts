// Walidacja formularzy


// interface ValidationResult definiuje strukturę wyniku walidacji
export interface ValidationResult {
  isValid: boolean;
  error: string;
}

// Walidacja emaila zwraca obiekt ValidationResult
export const validateEmail = (email: string): ValidationResult => {
    if (!email) {
        return { isValid: false, error: 'Email jest wymagany' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Wprowadź poprawny adres email' };
    }
    return { isValid: true, error: '' };
};

// Walidacja hasła zwraca obiekt ValidationResult
export const validatePassword = (password: string): ValidationResult => {
    if (!password) {
        return { isValid: false, error: 'Hasło jest wymagane' };
    }
    if (password.length < 6) {
        return { isValid: false, error: 'Hasło musi mieć minimum 6 znaków' };
    }
    if (password.length > 50) {
        return { isValid: false, error: 'Hasło może mieć maksymalnie 50 znaków' };
    }
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    if (!hasNumber || !hasLetter) {
        return { isValid: false, error: 'Hasło musi zawierać przynajmniej jedną literę i cyfrę' };
    }
    return { isValid: true, error: '' };
};

// Walidacja nazwy użytkownika zwraca obiekt ValidationResult
export const validateUsername = (username: string): ValidationResult => {
    if (!username) {
        return { isValid: false, error: 'Nazwa użytkownika jest wymagana' };
    }
    if (username.length < 3) {
        return { isValid: false, error: 'Nazwa użytkownika musi mieć minimum 3 znaki' };
    }
    if (username.length > 20) {
        return { isValid: false, error: 'Nazwa użytkownika może mieć maksymalnie 20 znaków' };
    }
    // Sprawdzenie czy nazwa zawiera tylko litery, cyfry i podkreślenia
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        return { isValid: false, error: 'Nazwa może zawierać tylko litery, cyfry i podkreślenia' };
    }
    return { isValid: true, error: '' };
};

// Walidacja potwierdzenia hasła zwraca obiekt ValidationResult
export const validatePasswordConfirm = (password: string, confirmPassword: string): ValidationResult => {
    if (!confirmPassword) {
        return { isValid: false, error: 'Potwierdzenie hasła jest wymagane' };
    }
    if (password !== confirmPassword) {
        return { isValid: false, error: 'Hasła nie są identyczne' };
    }
    return { isValid: true, error: '' };
};

// Walidacja całego formularza logowania zwraca obiekt z informacją o poprawności i błędach
export const validateLoginForm = (
    email: string, 
    password: string
): { isValid: boolean; errors: Record<string, string> } => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const errors: Record<string, string> = {};
    if (!emailValidation.isValid) {
        errors.email = emailValidation.error;
    }
    if (!passwordValidation.isValid) {
        errors.password = passwordValidation.error;
    }
    return {
        isValid: emailValidation.isValid && passwordValidation.isValid,
        errors
    };
};

// Walidacja całego formularza rejestracji zwraca obiekt z informacją o poprawności i błędach
export const validateRegisterForm = (
  email: string, 
  password: string, 
  confirmPassword: string, 
  username: string
): { isValid: boolean; errors: Record<string, string> } => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const usernameValidation = validateUsername(username);
    const passwordConfirmValidation = validatePasswordConfirm(password, confirmPassword);
    const errors: Record<string, string> = {};
    if (!emailValidation.isValid) {
        errors.email = emailValidation.error;
    }
    if (!passwordValidation.isValid) {
        errors.password = passwordValidation.error;
    }
    if (!usernameValidation.isValid) {
        errors.username = usernameValidation.error;
    }
    if (!passwordConfirmValidation.isValid) {
        errors.confirmPassword = passwordConfirmValidation.error;
    }
    return {
        isValid: emailValidation.isValid && passwordValidation.isValid && usernameValidation.isValid && passwordConfirmValidation.isValid,
        errors
    };
};

// Walidacja formularza resetowania hasła zwraca obiekt z informacją o poprawności i błędach
export const validateResetPasswordForm = (email: string): { isValid: boolean; errors: Record<string, string> } => {
    const emailValidation = validateEmail(email);
    const errors: Record<string, string> = {};
    if (!emailValidation.isValid) {
        errors.email = emailValidation.error;
    }
    return {
        isValid: emailValidation.isValid,
        errors
    };
};