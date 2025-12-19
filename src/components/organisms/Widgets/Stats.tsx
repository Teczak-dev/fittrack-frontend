import mainStyles from "./Widgets.module.css";
import styles from "./Stats.module.css";
import { Typography } from "../../atoms/Typography/Typography";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStatsData } from "../../../hooks/useStatsData";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";
import { useTheme } from "../../../hooks/useTheme";

export const Stats = () => {
  const { theme } = useTheme();
  const { error, data } = useStatsData();

  if (error)
    return <ErrorMessage message="Nie udało się pobrać danych o treningach." />;

  const fillColor = theme === "light" ? "#000" : "#fff";

  return (
    <div className={mainStyles.container}>
      <Typography variant="h2" className={mainStyles.header}>
        Ten tydzień
      </Typography>
      <div className={styles.statsContainer}>
        <BarChart className={styles.barInfo} responsive data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: fillColor }} />
          <YAxis width="auto" tick={{ fill: fillColor }} />
          {theme === "dark" ? (
            <Tooltip
              itemStyle={{ backgroundColor: "#222" }}
              wrapperStyle={{ borderRadius: "20px", backgroundColor: "#222" }}
              labelStyle={{ backgroundColor: "#222" }}
              contentStyle={{ backgroundColor: "#222", borderRadius: "20px" }}
            />
          ) : (
            <Tooltip
              itemStyle={{ backgroundColor: "#fff" }}
              wrapperStyle={{ borderRadius: "20px", backgroundColor: "#222" }}
              labelStyle={{ backgroundColor: "#fff" }}
              contentStyle={{ backgroundColor: "#fff", borderRadius: "20px" }}
            />
          )}
          <Legend />
          <Bar dataKey="kalorie" fill="#f41" isAnimationActive={true} />
          <Bar dataKey="minuty" fill="#ce7e00" isAnimationActive={true} />
        </BarChart>
      </div>
    </div>
  );
};
