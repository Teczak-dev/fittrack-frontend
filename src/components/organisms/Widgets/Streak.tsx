import { Typography } from "../../atoms/Typography/Typography";
import mainStyles from "./Widgets.module.css";
import styles from "./Streak.module.css";
import { useEffect, useMemo, useState } from "react";
import { getStreak } from "../../../api/streak";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

export const Streak = () => {

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

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message="Nie udało się pobrać danych" />;
    
    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Streak</Typography>
	    <div className={styles.streakContainer}>
		<Typography variant='body' className={styles.streakText}>Masz już {streakCount} dni 🔥</Typography>
	    </div>
	</div>
    );
}
