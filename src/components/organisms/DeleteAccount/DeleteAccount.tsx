import { Button } from "react-bootstrap";
import { Typography } from "../../atoms/Typography/Typography";
import styles from './DeleteAccount.module.css';
import { useDeleteAccount } from "../../../hooks/useDeleteAccount";

export const DeleteAccount: React.FC<{closeDelete:()=>void}> = ({closeDelete}) => {

    const { password, error, handlePassword, handleSubmit,  handleClose } = useDeleteAccount(closeDelete);

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
