import { deleteWorkoutToDB } from "../api/workouts";
import { useWorkouts } from "./useWorkouts";

export function useDeleteWorkout() {
  const { deleteWorkout } = useWorkouts();

  const handleDelete = async (id: number | null) => {
    try {
      if (!id) return;
      await deleteWorkoutToDB(id);
      deleteWorkout(id);
    } catch (err) {
      console.error("Error deleting workout", err);
    }
  };
  return { handleDelete };
}
