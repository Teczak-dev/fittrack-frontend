import { useWorkoutCategory } from "../hooks/useWorkoutCategory";
import type { Workout } from "../types/workout";

// Helper functions to get the start and end of the current week
const getMonday = (): Date => {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  today.setHours(0, 0, 0, 0);
  return new Date(today.setDate(diff));
};

// Helper function to get Sunday of the current week
const getSunday = (): Date => {
  const monday = getMonday();
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);
  return sunday;
};

// Function to filter workouts by day
export const filterWorkoutByDay = (workouts: any[]) => {
  const new_workouts = workouts.sort((a, b) => {
    const dateCompare = new Date(a.date).getTime() - new Date(b.date).getTime();
    if (dateCompare === 0) {
      return b.id - a.id;
    }
    return dateCompare;
  });

  return new_workouts.reverse();
};

// Function to filter workouts by the current week
export const filterWorkoutByWeek = (workouts: any[]) => {
  const weekStart = getMonday();
  const weekEnd = getSunday();
  return workouts.filter((workout) => {
    const workoutDate = new Date(workout.date);
    return workoutDate >= weekStart && workoutDate <= weekEnd;
  });
};

// Function to filter workouts by the current month
export const filterWorkoutByMonth = (workouts: any[]) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return workouts.filter((workout) => {
    const workoutDate = new Date(workout.date);
    return (
      workoutDate.getMonth() === month && workoutDate.getFullYear() === year
    );
  });
};

// Function to get the number of days in the current month
export const getMonthDays = (): number => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return new Date(year, month + 1, 0).getDate();
};

// Function to calculate today's total calories burned
export const calculateTodaysCalories = (workouts: any[]): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todaysWorkouts = workouts.filter((workout) => {
    const workoutDate = new Date(workout.date);
    workoutDate.setHours(0, 0, 0, 0);
    return workoutDate.getTime() === today.getTime();
  });
  return todaysWorkouts.reduce((total, workout) => total + workout.calories, 0);
};

// Function to get the two most recent workouts
export const getMostRecentWorkout = (workouts: Workout[]): Workout[] => {
  if (workouts.length === 0) return [];
  const sortedWorkouts = [...workouts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return sortedWorkouts.slice(0, 2);
};

// Function to get total workouts per category
export const getTotalWorkoutsPerCategoty = (workouts: any[]): any => {
  const { workoutCategory } = useWorkoutCategory();
  if (workouts.length === 0) return [];
  const categories = new Set(workoutCategory.map((item) => item.category));
  const data = [];
  for (let category of categories) {
    const total = workouts.filter(
      (workout) => workout.category === category,
    ).length;
    const newCat = { name: category, value: total };
    data.push(newCat);
  }
  return data;
};

// Function to get total workouts per kind
export const getTotalWorkoutsPerKind = (workouts: any[]): any => {
  if (workouts.length === 0) return [];
  const kinds = new Set(workouts.map((item) => item.name));
  const data = [];
  for (let kind of kinds) {
    const total = workouts.filter((workout) => workout.name === kind).length;
    const newKind = { name: kind, value: total };
    data.push(newKind);
  }
  return data;
};
