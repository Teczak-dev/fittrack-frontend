
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { Typography } from '../../atoms/Typography/Typography';
import styles from './LastWorkout.module.css';
import mainStyles from './Widgets.module.css';

interface Workout {
    id: number;
    name: string;
    date: string;
    duration: number;
    caloriesBurned: number;
    workoutType: string;
}

export const LastWorkout = () => {
    const {width} = useScreenWidth();
    const LastWorkoutData: Workout[] =[ 
	{ id: 1, name: 'xyz', date: '2024-06-15', duration: 45, caloriesBurned: 350, workoutType: 'Cardio'},
	{id: 2, name: 'abc', date: '2024-06-10', duration: 30, caloriesBurned: 250, workoutType: 'Strength Training'}
    ];
    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Ostatni trening</Typography>
	    { width < 1000 ?(
	    <div className={styles.workoutContainer}>
		<Typography variant='body' className={styles.workoutText}>Nazwa: xyz</Typography>
		<Typography variant='body' className={styles.workoutText}>Data: 2024-06-15</Typography>
		<Typography variant='body' className={styles.workoutText}>Czas trwania: 45 minut</Typography>
		<Typography variant='body' className={styles.workoutText}>Spalone kalorie: 350 kcal</Typography>
		<Typography variant='body' className={styles.workoutText}>Typ treningu: Cardio</Typography>
	    </div>  ) : (
		<div className={styles.workoutsContainer}>
		    {LastWorkoutData.map((workout) => (
			<div key={workout.id} className={styles.workoutContainerBig}>
			    <Typography variant='body' className={styles.workoutText}>Nazwa: {workout.name}</Typography>
			    <Typography variant='body' className={styles.workoutText}>Data: {workout.date}</Typography>
			    <Typography variant='body' className={styles.workoutText}>Czas trwania: {workout.duration} minut</Typography>
			    <Typography variant='body' className={styles.workoutText}>Spalone kalorie: {workout.caloriesBurned} kcal</Typography>
			    <Typography variant='body' className={styles.workoutText}>Typ treningu: {workout.workoutType}</Typography>
			</div>
		    ))}
		</div>
	    )}
	</div>
    );
}
