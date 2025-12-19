import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography } from "../../atoms/Typography/Typography";
import styles from "./TodaySummary.module.css";
import mainStyles from "./Widgets.module.css";
import { useTodaySummary } from "../../../hooks/useTodaySummary";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";
import { useTheme } from "../../../hooks/useTheme";
export const TodaySummary = () => {
  const { theme } = useTheme();
  const { caloriesBurned, loading, error } = useTodaySummary();

  const caloriesGoal = 800;
  const percentage = (caloriesBurned / caloriesGoal) * 100;
  const textColor = theme === "light" ? "#000" : "#fff";

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <ErrorMessage message="Nie udało się pobrać danych o dzisiejszych spalonych kaloriach." />
    );

  return (
    <div className={` ${mainStyles.container} ${styles.todaySummaryContainer}`}>
      <div className={styles.texts}>
        <Typography variant="body">
          Kcal: {caloriesBurned}/{caloriesGoal}
        </Typography>
      </div>
      <div className={styles.progressbar}>
        <div
          style={{ width: "170px", height: "170px" }}
          className={styles.progressbarInner}
        >
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: "#f14",
              trailColor: "#611",
              textSize: "10px",
              textColor: textColor,
            })}
            text={`kcal: ${caloriesBurned}`}
          />
        </div>
      </div>
      <Typography variant="h2" className={mainStyles.header}>
        Dzisiaj
      </Typography>
    </div>
  );
};
