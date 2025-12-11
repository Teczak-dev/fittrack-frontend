import { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { useWorkouts } from '../../../hooks/useWorkouts';
import type { Workout } from '../../../types/workout';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import { AddWorkout } from '../../organisms/AddWorkout/AddWorkout';
import { WorkoutInfo } from '../../organisms/Widgets/WorkoutInfo';
import styles from './WorkoutsLayout.module.css';

export const WorkoutsLayout: React.FC<{}> = () => {
    
    const { workouts } = useWorkouts();
    const {theme} = useTheme();
    const [displayAddWorkout, setDisplayAddWorkout] = useState(false);
    
    const bgColor = theme === 'dark' ? '#4E1BB4' : '#a9dc94';
    const btnTheme = theme === 'light' ? styles.addWorkoutBtnLight : '';
    
    const switchDisplay = () => {
	setDisplayAddWorkout(!displayAddWorkout);
    }

    return (
	<div className={styles.container}>
	    <div className={styles.header}>
		<h1>Ćwiczenia</h1>
		<Button variant='primary' className={` ${styles.addWorkoutBtn} ${btnTheme}`} onClick={switchDisplay}>+</Button>
	    </div>
	    {workouts.length === 0 && (
		<div style={{width: '100%', textAlign: 'center', marginTop: '50px'}}>
		    <Typography variant='body' className={styles.noWorkoutsMessage}>Nie masz jeszcze żadnych zapisanych ćwiczeń. Dodaj swój pierwszy trening, klikając przycisk "+" powyżej.</Typography>
		</div>
	    )}
	    <div className={styles.content}>
		{ workouts.map( ( item: Workout ) => 
		    (<WorkoutInfo key={item.id} className={styles.item} bgColor={bgColor} Workout={item}/>)
		)}
	    </div>
	    {displayAddWorkout && <AddWorkout switchDisplay={switchDisplay}  />}
	</div>
    );
}
