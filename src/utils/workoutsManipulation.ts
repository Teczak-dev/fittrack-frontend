import type { Workout } from "../types/workout";

const getMonday = () : Date => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    today.setHours(0, 0, 0, 0);
    return new Date(today.setDate(diff));
}
const getSunday = () : Date => {
    const monday = getMonday();
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);
    return sunday;
}

export const filterWorkoutByDay = (workouts: any[]) => {
    const new_workouts = workouts.sort( (a, b) => {
	const dateCompare = new Date(a.date).getTime() - new Date(b.date).getTime();
	if (dateCompare === 0) {
	    return b.id - a.id;  
	}
	return dateCompare;
    });
    
    return  new_workouts.reverse();
}
export const filterWorkoutByWeek = (workouts: any[]) => {
    const weekStart = getMonday();
    const weekEnd = getSunday();
    return workouts.filter(workout => {
	const workoutDate = new Date(workout.date);
	return workoutDate >= weekStart && workoutDate <= weekEnd;
    });
};

export const filterWorkoutByMonth = (workouts: any[]) => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    return workouts.filter(workout => {
	const workoutDate = new Date(workout.date);
	return workoutDate.getMonth() === month && workoutDate.getFullYear() === year;
    });
}

export const getMonthDays = () : number => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    return new Date(year, month + 1, 0).getDate();
}

export const calculateTodaysCalories = (workouts: any[]) : number => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todaysWorkouts = workouts.filter(workout => {
        const workoutDate = new Date(workout.date);
        workoutDate.setHours(0, 0, 0, 0);
        return workoutDate.getTime() === today.getTime();
    });
    return todaysWorkouts.reduce((total, workout) => total + workout.calories, 0);
};

export const getMostRecentWorkout = (workouts: any[]): Workout[] => {
    if (workouts.length === 0) return [];
    const sortedWorkouts = [...workouts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedWorkouts.slice(0, 2);
};

export const getTotalWorkoutsPerCategoty = (workouts: any[]): any => {
    const categories = new Set(workouts.map((workout) => workout.category));
    const data = [];
    for (let category of categories) {
	const total = workouts.filter((workout) => workout.category === category).length;
	data.push({ name: category, value: total });
    }
    return data;
}
