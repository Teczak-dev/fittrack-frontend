import type { WorkoutCategory } from '../types/workoutCategory';

// Function to fetch workout categories from the API
export const getWorkoutCategories = async (): Promise<WorkoutCategory[]> => {
    const response = await fetch('/api/workout-types');
    if (!response.ok) {
	throw new Error('Failed to fetch workouts categories');
    }
    const data = await response.json();
    return data;
}

// Function to fetch workout categories types from the API
export const getWorkoutCategoriesType = async(): Promise<string[]> => {
    const response = await fetch('/api/workout-types/categories');
    if (!response.ok) {
	throw new Error('Failed to fetch workout categories types');
    }
    const data = await response.json();
    return data;
}

