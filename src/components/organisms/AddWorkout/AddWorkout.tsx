import { useWorkoutCategory } from '../../../hooks/useWorkoutCategory';
import styles from './AddWorkout.module.css';
import { Button } from 'react-bootstrap';
import { Typography } from '../../atoms/Typography/Typography';
import { useAddWorkout } from '../../../hooks/useAddWorkout';

export const AddWorkout: React.FC<{switchDisplay:() => void}> = ({ switchDisplay }) => {
    
    const { workoutCategory } = useWorkoutCategory();
    const { minutes, calories, workoutName, minutesError, caloriesError,
	    setWorkoutName, handleMinutes, handleCalories, handleAddClick, handleClose } = useAddWorkout(switchDisplay);

    return (
	<div className={styles.overlay}>
	    <div className={styles.form}>
		<Button className={styles.closeButton} variant="light" onClick={handleClose}>X</Button>
		<h2 className={styles.header}>Dodaj nowy trening</h2>
		<form>
		    <label className={styles.label}>
		    	Nazwa treningu:
			<select className={styles.select} value={workoutName} name="workoutName" onChange={(e) => setWorkoutName(e.target.value)} required>
			    {workoutCategory.map( (item) => (
				<option key={item.id} value={item.name} >{item.name}</option>
			    ))}
			</select>
		    </label><br/>
		    <label className={styles.label}>
			Czas trwania (minuty):
			<input className={styles.input} value={minutes} onChange={(e) => handleMinutes(e.target.value)} type="number" name="duration" max='100000' required />
			{minutesError && <Typography variant='body' className={styles.caption}>{minutesError}</Typography> }
		    </label><br/>
		    <label className={styles.label}>
			Spalone kalorie:
			<input className={styles.input} value={calories} onChange={(e) => handleCalories(e.target.value)} type="number" name="calories" max='100000' required />
			{caloriesError && <Typography variant='body' className={styles.caption}>{caloriesError}</Typography> }
		    </label><br/>
		    <button className={styles.submitButton} onClick={handleAddClick} type="submit">Dodaj trening</button>
		</form>
	    </div>
	</div>
    );
}
