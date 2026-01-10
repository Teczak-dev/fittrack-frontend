import { Image } from "../../atoms/Image/Image";
import { Link } from "../../atoms/Link/Link";
import { Button, ThemeButton } from "../../atoms/Button/Button";

import styles from "./Header.module.css";
import { useTheme } from "../../../hooks/useTheme";

import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

import logoBlack from "../../../assets/images/logo_black.png";
import logoWhite from "../../../assets/images/logo_white.png";
import settingsBlack from "../../../assets/images/settings_black.png";
import settingsWhite from "../../../assets/images/settings_white.png";

import { useNavigate } from "react-router-dom";
import { Navigation, NavigationDesktopMedium } from "../Navigation/Navigation";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { useUser } from "../../../hooks/useUser";
import { getProfile, logout } from "../../../api/auth";

{
  /*
	      Header for desktop view on home page
*/
}

interface HeaderHomeProps {
  home: () => void;
  discover: () => void;
  price: () => void;
}
export const HeaderHome: React.FC<HeaderHomeProps> = ({
  home,
  discover,
  price,
}) => {
  const { theme, toggleTheme } = useTheme();

  const navigation = useNavigate();
  const lightStyle = theme === "light" ? styles.headerLight : "";
  const buttonsColor = theme === "light" ? styles.linksLight : styles.linksDark;
  const imageSrc = theme === "light" ? logoBlack : logoWhite;

  return (
    <header className={`${styles.header} ${lightStyle}`} style={styles}>
      <div className={styles.div} style={styles}>
        <Image
          src={imageSrc}
          alt="Logo"
          className={styles.logo}
          onClick={() => navigation("/")}
        />
        <div className={styles.navLinks} style={styles}>
          <Button onClick={home} className={`${styles.links} ${buttonsColor}`}>
            LockIn Workout
          </Button>
          <Button
            onClick={discover}
            className={`${styles.links} ${buttonsColor}`}
          >
            Odkryj
          </Button>
          <Button onClick={price} className={`${styles.links} ${buttonsColor}`}>
            Cena
          </Button>
        </div>
      </div>
      <div className={`${styles.div} ${styles.rightDiv}`} style={styles}>
        <ThemeButton onClick={toggleTheme}>
          {theme === "dark" ? "Jasny" : "Ciemny"}
        </ThemeButton>
        <Link
          text="Rejestracja"
          url="/register"
          className={`${styles.Register} ${theme === "dark" ? styles.RegisterDark : styles.RegisterLight}`}
          style={styles}
        />
        <Link
          text="Login"
          url="/login"
          className={`${styles.Login} ${theme === "dark" ? styles.LoginDark : styles.LoginLight}`}
          style={styles}
        />
      </div>
    </header>
  );
};

{
  /*
    	      Header for mobile view on home page
*/
}
interface HeaderHomeMobileProps {
  home: () => void;
  discover: () => void;
  price: () => void;
}
export const HeaderHomeMobile: React.FC<HeaderHomeMobileProps> = ({
  home,
  discover,
  price,
}) => {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const lightStyle = theme === "light" ? styles.headerLightM : "";
  const buttonsColor = theme === "light" ? styles.linksLight : styles.linksDark;
  const imageSrc = theme === "light" ? logoBlack : logoWhite;

  return (
    <header className={`${styles.headerM} ${lightStyle}`} style={styles}>
      <div className={styles.navOverlay}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <Image
          src={imageSrc}
          alt="Logo"
          className={styles.logo}
          onClick={() => navigation("/")}
        />
        <Link
          text="Login"
          url="/login"
          className={`${styles.Login} ${theme === "dark" ? styles.LoginDark : styles.LoginLight}`}
          style={styles}
        />
      </div>
      {isOpen ? (
        <div className={styles.burger} onClick={() => setOpen(false)}>
          <div className={styles.navLinksM} style={styles}>
            <Button
              onClick={home}
              className={`${styles.links} ${buttonsColor}`}
            >
              Fit tracker
            </Button>
            <Button
              onClick={discover}
              className={`${styles.links} ${buttonsColor}`}
            >
              Odkryj
            </Button>
            <Button
              onClick={price}
              className={`${styles.links} ${buttonsColor}`}
            >
              Cena
            </Button>
          </div>

          <div className={styles.buttonsBurgerM}>
            <ThemeButton onClick={toggleTheme}>
              {theme === "dark" ? "Jasny" : "Ciemny"}
            </ThemeButton>
            <Link
              text="Rejestracja"
              url="/register"
              className={`${styles.Register} ${theme === "dark" ? styles.RegisterDark : styles.RegisterLight}`}
              style={styles}
            />
          </div>
        </div>
      ) : null}
    </header>
  );
};
{
  /*
	      Header for logged in users in main app
*/
}

export const HeaderApp: React.FC = () => {
  const { user, updateUser } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { width } = useScreenWidth();
  const navigation = useNavigate();

  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    getProfile()
      .then(updateUser)
      .catch((err: any) => {
        // Only navigate to login if the error is an authentication issue.
        if (err?.status === 401 || err?.status === 403) {
          navigation("/login");
        } else {
          console.error("Failed to fetch profile:", err?.message || err);
          // Do not navigate on rate-limit (429) or server errors to avoid redirect loops.
        }
      });
  }, []);

  const handleToggleTheme = () => {
    setOpenSettings(false);
    toggleTheme();
  };

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    navigation("/login");
  };

  const handleAccount = () => {
    navigation("/me/account");
    setOpenSettings(false);
  };

  const ImageSrc = theme === "light" ? logoBlack : logoWhite;
  const lightStyle = theme === "light" ? styles.headerAppLight : "";
  const SettingsSrc = theme === "light" ? settingsBlack : settingsWhite;
  const settingsMenuActive = openSettings ? styles.buttonAppActive : "";
  const settingsMenuBG =
    theme === "light"
      ? { backgroundColor: "#f1f1f1", border: "1px solid #ccc" }
      : { backgroundColor: "#333", border: "1px solid #555" };
  const settingsButtonsColor =
    theme === "light" ? styles.settingsButtonLight : "";

  return (
    <header className={` ${styles.headerApp} ${lightStyle}`}>
      <Image
        src={ImageSrc}
        alt="Logo"
        className={styles.logoApp}
        onClick={() => navigation("/me")}
      />
      {width > 1200 ? <Navigation /> : <NavigationDesktopMedium />}
      <div>
        <span>Hej, {user?.name}! 👋🏻</span>
        <Image
          src={logoBlack}
          alt="User Avatar"
          onClick={handleAccount}
          className={styles.avatarApp}
        />
        <Button
          onClick={() => setOpenSettings(!openSettings)}
          className={styles.buttonApp}
        >
          <Image
            src={SettingsSrc}
            alt="Settings"
            className={` ${styles.settingsIcon} ${settingsMenuActive}`}
          />
        </Button>
      </div>
      {openSettings ? (
        <>
          <div
            className={styles.placeholderForCloseSettings}
            onClick={() => setOpenSettings(false)}
          ></div>
          <div className={styles.settingsMenu} style={settingsMenuBG}>
            <Button onClick={handleAccount} className={settingsButtonsColor}>
              Konto
            </Button>
            <Button
              onClick={handleToggleTheme}
              className={settingsButtonsColor}
            >
              Zmień motyw na {theme === "dark" ? "jasny" : "ciemny"}
            </Button>
            <Button
              onClick={handleLogout}
              className={` ${settingsButtonsColor} ${styles.settingsButtonLast}`}
            >
              Logout
            </Button>
          </div>
        </>
      ) : null}
    </header>
  );
};

{
  /*
    	      Header for logged in users in main app - mobile version
*/
}
export const HeaderAppMobile: React.FC = () => {
  const { theme } = useTheme();
  const { user, updateUser } = useUser();

  const ImageSrc = theme === "light" ? logoBlack : logoWhite;
  const lightStyle = theme === "light" ? styles.headerAppLight : "";
  const navigation = useNavigate();

  useEffect(() => {
    getProfile()
      .then(updateUser)
      .catch((err: any) => {
        if (err?.status === 401 || err?.status === 403) {
          navigation("/login");
        } else {
          console.error("Failed to fetch profile:", err?.message || err);
        }
      });
  }, []);

  return (
    <header className={` ${styles.headerApp} ${lightStyle}`}>
      <Image
        src={ImageSrc}
        alt="Logo"
        className={styles.logoApp}
        onClick={() => navigation("/me")}
      />
      <div>
        <span>Hej, {user?.name}! 👋🏻</span>
        <Image
          src={logoBlack}
          alt="User Avatar"
          className={styles.avatarApp}
          onClick={() => navigation("/me/account")}
        />
      </div>
    </header>
  );
};
