import { useTheme } from "../../../hooks/useTheme";
import { Link } from "../../atoms/Link/Link";
import { ListElement } from "../../atoms/LinstElement/ListElement";
import { Typography } from "../../atoms/Typography/Typography";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const darkStyle = theme === "dark" ? styles.FooterDark : styles.FooterLight;
  return (
    <footer className={`${styles.Footer} ${darkStyle}`}>
      <div>
        <Typography variant="body" className={styles.title}>
          &copy; Mikołaj Sobczak
        </Typography>
        <ul className={styles.list}>
          <ListElement className={styles.listElement}>
            <Link
              url="https://mikolaj-sobczak.pl/"
              text="Moja strona"
              className={styles.link}
            />
          </ListElement>
          <ListElement className={styles.listElement}>
            <Link
              url="https://github.com/Teczak-dev"
              text="Github: @Teczak-dev"
              className={styles.link}
            />
          </ListElement>
          <ListElement className={styles.listElement}>
            <Link
              url="https://www.linkedin.com/in/mikołaj-sobczak-27b0a429a"
              text="linkedIn: @Mikołaj Sobczak"
              className={styles.link}
            />
          </ListElement>
        </ul>
      </div>
    </footer>
  );
};
