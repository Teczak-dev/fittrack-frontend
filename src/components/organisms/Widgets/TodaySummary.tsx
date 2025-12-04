import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Typography } from '../../atoms/Typography/Typography';
import styles from './TodaySummary.module.css';
import mainStyles from './Widgets.module.css';
import { calculateTodaysCalories } from '../../../utils/workoutsManipulation';
import { useWorkouts } from '../../../hooks/useWorkouts';
import { useEffect, useMemo, useState } from 'react';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';
export const TodaySummary = () => {

    const { workouts } = useWorkouts();
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchCaloriesBurned = useMemo(() => async () =>{
	try{
	    setLoading(true);
	    const data = calculateTodaysCalories(workouts);
	    setCaloriesBurned(data);
	}catch (err:any){
	    setError(err.message);
	    setCaloriesBurned(0);
	}finally{
	    setLoading(false);
	}
    }, [workouts]);

    useEffect( () => {
    	fetchCaloriesBurned();
    }, [fetchCaloriesBurned]);

    const caloriesGoal = 800;
    const percentage = (caloriesBurned / caloriesGoal) * 100;
    
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message="Nie udało się pobrać danych o dzisiejszych spalonych kaloriach." />;

    return (
	<div className={` ${mainStyles.container} ${styles.todaySummaryContainer}`}>
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
