import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Typography } from '../../atoms/Typography/Typography';
import styles from './TodaySummary.module.css';

export const TodaySummary = () => {

    const caloriesBurned = 300;
    const caloriesGoal = 800;
    const percentage = (caloriesBurned / caloriesGoal) * 100;

    return (
	<div className={styles.container}>
	    <div className={styles.texts}>
		<Typography variant='h2' className={styles.header} >Dzisiaj</Typography>
		<Typography variant='body'>Kcal: {caloriesBurned}/{caloriesGoal}</Typography>
	    </div>
	    <div className={styles.progressbar}>
		<div style={{width: '170px', height: '170px'}} className={styles.progressbarInner}>
		    <CircularProgressbar value={percentage} styles={buildStyles({ textSize: '10px', textColor: '#fff' })} text={`kcal: ${caloriesBurned}`} />
		</div>
	    </div>
	</div>
    );
}
