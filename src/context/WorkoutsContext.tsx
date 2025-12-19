import React, { useEffect, useState } from "react";
import { createContext } from "react";
import type { Workout } from "../types/workout";
import { getUserWorkouts } from "../api/workouts";
import { filterWorkoutByDay } from "../utils/workoutsManipulation";

export interface WorkoutsContextType{
    workouts: Workout[] | [];
    updateWorkouts: (newWorkouts: Workout[]) => void;
    addWorkout: (newWorkout: Workout) => void;
    deleteWorkout: (workoutId: number) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

export const WorkoutsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [workouts, setWorkout] = useState<Workout[] | []>([]);


    // Fetch workouts on mount if token exists
    useEffect(() => {
	const token = localStorage.getItem('token');
	if (token) {
        getUserWorkouts()
          .then((workouts) => {
            updateWorkouts(workouts);
          })
          .catch((err: any) => {
            // Only clear token on explicit auth failures to avoid redirect loops.
            console.error('Failed to load workouts:', err?.message || err);
            if (err?.status === 401 || err?.status === 403) {
              localStorage.removeItem('token');
            }
            // For rate-limiting (429) or server errors, keep the token and avoid retries here.
          });
	}

    }, []);

    const updateWorkouts = (newWorkouts: Workout[]) => {
	setWorkout(newWorkouts);
    }

    const addWorkout = (newWorkout: Workout) => {
	const filteredWorkouts = filterWorkoutByDay([...workouts, newWorkout]);
	setWorkout( filteredWorkouts);
    }

    const deleteWorkout = (workoutId: number ) => {
	if (workoutId === null) return;
	const updatedWorkouts = workouts.filter(workout => workout.id !== workoutId);
	setWorkout( filterWorkoutByDay(updatedWorkouts) );
    }

    return (
        <WorkoutsContext.Provider value={{ workouts, addWorkout, updateWorkouts, deleteWorkout }}>
            {children}
        </WorkoutsContext.Provider>
    );
};
