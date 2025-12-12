import type { Workout } from "../types/workout";

// Fetch user's workouts from the backend
// Requires authentication token in localStorage
// Returns a promise that resolves to an array of Workout objects
export const getUserWorkouts = async () : Promise<Workout[]> => {
    const token = localStorage.getItem("token");
    const response = await fetch('/api/workouts', {
	headers: {
	    Authorization: `Bearer ${token}`,
	},
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
        const err: any = new Error(data.message || 'Failed to fetch workouts');
        err.status = response.status;
        throw err;
    }

    return data as Workout[];
}

// Add a new workout to the backend
// Requires authentication token in localStorage
// Accepts a Workout object and returns a promise that resolves to the added Workout object
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

// Delete a workout from the backend
// Requires authentication token in localStorage
// Accepts a workoutId and returns a promise that resolves when the workout is deleted
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
