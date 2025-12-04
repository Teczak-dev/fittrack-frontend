import type { Workout } from "./workout";

export interface SavedData {
    userName: string | undefined;
    sumaOfWorkouts: number;
    totalTime: number; 
    totalCalories: number;
    workouts: Workout[];
}
