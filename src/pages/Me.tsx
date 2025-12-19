import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkoutCategory } from "../hooks/useWorkoutCategory";
import { useWorkouts } from "../hooks/useWorkouts";
import { getWorkoutCategories } from "../api/workoutCategory";
import { getUserWorkouts } from "../api/workouts";
import { filterWorkoutByDay } from "../utils/workoutsManipulation";

export const Me: React.FC = () => {
  const navigate = useNavigate();
  const { updateWorkoutCategory } = useWorkoutCategory();
  const { updateWorkouts } = useWorkouts();

  const load_data = async () => {
    try {
      const workouts = await getUserWorkouts();
      updateWorkouts(filterWorkoutByDay(workouts));

      const categories = await getWorkoutCategories();
      updateWorkoutCategory(categories);

      // only navigate to dashboard after successful data load
      navigate("/me/dashboard");
    } catch (err: any) {
      if (err?.status === 401 || err?.status === 403) {
        navigate("/login");
      } else {
        console.error("Failed to load user data for /me:", err?.message || err);
      }
    }
  };

  useEffect(() => {
    load_data();
  }, []);

  return <div></div>;
};
