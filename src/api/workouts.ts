import type { Workout } from "../types/workout";

export const getUserWorkouts = async () : Promise<Workout[]> => {
    const token = localStorage.getItem("token");
    const response = await fetch('/api/workouts', {
	headers: {
	    Authorization: `Bearer ${token}`,
	},
    });

    const data = await response.json();
    return data;
}

export const addWorkoutToDB = async (workout: Workout): Promise<Workout> => {
    const token = localStorage.getItem("token");
    const response = await fetch('/api/workouts', {
	method: 'POST',
	headers: {
	    'Content-Type': 'application/json',
	    Authorization: `Bearer ${token}`,
	},
	body: JSON.stringify(workout),
    });
    const data = await response.json();
    if (!response.ok) {
	throw new Error(data.message || 'Failed to add workout');
    }
    return data;
}

export const deleteWorkoutToDB = async (workoutId: number | null): Promise<void> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/workouts/${workoutId}`, {
	method: 'DELETE',
	headers: {
	    Authorization: `Bearer ${token}`,
	},
    });
    if (!response.ok) {
	const data = await response.json();
	throw new Error(data.message || 'Failed to delete workout');
    }
}
