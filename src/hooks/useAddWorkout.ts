import { useState } from "react";
import { addWorkoutToDB, getUserWorkouts } from "../api/workouts";
import { useWorkouts } from "./useWorkouts";
import type { Workout } from "../types/workout";
import { useWorkoutCategory } from "./useWorkoutCategory";

export const useAddWorkout = (switchDisplay: () => void) => {
  const { workoutCategory } = useWorkoutCategory();
  const { updateWorkouts } = useWorkouts();
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  const [workoutName, setWorkoutName] = useState("");
  const [minutesError, setMinutesError] = useState<string | null>(null);
  const [caloriesError, setCaloriesError] = useState<string | null>(null);

  const validateMinutes = (value: number) => value > 0;
  const validateCalories = (value: number) => value > 0;

  const handleMinutes = (value: string) => {
    setMinutesError(null);
    const v = parseInt(value || "0", 10) || 0;
    if (!validateMinutes(v))
      setMinutesError("Czas trwania musi być większy niż 0");
    setMinutes(v);
  };

  const handleCalories = (value: string) => {
    setCaloriesError(null);
    const v = parseInt(value || "0", 10) || 0;
    if (!validateCalories(v))
      setCaloriesError("Liczba spalonych kalorii musi być większa niż 0");
    setCalories(v);
  };

  const handleAdd = async (newWorkout: Workout) => {
    if (!validateMinutes(minutes) || !validateCalories(calories)) {
      if (!validateMinutes(minutes))
        setMinutesError("Czas trwania musi być większy niż 0");
      if (!validateCalories(calories))
        setCaloriesError("Liczba spalonych kalorii musi być większa niż 0");
      return;
    }
    try {
      await addWorkoutToDB(newWorkout);
      const workouts = await getUserWorkouts();
      updateWorkouts(workouts);
    } catch (err) {
      console.error("Failed to add workout", err);
    }
  };

  const clearValues = () => {
    setMinutes(1);
    setCalories(1);
    setWorkoutName("");
    setMinutesError(null);
    setCaloriesError(null);
  };

  const handleAddClick = async (e: any) => {
    e.preventDefault();
    const newWorkout: Workout = {
      id: null,
      name: workoutName || workoutCategory[0]?.name || "",
      duration: minutes,
      calories: calories,
      category:
        workoutCategory.find(
          (item) => item.name === (workoutName || workoutCategory[0]?.name),
        )?.category || "Inne",
      date: new Date().toISOString().split("T")[0],
    };
    await handleAdd(newWorkout);
    clearValues();
    switchDisplay();
  };

  const handleClose = () => {
    clearValues();
    switchDisplay();
  };

  return {
    minutes,
    calories,
    workoutName,
    minutesError,
    caloriesError,
    setWorkoutName,
    handleMinutes,
    handleCalories,
    handleAddClick,
    handleClose,
  };
};
