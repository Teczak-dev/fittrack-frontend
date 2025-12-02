import { Typography } from "../../atoms/Typography/Typography";
import mainStyles from "./Widgets.module.css";
import styles from "./Streak.module.css";

export const Streak = () => {

    const streakCount = 1080;

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Streak</Typography>
	    <div className={styles.streakContainer}>
		<Typography variant='body' className={styles.streakText}>Masz już {streakCount} dni 🔥</Typography>
	    </div>
	</div>
    );
}
