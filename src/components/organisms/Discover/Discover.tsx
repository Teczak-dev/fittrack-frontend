import styles from "./Discover.module.css";
import discover1 from "../../../assets/images/discover1.png";
import discover2 from "../../../assets/images/discover2.png";
import discover3 from "../../../assets/images/discover3.png";
import discover4 from "../../../assets/images/discover4.png";
import { Image } from "../../atoms/Image/Image";
import { Typography } from "../../atoms/Typography/Typography";
import { useTheme } from "../../../hooks/useTheme";

export const Discover: React.FC = () => {
  const { theme } = useTheme();

  const makeSrcSet = (src: string) => `${src} 1x, ${src} 2x`;
  const desktopPreferred =
    "(min-width:1079px) 480px, (max-width:1078px) 60vw, (max-width:480px) 80vw";
  return (
    <section
      className={`${styles.discover} ${theme === "light" ? "light-mode" : ""}`}
    >
      <article className={styles.card}>
        <div className={styles.cardText}>
          <Typography variant="h3">
            Sprawdzone sposoby w nowym wydaniu
          </Typography>
        </div>
        <div className={styles.cardMedia}>
          <Image
            src={discover1}
            srcSet={makeSrcSet(discover1)}
            sizes={desktopPreferred}
            alt="Discover Image 1"
            className={styles.discoverImage}
          />
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.cardText}>
          <Typography variant="h3">
            Wszystko co potrzebne w jednym miejscu
          </Typography>
        </div>
        <div className={styles.cardMedia}>
          <Image
            src={discover2}
            srcSet={makeSrcSet(discover2)}
            sizes={desktopPreferred}
            alt="Discover Image 2"
            className={styles.discoverImage}
          />
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.cardText}>
          <Typography variant="h3">
            Zaprojektowane z myślą o komputerach i telefonach
          </Typography>
        </div>
        <div className={styles.cardMedia}>
          <Image
            src={discover3}
            srcSet={makeSrcSet(discover3)}
            sizes={desktopPreferred}
            alt="Discover Image 3"
            className={styles.discoverImage}
          />
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.cardText}>
          <Typography variant="h3">
            Nie przekładaj tego na jutro, zacznij już dziś
          </Typography>
        </div>
        <div className={styles.cardMedia}>
          <Image
            src={discover4}
            srcSet={makeSrcSet(discover4)}
            sizes={desktopPreferred}
            alt="Discover Image 4"
            className={styles.discoverImage}
          />
        </div>
      </article>
    </section>
  );
};
