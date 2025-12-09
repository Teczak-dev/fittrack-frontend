import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Typography } from '../../atoms/Typography/Typography';

import { useState } from 'react';
import styles from './Forms.module.css';
import { useLoginForm } from '../../../hooks/useLoginForm';
import { useRegisterForm } from '../../../hooks/useRegisterForm';
import { useTheme } from '../../../hooks/useTheme';
import { Link } from '../../atoms/Link/Link';
import { validateEmail, validatePassword } from '../../../utils/validation';

interface LoginFormProps{
    login: (email:string, pass:string) => void;
    error?: string;
}

interface RegisterFormProps{	
    register: (email:string, pass:string, username: string) => void;
    error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({login, error}) => {
	const { theme } = useTheme();

	const {
	  email,
	  password,
	  emailError,
	  passwordError,
	  handleEmailChange,
	  handlePasswordChange,
	  handleEmailBlur,
	  handlePasswordBlur,
	  handleSubmit,
	} = useLoginForm(login);

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
					onChange={handleEmailChange}
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
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
				/>
				{passwordError && <Typography variant="small" className={styles.errorText}>{passwordError}</Typography>}
			</label>
			{error && <Typography variant="small" className={styles.errorText}>{error}</Typography>}
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleSubmit}>Zaloguj się</Button>
			<Typography variant="body" className={styles.registerText}>Nie masz konta? <Link url='/register' text='Zarejestruj się' className={styles.registerLink} /></Typography>
			<Link url='/forgot-password' className={styles.forgotPassword} text='Nie pamiętasz hasła?' />
		</div>
	);
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
	register,
	error
   }) => {
	const { theme } = useTheme();

	const {
	  state,
	  setField,
	  handleEmailBlur,
	  handlePasswordBlur,
	  handleConfirmBlur,
	  handleUsernameBlur,
	  handleSubmit,
	} = useRegisterForm(register);

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
					value={state.username} 
					onChange={(v) => setField('username', v)}
					onBlur={handleUsernameBlur}
				/>
				{state.errors.username && <Typography variant="small" className={styles.errorText}>{state.errors.username}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Email:</Typography>
				<Input 
					type="email" 
					className={styles.input} 
					value={state.email} 
					onChange={(v) => setField('email', v)}
					onBlur={handleEmailBlur}
				/>
				{state.errors.email && <Typography variant="small" className={styles.errorText}>{state.errors.email}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={state.password} 
					onChange={(v) => setField('password', v)}
					onBlur={handlePasswordBlur}
				/>
				{state.errors.password && <Typography variant="small" className={styles.errorText}>{state.errors.password}</Typography>}
			</label>
			<label className={styles.label}>
				<Typography variant="body">Potwierdź hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={state.confirmPassword} 
					onChange={(v) => setField('confirmPassword', v)}
					onBlur={handleConfirmBlur}
				/>
				{state.errors.confirm && <Typography variant="small" className={styles.errorText}>{state.errors.confirm}</Typography>}
			</label>
			{error && <Typography variant="small" className={styles.errorText}>{error}</Typography>}

			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleSubmit}>Zarejestruj się</Button>
			<Typography variant="body" className={styles.loginText}>Masz konto? <Link url='/login' text='Zaloguj się' className={styles.loginLink} /></Typography>
		</div>
	);
}

export const ForgotPasswordForm: React.FC<{resetPassword: (email: string) => void; msg?:string}> = ({
    resetPassword,
    msg
}) => {
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
			<Typography variant="body" className={styles.loginBack}><Link url='/login' text='Powrót do logowania' className={styles.loginLink} /></Typography>
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
			{msg && <Typography variant="small" className={styles.errorText}>{msg}</Typography>}
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleResetPassword}>Wyślij link do resetowania hasła</Button>
			

			
		</div>
	);
}


export const ResetPasswordForm: React.FC<{handleReset: (newPassword: string) => void; msg:string}> = ({
    handleReset,
    msg
}) => {
    	const [password, setPassword] = useState<string>('');
    	const [password2, setPassword2] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const { theme } = useTheme();

	const handlePasswordBlur = () => {
	    const passwordValidation = validatePassword(password);
	    if (!passwordValidation.isValid) {
		setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków');
	    } else {
		setPasswordError('');
	    }
	}

	const handleSecondPasswordBlur = () => {
	    const passwordValidation = validatePassword(password2);
	    if (!passwordValidation.isValid) {
		setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków');
	    } else {
		setPasswordError('');
	    }
	}

	const handleResetPassword = () => {
	    const passwordValidation = validatePassword(password);
	    const password2Validation = validatePassword(password2);
	    if (!passwordValidation.isValid || !password2Validation.isValid || password !== password2) {
		setPasswordError(passwordValidation.error || 'Hasło musi mieć minimum 6 znaków oraz muszą być identyczne');
	    } else {
		handleReset(password);
	    }
	}

	const titleThemeColor = theme === 'dark' ? styles.titleDark : styles.titleLight;
	const loginFormThemeColor = theme === 'dark' ? styles.loginFormDark : styles.loginFormLight;
	const buttonTheme = theme === 'dark' ? styles.buttonDark : styles.buttonLight;

	return(
		<div className={` ${styles.loginForm} ${loginFormThemeColor} `}>
			<Typography variant="body" className={styles.loginBack}><Link url='/login' text='Powrót do logowania' className={styles.loginLink} /></Typography>
			<Typography variant="h1" className={`${styles.title} ${titleThemeColor}`}>Ustaw nowe hasło</Typography>
			<label className={styles.label}>
				<Typography variant="body">Nowe hasło:</Typography>
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
				<Typography variant="body">Powtórz nowe hasło:</Typography>
				<Input 
					type="password" 
					className={styles.input} 
					value={password2} 
					onChange={setPassword2}
					onBlur={handleSecondPasswordBlur}
				/>
				{passwordError && <Typography variant="small" className={styles.errorText}>{passwordError}</Typography>}
			</label>
			{msg && <Typography variant="small" className={styles.errorText}>{msg}</Typography>}
			<Button className={` ${styles.button} ${buttonTheme} `} onClick={handleResetPassword}>Zresetuj hasło</Button>
		</div>
	);
}
