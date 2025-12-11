import { useState, useEffect, useMemo } from 'react';
import { getStreak } from '../api/streak';

export const useStreak = () => {
    const [streakCount, setStreakCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStreak = useMemo(() => async () => {
        try {
            setLoading(true);
            const data = await getStreak();
            setStreakCount(data);
        } catch (err:any) {
            setError(err.message);
            setStreakCount(0); 
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStreak();
    }, [fetchStreak]);

    return { streakCount, loading, error };

}
