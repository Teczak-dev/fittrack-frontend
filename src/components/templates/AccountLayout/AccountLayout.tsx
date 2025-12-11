import { Button } from 'react-bootstrap';
import { useTheme } from '../../../hooks/useTheme';
import { Typography } from '../../atoms/Typography/Typography';
import styles from './AccountLayout.module.css';
import { DeleteAccount } from '../../organisms/DeleteAccount/DeleteAccount';
import { ChangePassword } from '../../organisms/ChangePassword/ChangePassword';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { useAccountData } from '../../../hooks/useAccountData';

export const AccountLayout: React.FC = () => {
    
    const { width } = useScreenWidth();
    const { theme } = useTheme();
    const {user, workouts, sumOfWorkouts, totalDuration, totalCalories,
	handleDownloadData, handleResendVerEmail, sendMessage, handleChangePassword,
	displayChangePassword, closeChangePassword, displayDeleteConfirm, handleDeleteAccount,
	closeDeleteAccount } = useAccountData();

    const switchTextColorClass = theme === 'dark' ? styles.textDark : styles.textLight;
    const editButtonBgClass = theme === 'dark' ? styles.editButtonDark : styles.editButtonLight;

    return (
	<div className={styles.container}>
	    <Typography variant='h2' className={` ${styles.header} ${switchTextColorClass}`}>Konto</Typography>
	    <div className={styles.content}>


		{/*
		    Account info
		*/}

		<div className={styles.section}>
		    <Typography variant='h3' className={` ${styles.sectionHeader} ${switchTextColorClass}`}>Informacje o koncie</Typography>
		    <Typography variant='body' className={` ${styles.sectionText} ${styles.sectionDecription} ${switchTextColorClass}`}>Tutaj możesz zarządzać informacjami o swoim koncie, takimi jak adres e-mail, hasło i ustawienia prywatności.</Typography>
		    {/* 
			User can see his account data 
		    */}

		    <div className={styles.userInfo} style={{flexDirection: 'column'}}>
		    	{user && !user.verified && (
			    <>
			    <Typography variant='body' className={` ${styles.verificationText} ${switchTextColorClass}`}>
				Twoje konto nie jest zweryfikowane .
			    </Typography>
			    <Button variant="primary" className={editButtonBgClass} onClick={handleResendVerEmail}>Wyślij ponownie e-mail weryfikacyjny</Button>
			    </>
			)}
			{sendMessage && (
			    <Typography variant='body' className={` ${styles.verificationText} ${switchTextColorClass}`}>
				{sendMessage}
			    </Typography>
			)}
			{user && user.verified && (
			    <Typography variant='body' className={` ${styles.verifiedText} ${switchTextColorClass}`}>
				Twoje konto jest zweryfikowane ✅
			    </Typography>
			)}
		    </div>

		    
		    <div className={styles.userInfo}>
			<Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Nazwa użytkownika: {user?.name}</Typography>
			<Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Email: {user?.email}</Typography>
		    </div>

		    {/*
			Buttons to change password and delete ac
		    */}
		    <div className={styles.userInfo} style={{flexDirection: 'row'}}>
			<Button variant="primary" className={editButtonBgClass} onClick={handleChangePassword}>Zmień hasło</Button>
			<Button variant="secondary" className={styles.deleteButton} onClick={handleDeleteAccount}>Usuń konto</Button>
		    </div>
		</div>

		{/*
		    Account management 
		*/}

		<div className={styles.section}>
		    <Typography variant='h3' className={` ${styles.sectionHeader} ${switchTextColorClass}`}>Zebrane dane</Typography>
		    <Button variant="primary" className={editButtonBgClass} onClick={handleDownloadData}>Pobierz moje dane</Button>

		    <div className={styles.collectedData}>
			<div className={styles.dataItem}>
			    <Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Liczba zapisanych treningów: {sumOfWorkouts}</Typography>
			</div>
			<div className={styles.dataItem}>
			    <Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Łączny czas ćwiczeń: {totalDuration} minut</Typography>
			</div>
			<div className={styles.dataItem}>
			    <Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Łączna liczba spalonych kalorii: {totalCalories} kcal</Typography>
			</div>

			<div className={styles.dataItem}>
			    <Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>Ćwiczenia: { width < 769 ? '(lista nie jest dostępna na telefonie)' : null } </Typography>
			</div>
			    { width >= 769 && (
			    <ul className={styles.workoutList}>
				{workouts.map((workout) => (
				    <li key={workout.id} className={styles.workoutListItem}>
					<Typography variant='body' className={` ${styles.sectionText} ${switchTextColorClass}`}>
					    {workout.name} - {workout.date} - {workout.duration} minut - {workout.calories} kcal - Typ: {workout.category}
					</Typography>
				    </li>
				))}
			    </ul> )}
		    </div>

		</div>
	    </div>
	    {/* forms for delete account and change password */}
	    {displayDeleteConfirm === true && ( <DeleteAccount closeDelete={closeDeleteAccount} /> ) }
	    {displayChangePassword === true && ( <ChangePassword closeChangePassword={closeChangePassword} /> ) }

	</div>
    );
}
