import { useEffect, useMemo, useState } from "react";
import { useWorkouts } from "./useWorkouts";
import { filterWorkoutByMonth, getMonthDays } from "../utils/workoutsManipulation";
import type { Workout } from "../types/workout";

export const useStastMonth = () => {
    
    const { workouts } = useWorkouts();
    
    const fillMonthDays = (daysInMonth: number): string[] => {
	const month_days = [];
	for (let day = 1; day <= daysInMonth; day++) {
	    month_days.push(day.toString());
	}
	return month_days;
    }

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

    return { error, data };

}
