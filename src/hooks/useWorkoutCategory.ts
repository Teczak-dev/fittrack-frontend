import { useContext } from "react";
import { WorkoutCategoryContext } from "../context/WorkoutCategoryContext";

// Custom hook to access the current workout category from context
export function useWorkoutCategory() {
    const context = useContext(WorkoutCategoryContext);
    if (!context) {
	throw new Error("useWorkoutCategory musi być użyty w WorkoutCategoryProviderze");
    }
    return context;
}
