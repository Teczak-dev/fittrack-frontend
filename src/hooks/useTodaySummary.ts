import { useEffect, useMemo, useState } from 'react';
import { calculateTodaysCalories } from '../utils/workoutsManipulation';
import { useWorkouts } from './useWorkouts';

export function useTodaySummary() {
    const { workouts } = useWorkouts();
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCaloriesBurned = useMemo(() => async () => {
        try {
            setLoading(true);
            const data = calculateTodaysCalories(workouts);
            setCaloriesBurned(data);
        } catch (err: any) {
            setError(err.message || 'Błąd');
            setCaloriesBurned(0);
        } finally {
            setLoading(false);
        }
    }, [workouts]); 
    
    useEffect(() => {
        fetchCaloriesBurned();
    }, [fetchCaloriesBurned]);

    return { caloriesBurned, loading, error };
}
