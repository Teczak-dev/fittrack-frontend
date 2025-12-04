
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { Typography } from '../../atoms/Typography/Typography';
import styles from './LastWorkout.module.css';
import mainStyles from './Widgets.module.css';
import type { Workout } from '../../../types/workout';
import { useWorkouts } from '../../../hooks/useWorkouts';
import { getMostRecentWorkout } from '../../../utils/workoutsManipulation';
import { useMemo, useEffect, useState } from 'react';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';

export const LastWorkout = () => {
    const {width} = useScreenWidth();
    const { workouts } = useWorkouts();
    const [lastWorkoutData, setLastWorkoutData] = useState<Workout[] | []>([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLastWorkout = useMemo(() => async () => {
	try {
	    if (workouts.length === 0) {
		setLastWorkoutData([]);
		return;
	    }
	    const mostRecentWorkout = getMostRecentWorkout(workouts);
	    setLastWorkoutData(mostRecentWorkout);
	} catch (err: any) {
	    setError(err.message);
	    setLastWorkoutData([]);
	} finally {
	    setLoaded(true);
	}
    }, [workouts]);

    useEffect(() => {
	fetchLastWorkout();
    }, [fetchLastWorkout]);

    if (!loaded) return <LoadingSpinner />;
    if (error) return <ErrorMessage message="Nie udało się pobrać danych o ostatnim treningu." />;

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={`${mainStyles.header} ${styles.headerLastWorkout}`}>Ostatni{width < 1000 ? '' : 'e'} trening</Typography>
	    {( () =>  {
		if (width < 1000){
		    if(lastWorkoutData.length > 0 ) {
			return (
			    <div key={lastWorkoutData[0].id} className={styles.workoutContainer}>
				<Typography variant='body' className={styles.workoutText}>Nazwa: {lastWorkoutData[0].name}</Typography>
				<Typography variant='body' className={styles.workoutText}>Data: {lastWorkoutData[0].date}</Typography>
				<Typography variant='body' className={styles.workoutText}>Czas trwania: {lastWorkoutData[0].duration} minut</Typography>
				<Typography variant='body' className={styles.workoutText}>Spalone kalorie: {lastWorkoutData[0].calories} kcal</Typography>
				<Typography variant='body' className={styles.workoutText}>Typ treningu: {lastWorkoutData[0].category}</Typography>
			    </div>
			);
		    }
		    return (
			<div className={styles.workoutContainer}>
			    <Typography variant='body' className={styles.workoutText}>Brak danych o ostatnim treningu.</Typography>
			</div>
		    );
		}
		else{
		    if(lastWorkoutData.length > 0 ) {
			return (
			    <div className={styles.workoutsContainer}>
				{lastWorkoutData.map((workout) => (
				    <div key={workout.id} className={styles.workoutContainerBig}>
					<Typography variant='body' className={styles.workoutText}>Nazwa: {workout.name}</Typography>
					<Typography variant='body' className={styles.workoutText}>Data: {workout.date}</Typography>
					<Typography variant='body' className={styles.workoutText}>Czas trwania: {workout.duration} minut</Typography>
					<Typography variant='body' className={styles.workoutText}>Spalone kalorie: {workout.calories} kcal</Typography>
					<Typography variant='body' className={styles.workoutText}>Typ treningu: {workout.category}</Typography>
				    </div>
				))}
			    </div>
			);
		    }
		    return (
			<div className={styles.workoutContainer}>
			    <Typography variant='body' className={styles.workoutText}>Brak danych o ostatnim treningu.</Typography>
			</div>
		    );
		}
	    })()}
	</div>
    );
}
