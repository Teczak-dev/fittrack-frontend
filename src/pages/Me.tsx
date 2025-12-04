import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
	await getUserWorkouts().then( (workouts) => {
	    updateWorkouts( filterWorkoutByDay(workouts) );
	});
	await getWorkoutCategories().then( (categories) => {
	    updateWorkoutCategory(categories);
	});
    }   
    useEffect(() => {
	load_data();
	navigate('/me/dashboard');
    }, [])

    return (
	<div>
	    <h1>Me Page</h1>
	    <p>To jest strona o tobie</p>
	    <Link to="/me/dashboard">Go to Dashboard</Link>

	</div>
    );
}
