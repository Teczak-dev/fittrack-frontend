import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";
import styles from './ChangePassword.module.css';
import { validatePassword } from "../../../utils/validation";
import { changePassword } from "../../../api/auth";

export const ChangePassword: React.FC<{closeChangePassword:()=>void}> = ({closeChangePassword}) => {

	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [errorOldPassword, setErrorOldPassword] = useState<string | null>(null);
	const [errorPassword, setErrorPassword] = useState<string | null>(null);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorConfirmPassword, setErrorConfirmPassword] = useState<string | null>(null);

    const ValidatePass = (e: React.ChangeEvent<HTMLInputElement>) => {
	const value = e.target.value;
	setPassword(value);
	if (value.length < 6) {
	    setErrorPassword('Hasło musi mieć co najmniej 6 znaków.');
	} else {
	    setErrorPassword(null);
	}
    }

    const ValidateConfirmPass = (e: React.ChangeEvent<HTMLInputElement>) => {
	const value = e.target.value;
	setConfirmPassword(value);
	if (value !== password) {
	    setErrorConfirmPassword('Hasła nie są zgodne.');
	} else {
	    setErrorConfirmPassword(null);
	}
    }

	const ValidateOldPass = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return (
	<div className={styles.overlay}>
	    <div className={styles.form}>
		<Button className={styles.closeButton} variant="secondary" onClick={closeChangePasswordInner}> x </Button>
		<Typography variant="h2" className={styles.header} > Resetuj hasło </Typography>
		<form>
			<label className={styles.label}>
			<Typography variant="body"> Aktualne hasło: </Typography>
			<input type="password" className={styles.input} name="old-password" value={oldPassword} onChange={ValidateOldPass} required />
			{errorOldPassword && <Typography variant="body" className={styles.caption}> {errorOldPassword} </Typography>}
		</label>
		<br />
			<label className={styles.label}>
			<Typography variant="body"> Nowe hasło: </Typography>
			<input type="password" className={styles.input} name="new-password" value={password} onChange={ValidatePass} required />
			{errorPassword && <Typography variant="body" className={styles.caption}> {errorPassword} </Typography>}
		</label>
		<br />
			<label className={styles.label}>
			<Typography variant="body"> Potwierdź nowe hasło: </Typography>
			<input type="password" className={styles.input} name="confirm-password" value={confirmPassword} onChange={ValidateConfirmPass} required />
			{errorConfirmPassword && <Typography variant="body" className={styles.caption}> {errorConfirmPassword} </Typography>}
		</label>
		    <br />
		    <button type="submit" className={styles.submitButton} onClick={handleChangePassword}> Zmień hasło </button>
		</form>
	    </div>
	</div>
    );
}
