import { useEffect, useMemo, useState } from "react";
import { filterWorkoutByWeek } from "../utils/workoutsManipulation";
import { useWorkouts } from "./useWorkouts";

export function useStatsData() {
  const { workouts } = useWorkouts();
  const [workoutData, setWorkoutData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const days = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

  const fetchWorkoutData = useMemo(
    () => async () => {
      try {
        const filtered = filterWorkoutByWeek(workouts);
        setWorkoutData(filtered);
      } catch (err: any) {
        setError(err.message || "Błąd danych");
        setWorkoutData([]);
      }
    },
    [workouts],
  );

  useEffect(() => {
    fetchWorkoutData();
  }, [fetchWorkoutData]);

  const sumCaloriesPerDay = (dayIndex: number) => {
    let sum = 0;
    workoutData.forEach((workout) => {
      const workoutDate = new Date(workout.date);
      if (workoutDate.getDay() === (dayIndex + 1) % 7) {
        sum += workout.calories;
      }
    });
    return sum;
  };

  const sumMinutesPerDay = (dayIndex: number) => {
    let sum = 0;
    workoutData.forEach((workout) => {
      const workoutDate = new Date(workout.date);
      if (workoutDate.getDay() === (dayIndex + 1) % 7) {
        sum += workout.duration;
      }
    });
    return sum;
  };

  const data = days.map((day, index) => ({
    name: day,
    kalorie: sumCaloriesPerDay(index),
    minuty: sumMinutesPerDay(index),
  }));

  return {
    error,
    data,
  };
}
