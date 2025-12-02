import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

export function useWorkouts() {
    const context = useContext(WorkoutsContext);
    if (!context) {
	throw new Error("useWorkouts musi być użyty w WorkoutsProviderze");
    }
    return context;
}
