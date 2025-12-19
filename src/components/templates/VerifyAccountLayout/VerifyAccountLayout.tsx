import { useNavigate } from "react-router-dom";
import { Button, ThemeButton } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { useTheme } from "../../../hooks/useTheme";
import logoBlack from "../../../assets/images/logo_black.png";
import logoWhite from "../../../assets/images/logo_white.png";
import styles from "./VerifyAccount.module.css";
import { Typography } from "../../atoms/Typography/Typography";

export const VerifyAccountLayout: React.FC<{ message: string }> = ({
  message,
}) => {
  const { theme, toggleTheme } = useTheme();

  const containerStyle =
    theme === "light"
      ? { backgroundColor: "#f1f1f1" }
      : { backgroundColor: "#232425" };
  const logoSelected = theme === "light" ? logoBlack : logoWhite;
  const navigate = useNavigate();

  return (
    <div className={styles.container} style={containerStyle}>
      <Image
        src={logoSelected}
        alt="Logo"
        className={styles.logo}
        onClick={() => navigate("/")}
      />
      <div
        style={{
          maxWidth: 400,
          margin: "3rem auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h2">Weryfikacja konta</Typography>
        <Typography variant="body">{message}</Typography>
        <Button onClick={() => navigate("/home")}>
          Powrót do strony głównej
        </Button>
      </div>
      <ThemeButton className={styles.buttonTheme} onClick={toggleTheme}>
        {theme === "dark" ? "Jasny" : "Ciemny"}
      </ThemeButton>
    </div>
  );
};
