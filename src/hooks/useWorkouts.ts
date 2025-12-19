import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

// Custom hook to access the current workouts from context
export function useWorkouts() {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw new Error("useWorkouts musi być użyty w WorkoutsProviderze");
  }
  return context;
}
