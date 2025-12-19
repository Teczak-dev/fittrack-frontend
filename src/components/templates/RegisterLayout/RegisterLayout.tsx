import { RegisterForm } from "../../organisms/Forms/Forms";
import logoBlack from "../../../assets/images/logo_black.png";
import logoWhite from "../../../assets/images/logo_white.png";
import { Image } from "../../atoms/Image/Image";
import { useTheme } from "../../../hooks/useTheme";
import styles from "./RegisterLayout.module.css";
import { ThemeButton } from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

interface RegisterLayoutProps {
  register: (email: string, pass: string, username: string) => void;
  error?: string;
}

export const RegisterLayout: React.FC<RegisterLayoutProps> = ({
  register,
  error,
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
        onClick={() => navigate("/home")}
      />
      <RegisterForm register={register} error={error} />
      <ThemeButton className={styles.buttonTheme} onClick={toggleTheme}>
        {theme === "dark" ? "Jasny" : "Ciemny"}
      </ThemeButton>
    </div>
  );
};
