import { useState } from "react";
import { Button } from "react-bootstrap";
import { validatePassword } from "../../../utils/validation";
import { Typography } from "../../atoms/Typography/Typography";
import styles from './DeleteAccount.module.css';
import { deleteAccount, logout } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

export const DeleteAccount: React.FC<{closeDelete:()=>void}> = ({closeDelete}) => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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
	await deleteAccount(password);
	handleClose();
	logout();
	const navigator = useNavigate();
	navigator('/login');
	window.location.reload();
    }

    const handleClose = () => {
	setPassword('');
	setError(null);
	closeDelete();
    }

    return (
	<div className={styles.overlay}>
	    <div className={styles.form}>
		<Button className={styles.closeButton} variant="secondary" onClick={handleClose}>x</Button>
		<Typography variant="h2" className={styles.header}  >Usuń konto</Typography>
		<form>
		    <label className={styles.label}>
			<Typography variant='body'> Podaj hasło:</Typography>
			<input type="password" className={styles.input} value={password} onChange={(e) => handlePassword(e)} name="password" />
			<Typography variant="body" className={styles.caption}>{error}</Typography>
		    </label>
		    <button type="submit" className={styles.submitButton} onClick={handleSubmit} >Usuń konto</button> 
		</form>
	    </div>
	</div>
    );
}
