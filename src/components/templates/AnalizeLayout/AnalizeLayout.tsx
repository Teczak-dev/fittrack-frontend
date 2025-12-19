import { useTheme } from "../../../hooks/useTheme";
import { RadarOfWorkouts } from "../../organisms/Widgets/RadarOfWorkouts";
import { Stats } from "../../organisms/Widgets/Stats";
import { StatsMonth } from "../../organisms/Widgets/StatsMonth";
import { WheelOfWorkouts } from "../../organisms/Widgets/WheelOfWorkouts";
import styles from "./AnalizeLayout.module.css";

export const AnalizeLayout: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "#4E1BB4" : "#a9dc94";

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Analizuj</h1>

      {/* grid layout */}
      <div className={styles.content}>
        <div
          className={styles.gridItem}
          style={{ gridArea: "TypesWheel", backgroundColor: bgColor }}
        >
          <WheelOfWorkouts />
        </div>
        <div
          className={styles.gridItem}
          style={{ gridArea: "TypesRadar", backgroundColor: bgColor }}
        >
          <RadarOfWorkouts />
        </div>
        <div
          className={styles.gridItem}
          style={{ gridArea: "thisW", backgroundColor: bgColor }}
        >
          <Stats />
        </div>
        <div
          className={styles.gridItem}
          style={{ gridArea: "thisM", backgroundColor: bgColor }}
        >
          <StatsMonth />
        </div>
      </div>
    </div>
  );
};
