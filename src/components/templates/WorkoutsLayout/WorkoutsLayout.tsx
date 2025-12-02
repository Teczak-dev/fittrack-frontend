import { useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { useWorkouts } from '../../../hooks/useWorkouts';
import type { Workout } from '../../../types/workout';
import { Button } from '../../atoms/Button/Button';
import { WorkoutInfo } from '../../organisms/Widgets/WorkoutInfo';
import styles from './WorkoutsLayout.module.css';

export const WorkoutsLayout: React.FC<{addWorkout:()=> void}> = ({addWorkout}) => {
    
    const { workouts, updateWorkouts } = useWorkouts();
    
    useEffect(() => {
	updateWorkouts([
	    { id: 1, name: 'bieg rano', date: '2024-06-01', duration: 30, caloriesBurned: 300, workoutType: 'running' },
	    { id: 2, name: 'silownia', date: '2024-06-02', duration: 45, caloriesBurned: 400, workoutType: 'strength training' },
	    { id: 3, name: 'joga', date: '2024-06-03', duration: 60, caloriesBurned: 200, workoutType: 'yoga' },
	    { id: 4, name: 'plywanie', date: '2024-06-04', duration: 50, caloriesBurned: 350, workoutType: 'swimming' },
	    { id: 5, name: 'rower', date: '2024-06-05', duration: 40, caloriesBurned: 300, workoutType: 'cycling' },
	    { id: 6, name: 'spacer', date: '2024-06-06', duration: 70, caloriesBurned: 250, workoutType: 'walking' },
	    { id: 7, name: 'trening HIIT', date: '2024-06-07', duration: 25, caloriesBurned: 450, workoutType: 'HIIT' },
	    { id: 8, name: 'pilates', date: '2024-06-08', duration: 55, caloriesBurned: 220, workoutType: 'pilates' },
	    { id: 9, name: 'taniec', date: '2024-06-09', duration: 35, caloriesBurned: 280, workoutType: 'dancing' },
	    { id: 10, name: 'crossfit', date: '2024-06-10', duration: 60, caloriesBurned: 500, workoutType: 'crossfit' },
	    { id: 11, name: 'trening funkcjonalny', date: '2024-06-11', duration: 45, caloriesBurned: 320, workoutType: 'functional training' }
	]);

    }, [updateWorkouts]);

    const {theme} = useTheme();
    
    const bgColor = theme === 'dark' ? '#0D442F' : '#4E1BB4';
    const btnTheme = theme === 'light' ? styles.addWorkoutBtnLight : '';

    return (
	<div className={styles.container}>
	    <div className={styles.header}>
		<h1>Ćwiczenia</h1>
		<Button variant='primary' className={` ${styles.addWorkoutBtn} ${btnTheme}`} onClick={addWorkout}>+</Button>
	    </div>
	    <div className={styles.content}>
		{ workouts.map( ( item: Workout ) => 
		(<WorkoutInfo className={styles.item} bgColor={bgColor} Workout={item}/>)
		)}
	    </div>
	</div>
    );
}
