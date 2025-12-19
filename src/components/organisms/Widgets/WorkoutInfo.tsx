import type { Workout } from "../../../types/workout";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { Typography } from "../../atoms/Typography/Typography";
import styles from "./WorkoutInfo.module.css";
import { useDeleteWorkout } from "../../../hooks/useDeleteWorkout";
import { useWorkoutCategory } from "../../../hooks/useWorkoutCategory";
import { useTheme } from "../../../hooks/useTheme";

interface WorkoutInfoProps {
  Workout: Workout;
  className: string;
  bgColor: string;
}

export const WorkoutInfo: React.FC<WorkoutInfoProps> = ({
  Workout,
  className,
  bgColor,
}) => {
  const { theme } = useTheme();
  const { workoutCategory } = useWorkoutCategory();
  const { handleDelete } = useDeleteWorkout();

  const onDelete = async () => {
    await handleDelete(Workout.id ?? null);
  };

  const imageSrc =
    workoutCategory.find((item) => item.name === Workout.name)?.image ||
    "/api/images/icons/exercise.svg";

  return (
    <div
      className={` ${styles.workoutContainer} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.workoutHeader}>
        <Image
          src={`${imageSrc}`}
          alt="Workout Image"
          className={` ${styles.workoutImage} ${theme === "light" ? styles.workoutImageLight : ""}`}
        />
        <Typography variant="body" className={styles.workoutName}>
          {Workout.name}
        </Typography>
      </div>
      <div className={styles.workoutDetails}>
        <Typography variant="body" className={styles.workoutDate}>
          {Workout.date}
        </Typography>
        <Typography variant="body" className={styles.workoutTime}>
          {Workout.duration} minut
        </Typography>
        <Typography variant="body" className={styles.workoutKcal}>
          {Workout.calories} kcal
        </Typography>
        <Typography variant="body" className={styles.workoutType}>
          Typ: {Workout.category}
        </Typography>
      </div>
      <Button variant="secondary" className={styles.button} onClick={onDelete}>
        Usuń
      </Button>
    </div>
  );
};
