import React, { useState } from "react";
import { createContext } from "react";
import type { Workout } from "../types/workout";

export interface WorkoutsContextType{
    workouts: Workout[] | [];
    updateWorkouts: (newWorkouts: Workout[]) => void;
    addWorkout: (newWorkout: Workout) => void;
    deleteWorkout: (workoutId: number) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

export const WorkoutsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [workouts, setWorkout] = useState<Workout[] | []>([]);
    
    const updateWorkouts = (newWorkouts: Workout[]) => {
	setWorkout(newWorkouts);
    }

    const addWorkout = (newWorkout: Workout) => {
	setWorkout( [...workouts, newWorkout]);
    }

    const deleteWorkout = (workoutId: number) => {
	const updatedWorkouts = workouts.filter(workout => workout.id !== workoutId);
	setWorkout(updatedWorkouts);
    }

    return (
        <WorkoutsContext.Provider value={{ workouts, addWorkout, updateWorkouts, deleteWorkout }}>
            {children}
        </WorkoutsContext.Provider>
    );
};
