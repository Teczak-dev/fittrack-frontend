import mainStyles from './Widgets.module.css';
import styles from './Stats.module.css';
import { Typography } from '../../atoms/Typography/Typography';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { filterWorkoutByWeek} from '../../../utils/workoutsManipulation';
import { useWorkouts } from '../../../hooks/useWorkouts';
import { useEffect, useMemo, useState } from 'react';
import type { Workout } from '../../../types/workout';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';

export const Stats = () => {
    
    const { workouts } = useWorkouts();

    const days = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];
    const [workoutData, setWorkoutData] = useState<Workout[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchWorkoutData = useMemo(() => async () =>{
	try {
	    const filteredWorkouts = filterWorkoutByWeek(workouts);
	    setWorkoutData(filteredWorkouts);
	} catch (err: any) {
	    setError(err.message);
	    setWorkoutData([]);
	}
    }, [workouts]);

    if (error) return <ErrorMessage message="Nie udało się pobrać danych o treningach." />;
    
    useEffect(() => {
	fetchWorkoutData();
    }, [fetchWorkoutData]);

    const sumCaloriesPerDay = (dayIndex: number) => {
	let sum = 0;
	workoutData.forEach( workout => {
	    const workoutDate = new Date(workout.date);
	    if (workoutDate.getDay() === ((dayIndex + 1) % 7)) {
		sum += workout.calories;
	    }
	});
	return sum;
    }

    const sumMinutesPerDay = (dayIndex: number) => {
	let sum = 0;
	workoutData.forEach( workout => {
	    const workoutDate = new Date(workout.date);
	    if (workoutDate.getDay() === ((dayIndex + 1) % 7)) {
		sum += workout.duration;
	    }
	});
	return sum;
    }

    const data = days.map( (day, index) => ({
	name: day,
	kalorie: sumCaloriesPerDay(index),
	minuty: sumMinutesPerDay(index),
    }));

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Ten tydzień</Typography>
	    <div className={styles.statsContainer}>
		<BarChart className={styles.barInfo} responsive data={data}>
		    <CartesianGrid strokeDasharray="3 3" />
		    <XAxis dataKey="name" tick={{fill: 'white'}} />
		    <YAxis width='auto' tick={{fill: 'white'}} />
		    <Tooltip 
			itemStyle={{backgroundColor:'#222'}}  
			wrapperStyle={{borderRadius:'20px', backgroundColor:'#222'}} 
			labelStyle={{backgroundColor:'#222'}} 
			contentStyle={{backgroundColor:'#222', borderRadius:'20px'}} />
		    <Legend  />
		    <Bar dataKey="kalorie" fill="#f41" isAnimationActive={true}/>
		    <Bar dataKey="minuty" fill="#28f" isAnimationActive={true}/>
		</BarChart>
	    </div>
	</div>
    );
}
