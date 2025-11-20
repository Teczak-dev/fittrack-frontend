import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Typography } from '../../atoms/Typography/Typography';

import { useState } from 'react';
import styles from './Forms.module.css';
import { useTheme } from '../../../context/useTheme';
import { Link } from '../../atoms/Link/Link';
import { validateEmail, validatePassword, validateUsername, validatePasswordConfirm } from '../../../utils/validation';

interface LoginFormProps{
    login: (email:string, pass:string) => void;
}

interface RegisterFormProps{	
    register: (email:string, pass:string, username: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({login}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const { theme } = useTheme();


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

    const handleLogin = () => {
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
            login(email, password);
        }
    };
    
    const titleThemeColor = theme === 'dark' ? styles.titleDark : styles.titleLight;
    const loginFormThemeColor = theme === 'dark' ? styles.loginFormDark : styles.loginFormLight;
    const buttonTheme = theme === 'dark' ? styles.buttonDark : styles.buttonLight;

    return(
		<div className={` ${styles.loginForm} ${loginFormThemeColor} `}>
			<Typography variant="h1" className={`${styles.title} ${titleThemeColor}`}>Logowanie</Typography>
			<label className={styles.label}>
				<Typography variant="body">Email:</Typography>
				<Input 
					type="email" 
					className={styles.input} 
					value={email} 
					onChange={setEmail}
					onBlur={handleEmailBlur}
				/>
				{emailError && <Typography variant="small" className={styles.errorText}>{emailError}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={password} 
					onChange={setPassword}
					onBlur={handlePasswordBlur}
				/>
				{passwordError && <Typography variant="small" className={styles.errorText}>{passwordError}</Typography>}
			</label>
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleLogin}>Zaloguj się</Button>
			<Typography variant="body" className={styles.registerText}>Nie masz konta? <Link url='/register' text='Zarejestruj się' className={styles.registerLink} /></Typography>
			<Link url='/forgot-password' className={styles.forgotPassword} text='Nie pamiętasz hasła?' />
		</div>
    );
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
    register,
   }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [confirmError, setConfirmError] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('');
    const { theme } = useTheme();

    
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

    const handleConfirmBlur = () => {
        const confirmValidation = validatePasswordConfirm(password, confirmPassword);
        if (!confirmValidation.isValid) {
            setConfirmError(confirmValidation.error || 'Hasła nie są identyczne');
        } else {
            setConfirmError('');
        }
    };

    const handleUsernameBlur = () => {
        const usernameValidation = validateUsername(username);
        if (!usernameValidation.isValid) {
            setUsernameError(usernameValidation.error || 'Nazwa musi mieć minimum 3 znaki');
        } else {
            setUsernameError('');
        }
    };

    const handleRegister = () => {
        // Sprawdzamy każde pole osobno
        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password);
        const usernameValidation = validateUsername(username);
        const confirmValidation = validatePasswordConfirm(password, confirmPassword);
        
        let hasErrors = false;
        
        if (!emailValidation.isValid) {
            setEmailError(emailValidation.error || 'Podaj poprawny email');
            hasErrors = true;
        }
        if (!passwordValidation.isValid) {
            setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków');
            hasErrors = true;
        }
        if (!usernameValidation.isValid) {
            setUsernameError(usernameValidation.error || 'Nazwa musi mieć minimum 3 znaki');
            hasErrors = true;
        }
        if (!confirmValidation.isValid) {
            setConfirmError(confirmValidation.error || 'Hasła nie są identyczne');
            hasErrors = true;
        }
        
        if (!hasErrors) {
            register(email, password, username);
        }
    };
    
    const titleThemeColor = theme === 'dark' ? styles.titleDark : styles.titleLight;
    const loginFormThemeColor = theme === 'dark' ? styles.loginFormDark : styles.loginFormLight;
    const buttonTheme = theme === 'dark' ? styles.buttonDark : styles.buttonLight;

    return(
		<div className={` ${styles.loginForm} ${loginFormThemeColor} `}>
			<Typography variant="h1" className={`${styles.title} ${titleThemeColor}`}>Rejestracja</Typography>
			<label className={styles.label}>
				<Typography variant="body">Nazwa użytkownika:</Typography>
				<Input 
					type="text" 
					className={styles.input} 
					value={username} 
					onChange={setUsername}
					onBlur={handleUsernameBlur}
				/>
				{usernameError && <Typography variant="small" className={styles.errorText}>{usernameError}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Email:</Typography>
				<Input 
					type="email" 
					className={styles.input} 
					value={email} 
					onChange={setEmail}
					onBlur={handleEmailBlur}
				/>
				{emailError && <Typography variant="small" className={styles.errorText}>{emailError}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={password} 
					onChange={setPassword}
					onBlur={handlePasswordBlur}
				/>
				{passwordError && <Typography variant="small" className={styles.errorText}>{passwordError}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Potwierdź hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={confirmPassword} 
					onChange={setConfirmPassword}
					onBlur={handleConfirmBlur}
				/>
				{confirmError && <Typography variant="small" className={styles.errorText}>{confirmError}</Typography>}
			</label>
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleRegister}>Zarejestruj się</Button>
			<Typography variant="body" className={styles.loginText}>Masz konto? <Link url='/login' text='Zaloguj się' className={styles.loginLink} /></Typography>
		</div>
    );
}

export const ForgotPasswordForm: React.FC<{resetPassword: (email: string) => void}> = ({resetPassword}) => {
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const { theme } = useTheme();

	
	const handleEmailBlur = () => {
        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            setEmailError(emailValidation.error || 'Podaj poprawny email');
        } else {
            setEmailError('');
        }
    };

    const handleResetPassword = () => {
        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            setEmailError(emailValidation.error || 'Podaj poprawny email');
        } else {
            resetPassword(email);
        }
    };

	const titleThemeColor = theme === 'dark' ? styles.titleDark : styles.titleLight;
	const loginFormThemeColor = theme === 'dark' ? styles.loginFormDark : styles.loginFormLight;
	const buttonTheme = theme === 'dark' ? styles.buttonDark : styles.buttonLight;

	return(
		<div className={` ${styles.loginForm} ${loginFormThemeColor} `}>
			<Typography variant="h1" className={`${styles.title} ${titleThemeColor}`}>Resetowanie hasła</Typography>
			<label className={styles.label}>
				<Typography variant="body">Email:</Typography>
				<Input 
					type="email" 
					className={styles.input} 
					value={email} 
					onChange={setEmail}
					onBlur={handleEmailBlur}
				/>
				{emailError && <Typography variant="small" className={styles.errorText}>{emailError}</Typography>}
			</label>
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleResetPassword}>Wyślij link do resetowania hasła</Button>
		</div>
	);
}
