import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';

// Define the function type for submission
type SubmitFn = (email: string, password: string) => void;

// Custom hook to manage the login form state and validation
// It accepts a submission function as a parameter
// and returns the form state, field setters, blur handlers, and submit handler.
export const useLoginForm = (onSubmit: SubmitFn) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleEmailChange = (value: string) => setEmail(value);
    const handlePasswordChange = (value: string) => setPassword(value);

    const handleEmailBlur = () => {
	const emailValidation = validateEmail(email);
	if (!emailValidation.isValid) {
	    setEmailError(emailValidation.error || 'Podaj poprawny email');
	} else {
	    setEmailError('');
	}
    };

    const handlePasswordBlur = () => {
	const passwordValidation = validatePassword(password);
	if (!passwordValidation.isValid) {
	    setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków');
	} else {
	    setPasswordError('');
	}
    };

    const handleSubmit = () => {
	let hasErrors = false;

	const emailValidation = validateEmail(email);
	if (!emailValidation.isValid) {
	    setEmailError(emailValidation.error || 'Podaj poprawny email');
	    hasErrors = true;
	}

	const passwordValidation = validatePassword(password);
	if (!passwordValidation.isValid) {
	    setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków');
	    hasErrors = true;
	}

	if (!hasErrors) {
	    onSubmit(email, password);
	}
    };

    return {
	email,
	password,
	emailError,
	passwordError,
	handleEmailChange,
	handlePasswordChange,
	handleEmailBlur,
	handlePasswordBlur,
	handleSubmit,
    };
};
