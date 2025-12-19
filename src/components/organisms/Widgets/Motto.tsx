import mainStyles from "./Widgets.module.css";
import styles from "./Motto.module.css";
import { Typography } from "../../atoms/Typography/Typography";
import { getRandomMotto } from "../../../utils/mottos";
export const Motto = () => {
  const motto: string = getRandomMotto();

  return (
    <div className={mainStyles.container}>
      <Typography variant="h2" className={mainStyles.header}>
        Motto dnia
      </Typography>
      <div className={styles.mottoContainer}>
        <Typography variant="body" className={styles.mottoText}>
          "{motto}"
        </Typography>
      </div>
    </div>
  );
};
