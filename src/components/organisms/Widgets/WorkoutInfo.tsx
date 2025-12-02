import type { Workout } from "../../../types/workout";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { Typography } from "../../atoms/Typography/Typography";
import styles from "./WorkoutInfo.module.css";
import testWorkout from '../../../assets/images/test_workout.svg';
import { useWorkouts } from "../../../hooks/useWorkouts";

interface WorkoutInfoProps{
    Workout: Workout;
    className: string;
    bgColor: string;
}

export const WorkoutInfo: React.FC<WorkoutInfoProps> = ({Workout, className, bgColor}) => {

    const { deleteWorkout } = useWorkouts();

    return (
	<div key={Workout.id} className={` ${styles.workoutContainer} ${className}`} style={{backgroundColor: bgColor} }>
	    <div className={styles.workoutHeader}>
		<Image src={testWorkout} alt="Workout Image" className={styles.workoutImage}/>
		<Typography variant='body' className={styles.workoutName}> {Workout.name}</Typography>
	    </div>
	    <div className={styles.workoutDetails}>
		<Typography variant='body' className={styles.workoutDate}>{Workout.date}</Typography>
		<Typography variant='body' className={styles.workoutTime}>{Workout.duration} minut</Typography>
		<Typography variant='body' className={styles.workoutKcal}>{Workout.caloriesBurned} kcal</Typography>
		<Typography variant='body' className={styles.workoutType}>Typ: {Workout.workoutType}</Typography>
	    </div>
	    <Button variant="secondary" className={styles.button} onClick={() => deleteWorkout(Workout.id)}>Usuń</Button>
	</div>
    );
}
