import mainStyles from './Widgets.module.css';
import styles from './Data.module.css';
import { Typography } from '../../atoms/Typography/Typography';

export const Data = () => {

    const userData = {
	age: 29,
	height: 180,
	weight: 75,
	activityLevel: 'Średni'
    };

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Dane użytkownika</Typography>
	    <div className={styles.dataContainer}>
		<Typography variant='body' className={styles.dataText}>Wiek: {userData.age} lat</Typography>
		<Typography variant='body' className={styles.dataText}>Wzrost: {userData.height} cm</Typography>
		<Typography variant='body' className={styles.dataText}>Waga: {userData.weight} kg</Typography>
		<Typography variant='body' className={styles.dataText}>Poziom aktywności: {userData.activityLevel}</Typography>
	    </div>
	</div>
    );
}
