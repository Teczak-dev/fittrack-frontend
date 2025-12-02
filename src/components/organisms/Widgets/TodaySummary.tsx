import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Typography } from '../../atoms/Typography/Typography';
import styles from './TodaySummary.module.css';
import mainStyles from './Widgets.module.css';
export const TodaySummary = () => {

    const caloriesBurned = 300;
    const caloriesGoal = 800;
    const percentage = (caloriesBurned / caloriesGoal) * 100;

    return (
	<div className={mainStyles.container}>
	    <div className={styles.texts}>
		<Typography variant='body'>Kcal: {caloriesBurned}/{caloriesGoal}</Typography>
	    </div>
	    <div className={styles.progressbar}>
		<div style={{width: '170px', height: '170px'}} className={styles.progressbarInner}>
		    <CircularProgressbar value={percentage} styles={buildStyles({pathColor:'#f14', trailColor: '#611', textSize: '10px', textColor: '#fff' })} text={`kcal: ${caloriesBurned}`} />
		</div>
	    </div>
	    <Typography variant='h2' className={mainStyles.header} >Dzisiaj</Typography>
	</div>
    );
}
