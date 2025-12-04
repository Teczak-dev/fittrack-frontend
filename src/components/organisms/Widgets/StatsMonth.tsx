import mainStyles from './Widgets.module.css';
import styles from './Stats.module.css';
import { Typography } from '../../atoms/Typography/Typography';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { filterWorkoutByMonth, getMonthDays} from '../../../utils/workoutsManipulation';
import { useWorkouts } from '../../../hooks/useWorkouts';
import { useEffect, useMemo, useState } from 'react';
import type { Workout } from '../../../types/workout';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';

const fillMonthDays = (daysInMonth: number): string[] => {
    const month_days = [];
    for (let day = 1; day <= daysInMonth; day++) {
	month_days.push(day.toString());
    }
    return month_days;
}

export const StatsMonth = () => {
    
    const { workouts } = useWorkouts();

    const month_days = fillMonthDays(getMonthDays());
    const [workoutData, setWorkoutData]= useState<Workout[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    const fetchWorkoutData = useMemo(() => async () =>{
	try {
	    const filteredWorkouts = filterWorkoutByMonth(workouts);
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

    const sumCaloriesPerMonth = (dayIndex: number): number => {
	const day = dayIndex + 1;
	const totalCalories = workoutData
	    .filter( workout => {
		const workoutDate = new Date(workout.date);
		return workoutDate.getDate() === day;
	    })
	    .reduce( (total, workout) => total + workout.calories, 0);
	return totalCalories;
    };

    const sumMinutesPerMonth = (dayIndex: number): number => {
	const day = dayIndex + 1;
	const totalMinutes = workoutData
	    .filter( workout => {
		const workoutDate = new Date(workout.date);
		return workoutDate.getDate() === day;
	    })
	    .reduce( (total, workout) => total + workout.duration, 0);
	return totalMinutes;
    };

    const data = month_days.map( (month_day, index) => ({
	name: month_day,
	kalorie: sumCaloriesPerMonth(index),
	minuty: sumMinutesPerMonth(index),
    }));

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Ten Miesiąc</Typography>
	    <div className={styles.statsContainer}>
		<BarChart className={styles.barInfo} responsive data={data}>
		    <CartesianGrid strokeDasharray="3 3" />
		    <XAxis dataKey="name" tick={{fill: 'white'}} />
		    <YAxis width='auto' tick={{fill: 'white'}} />
		    <Tooltip itemStyle={{backgroundColor:'#222'}}  wrapperStyle={{borderRadius:'20px', backgroundColor:'#222'}} labelStyle={{backgroundColor:'#222'}} contentStyle={{backgroundColor:'#222', borderRadius:'20px'}} />
		    <Legend  />
		    <Bar dataKey="kalorie" fill="#f41" isAnimationActive={true}/>
		    <Bar dataKey="minuty" fill="#28f" isAnimationActive={true}/>
		</BarChart>
	    </div>
	</div>
    );
}
