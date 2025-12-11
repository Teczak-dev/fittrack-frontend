import { Typography } from "../../atoms/Typography/Typography";
import mainStyles from "./Widgets.module.css";
import styles from "./Streak.module.css";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";
import { useStreak } from "../../../hooks/useStreak";

export const Streak = () => {

    const { streakCount, loading, error } = useStreak();

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
