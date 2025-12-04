import type { Workout } from "../../../types/workout";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { Typography } from "../../atoms/Typography/Typography";
import styles from "./WorkoutInfo.module.css";
import { useWorkouts } from "../../../hooks/useWorkouts";
import { useWorkoutCategory } from "../../../hooks/useWorkoutCategory";
import { deleteWorkoutToDB } from "../../../api/workouts";

interface WorkoutInfoProps{
    Workout: Workout;
    className: string;
    bgColor: string;
}

export const WorkoutInfo: React.FC<WorkoutInfoProps> = ({Workout, className, bgColor}) => {

    const { deleteWorkout } = useWorkouts();
    const { workoutCategory } = useWorkoutCategory();
    
    const handleDelete = async () => {
	try{
	    if (!Workout.id) {
		throw new Error('Invalid workout ID');
	    }
	    await deleteWorkoutToDB(Workout.id);
	    deleteWorkout(Workout.id);
	} catch (error) {
	    console.error('Error deleting workout:', error);
	}
    }

    const imageSrc = workoutCategory.find( (item) => item.name === Workout.name )?.image || '/api/images/icons/exercise.svg';
    
    return (
	<div className={` ${styles.workoutContainer} ${className}`} style={{backgroundColor: bgColor} }>
	    <div className={styles.workoutHeader}>
		<Image src={`${imageSrc}`} alt="Workout Image" className={styles.workoutImage}/>
		<Typography variant='body' className={styles.workoutName}>
		    {Workout.name}
		</Typography>
	    </div>
	    <div className={styles.workoutDetails}>
		<Typography variant='body' className={styles.workoutDate}>
		    {Workout.date}
		</Typography>
		<Typography variant='body' className={styles.workoutTime}>
		    {Workout.duration} minut
		</Typography>
		<Typography variant='body' className={styles.workoutKcal}>
		    {Workout.calories} kcal
		</Typography>
		<Typography variant='body' className={styles.workoutType}>
		    Typ: {Workout.category}
		</Typography>
	    </div>
	    <Button variant="secondary" className={styles.button} onClick={handleDelete}>
		Usuń
	    </Button>
	</div>
    );
}
