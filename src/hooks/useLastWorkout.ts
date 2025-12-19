import { useEffect, useMemo, useState } from "react";
import { useWorkouts } from "./useWorkouts";
import type { Workout } from "../types/workout";
import { getMostRecentWorkout } from "../utils/workoutsManipulation";

export const useLastWorkout = () => {
  const { workouts } = useWorkouts();
  const [lastWorkoutData, setLastWorkoutData] = useState<Workout[] | []>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLastWorkout = useMemo(
    () => async () => {
      try {
        if (workouts.length === 0) {
          setLastWorkoutData([]);
          return;
        }
        const mostRecentWorkout = getMostRecentWorkout(workouts);
        setLastWorkoutData(mostRecentWorkout);
      } catch (err: any) {
        setError(err.message);
        setLastWorkoutData([]);
      } finally {
        setLoaded(true);
      }
    },
    [workouts],
  );

  useEffect(() => {
    fetchLastWorkout();
  }, [fetchLastWorkout]);

  return { lastWorkoutData, loaded, error };
};
