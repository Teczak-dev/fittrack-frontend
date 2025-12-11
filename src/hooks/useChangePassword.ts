import { useState } from 'react';
import { changePassword } from '../api/auth';
import { validatePassword } from '../utils/validation';

export const useChangePassword = (closeChangePassword:()=>void) => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [errorOldPassword, setErrorOldPassword] = useState<string | null>(null);
    const [errorPassword, setErrorPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState<string | null>(null);

    const ValidatePass = (e: any) => {
	const value = e.target.value;
	setPassword(value);
	if (value.length < 6) {
	    setErrorPassword('Hasło musi mieć co najmniej 6 znaków.');
	} else {
	    setErrorPassword(null);
	}
    }

    const ValidateConfirmPass = (e: any) => {
	const value = e.target.value;
	setConfirmPassword(value);
	if (value !== password) {
	    setErrorConfirmPassword('Hasła nie są zgodne.');
	} else {
	    setErrorConfirmPassword(null);
	}
    }

    const ValidateOldPass = (e: any) => {
	const value = e.target.value;
	setOldPassword(value);
	if (value.length < 6) {
		setErrorOldPassword('Hasło musi mieć co najmniej 6 znaków.');
	} else {
		setErrorOldPassword(null);
	}
    }

    const closeChangePasswordInner = async () => {
	setPassword('');
	setErrorPassword(null);
	setConfirmPassword('');
	setErrorConfirmPassword(null);
	closeChangePassword();
    }

    const handleChangePassword = async(e:any) => {
	e.preventDefault();
	if (!oldPassword || oldPassword.length < 6) {
		setErrorOldPassword('Podaj aktualne hasło (min 6 znaków)');
		return;
	}
	if (validatePassword(password).isValid === false) {
		setErrorPassword(validatePassword(password).error);
		return;
	}
	if (password !== confirmPassword) {
		setErrorConfirmPassword('Hasła nie są zgodne.');
		return;
	}
	try {
		await changePassword(oldPassword, password);
		closeChangePasswordInner();
	} catch (err: any) {
		setErrorPassword(err.message || 'Błąd serwera');
	}
    }
    
    return {
	oldPassword,
	password,
	errorOldPassword,
	errorPassword,
	confirmPassword,
	errorConfirmPassword,
	ValidatePass,
	ValidateConfirmPass,
	ValidateOldPass,
	closeChangePasswordInner,
	handleChangePassword
    };
}
