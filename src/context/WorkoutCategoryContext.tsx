import React, { useEffect, useState } from "react";
import { createContext } from "react";
import type { WorkoutCategory } from "../types/workoutCategory";
import { getWorkoutCategories } from "../api/workoutCategory";

export interface WorkoutCategoryContextType{
    workoutCategory: WorkoutCategory[] | [];
    updateWorkoutCategory: (newWorkoutCategory: WorkoutCategory[]) => void;
}

export const WorkoutCategoryContext = createContext<WorkoutCategoryContextType | undefined>(undefined);

export const WorkoutCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [workoutCategory, setWorkoutCategoty] = useState<WorkoutCategory[] | []>([]);

    useEffect(() => {
	const token = localStorage.getItem('token');
	if (token) {
	    getWorkoutCategories().then( (categories) => {
		updateWorkoutCategory(categories);
	    });
	}
    }, [])
    
    const updateWorkoutCategory = (newWorkoutCategory: WorkoutCategory[]) => {
	setWorkoutCategoty(newWorkoutCategory);
    }

    return (
        <WorkoutCategoryContext.Provider value={{ workoutCategory, updateWorkoutCategory }}>
            {children}
        </WorkoutCategoryContext.Provider>
    );
};
