import { useState } from 'react';
import { validatePassword } from '../utils/validation';
import { deleteAccount, logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export const useDeleteAccount = ( closeDelete:()=>void ) => {

    const navigator = useNavigate();
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handlePassword = (event: any) => {
	setPassword(event.target.value);
    }

    const handleSubmit = async (e:any) => {
	e.preventDefault();
	const isValid = validatePassword(password);
	if (isValid.isValid === false) {
	    setError(isValid.error);
	    return;
	}
	console.log('Password to delete account:', password);
	try {
	    await deleteAccount(password);
	    logout();
	    navigator('/login');
	} catch (err: any) {
	    console.error('Failed to delete account:', err?.message || err);
	    setError(err?.message || 'Nie udało się usunąć konta. Spróbuj ponownie.');
	}
    }

    const handleClose = () => {
	setPassword('');
	setError(null);
	closeDelete();
    }

    return {
	password,
	error,
	handlePassword,
	handleSubmit,
	handleClose,
    };

}
