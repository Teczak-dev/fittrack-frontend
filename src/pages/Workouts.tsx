import { WorkoutsLayout } from "../components/templates/WorkoutsLayout/WorkoutsLayout";

export const Workouts: React.FC = () => {
    
    const addWorkout = () => {
	alert("Dodawanie nowego treningu wkrótce zostanie dodane!");
    };

    return (
	<div>
	    <WorkoutsLayout addWorkout={addWorkout}/>
	</div>
    );
}
