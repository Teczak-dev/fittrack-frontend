import {  useState } from 'react';
import { useWorkoutCategory } from '../../../hooks/useWorkoutCategory';
import styles from './AddWorkout.module.css';
import { addWorkoutToDB } from '../../../api/workouts';
import { Button } from 'react-bootstrap';
import { Typography } from '../../atoms/Typography/Typography';
import { useWorkouts } from '../../../hooks/useWorkouts';

const validateMinutes = (value: number): boolean => {
    return value > 0;
}
const validateCalories = (value: number): boolean =>{
    return value > 0;
}

export const AddWorkout: React.FC<{switchDisplay:() => void}> = ({
    switchDisplay
}) => {
    
    const { addWorkout } = useWorkouts();
    const {workoutCategory} = useWorkoutCategory();

    const [minutes, setMinutes] = useState<number>(0);
    const [minutesError, setMinutesError] = useState<string | null>(null);
    const [calories, setCalories] = useState<number>(0);
    const [caloriesError, setCaloriesError] = useState<string | null>(null);
    const [workoutName, setWorkoutName] = useState<string>(workoutCategory[0]?.name || '');
    
    const clearValues = () => {
	setMinutes(1);
	setCalories(1);
	setWorkoutName('');
    };

    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
	setMinutesError(null);
	const value = parseInt(e.target.value, 10);
	if (!validateMinutes(value)) 
	    setMinutesError('Czas trwania musi być większy niż 0');
	setMinutes(value);
    }

    const handleCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
	setCaloriesError(null);
	const value = parseInt(e.target.value, 10);
	if (!validateCalories(value)) 
	    setCaloriesError('Liczba spalonych kalorii musi być większa niż 0');
	setCalories(value);
    }
    
    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	e.preventDefault();
	console.log('Adding workout:', workoutName, minutes, calories);
	if (!validateMinutes(minutes) || !validateCalories(calories)) {
	    if (!validateMinutes(minutes)) setMinutesError('Czas trwania musi być większy niż 0');
	    if (!validateCalories(calories)) setCaloriesError('Liczba spalonych kalorii musi być większa niż 0');
	    return;
	}
	const newWorkout = {
	    id: null,
	    name: workoutName, 
	    duration: minutes,
	    calories: calories,
	    category: workoutCategory.find( (item) => item.name === workoutName)?.category || 'Inne',
	    date: new Date().toISOString().split('T')[0],
	};
	await addWorkoutToDB(newWorkout);
	addWorkout(newWorkout);
	clearValues();
	switchDisplay();
    }
    const handleClose = () => {
	clearValues();
	switchDisplay();
    }

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
			<input className={styles.input} value={minutes} onChange={handleMinutes} type="number" name="duration" max='100000' required />
			{minutesError && <Typography variant='body' className={styles.caption}>{minutesError}</Typography> }
		    </label><br/>
		    <label className={styles.label}>
			Spalone kalorie:
			<input className={styles.input} value={calories} onChange={handleCalories} type="number" name="calories" max='100000' required />
			{caloriesError && <Typography variant='body' className={styles.caption}>{caloriesError}</Typography> }
		    </label><br/>
		    <button className={styles.submitButton} onClick={handleAdd} type="submit">Dodaj trening</button>
		</form>
	    </div>
	</div>
    );
}
