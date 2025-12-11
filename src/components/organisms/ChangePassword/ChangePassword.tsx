import { useChangePassword } from "../../../hooks/useChangePassword";
import { Button } from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";
import styles from './ChangePassword.module.css';

export const ChangePassword: React.FC<{closeChangePassword:()=>void}> = ({closeChangePassword}) => {

    const { closeChangePasswordInner ,oldPassword, ValidateOldPass, errorOldPassword,
	    password, ValidatePass, errorPassword,
	    confirmPassword, ValidateConfirmPass, errorConfirmPassword,
	    handleChangePassword } = useChangePassword(closeChangePassword);   

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
