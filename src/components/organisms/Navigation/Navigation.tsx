import { useTheme } from "../../../hooks/useTheme";
import { NavigationLink } from "../../atoms/Link/Link";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";
import { Image } from "../../atoms/Image/Image";
import styles from "./Navigation.module.css";

import dashboardDark from "../../../assets/images/navigation_icons/dashboard_black.png";
import dashboardLight from "../../../assets/images/navigation_icons/dashboard_white.png";
import workoutsDark from "../../../assets/images/navigation_icons/workout_black.png";
import workoutsLight from "../../../assets/images/navigation_icons/workout_white.png";
import analizeDark from "../../../assets/images/navigation_icons/analize_black.png";
import analizeLight from "../../../assets/images/navigation_icons/analize_white.png";
import caloriesDark from "../../../assets/images/navigation_icons/calories_black.png";
import caloriesLight from "../../../assets/images/navigation_icons/calories_white.png";

import settingsBlack from "../../../assets/images/settings_black.png";
import settingsWhite from "../../../assets/images/settings_white.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../api/auth";
import { Typography } from "../../atoms/Typography/Typography";

export const Navigation: React.FC = () => {
  const { theme } = useTheme();

  const navBackgroundClass =
    theme === "dark" ? styles.navDark : styles.navLight;
  const selectedLinkClass =
    theme === "dark" ? styles.navLinkActiveDark : styles.navLinkActiveLight;

  const dashboardImgSrc = theme === "dark" ? dashboardLight : dashboardDark;
  const workoutsImgSrc = theme === "dark" ? workoutsLight : workoutsDark;
  const analizeImgSrc = theme === "dark" ? analizeLight : analizeDark;
  const caloriesImgSrc = theme === "dark" ? caloriesLight : caloriesDark;

  return (
    <nav className={`${styles.nav} ${navBackgroundClass}`}>
      <NavigationLink
        url="/me/dashboard"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={dashboardImgSrc} alt="" className={styles.navImg} />
        Pulpit
      </NavigationLink>
      <NavigationLink
        url="/me/workouts"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={workoutsImgSrc} alt="" className={styles.navImg} />
        Ćwiczenia
      </NavigationLink>
      <NavigationLink
        url="/me/analize"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={analizeImgSrc} alt="" className={styles.navImg} />
        Analizuj
      </NavigationLink>
      <NavigationLink
        url="/me/calories"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={caloriesImgSrc} alt="" className={styles.navImg} />
        Kalorie
      </NavigationLink>
    </nav>
  );
};

export const NavigationDesktopMedium: React.FC = () => {
  const { theme } = useTheme();

  const navBackgroundClass =
    theme === "dark" ? styles.navDark : styles.navLight;
  const selectedLinkClass =
    theme === "dark" ? styles.navLinkActiveDark : styles.navLinkActiveLight;

  const dashboardImgSrc = theme === "dark" ? dashboardLight : dashboardDark;
  const workoutsImgSrc = theme === "dark" ? workoutsLight : workoutsDark;
  const analizeImgSrc = theme === "dark" ? analizeLight : analizeDark;
  const caloriesImgSrc = theme === "dark" ? caloriesLight : caloriesDark;

  return (
    <nav className={`${styles.nav} ${navBackgroundClass}`}>
      <NavigationLink
        url="/me/dashboard"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={dashboardImgSrc} alt="" className={styles.navImg} />
      </NavigationLink>
      <NavigationLink
        url="/me/workouts"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={workoutsImgSrc} alt="" className={styles.navImg} />
      </NavigationLink>
      <NavigationLink
        url="/me/analize"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={analizeImgSrc} alt="" className={styles.navImg} />
      </NavigationLink>
      <NavigationLink
        url="/me/calories"
        className={({ isActive }: { isActive: boolean }) =>
          `${styles.navLink} ${isActive ? selectedLinkClass : ""} `
        }
      >
        <Image src={caloriesImgSrc} alt="" className={styles.navImg} />
      </NavigationLink>
    </nav>
  );
};

export const NavigationMobile: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigate();

  const [openSettings, setOpenSettings] = useState(false);
  const handleToggleTheme = () => {
    setOpenSettings(false);
    toggleTheme();
  };
  const handleLogout = () => {
    logout();
    navigation("/login");
  };

  const handleAccount = () => {
    navigation("/me/account");
    setOpenSettings(false);
  };

  const navBackgroundClass =
    theme === "dark" ? styles.navMDark : styles.navMLight;
  const SettingsSrc = theme === "light" ? settingsBlack : settingsWhite;
  const settingsMenuActive = openSettings ? styles.buttonAppActive : "";
  const selectedLinkClass =
    theme === "dark" ? styles.navLinkActiveDark : styles.navLinkActiveLight;
  const dashboardImgSrc = theme === "dark" ? dashboardLight : dashboardDark;
  const workoutsImgSrc = theme === "dark" ? workoutsLight : workoutsDark;
  const analizeImgSrc = theme === "dark" ? analizeLight : analizeDark;
  const caloriesImgSrc = theme === "dark" ? caloriesLight : caloriesDark;
  const settingsButtonsColor =
    theme === "light" ? styles.settingsButtonLight : "";
  const mobileNavColor = theme === "light" ? styles.mobileNavLinkLight : "";

  const settingsMenuBG =
    theme === "light"
      ? { backgroundColor: "#f1f1f1", border: "1px solid #ccc" }
      : { backgroundColor: "#333", border: "1px solid #555" };

  return (
    <>
      <nav className={` ${styles.navMobile} ${navBackgroundClass}`}>
        <NavigationLink
          url="/me/dashboard"
          className={({ isActive }: { isActive: boolean }) =>
            `${styles.navLink} ${styles.mobileNavLink} ${isActive ? selectedLinkClass : ""} `
          }
        >
          <Image src={dashboardImgSrc} alt="" className={styles.navImg} />
          <Typography
            variant="body"
            className={`${styles.navSmallText} ${mobileNavColor} `}
          >
            Pulpit
          </Typography>
        </NavigationLink>
        <NavigationLink
          url="/me/workouts"
          className={({ isActive }: { isActive: boolean }) =>
            `${styles.navLink} ${styles.mobileNavLink} ${isActive ? selectedLinkClass : ""} `
          }
        >
          <Image src={workoutsImgSrc} alt="" className={styles.navImg} />
          <Typography
            variant="body"
            className={`${styles.navSmallText} ${mobileNavColor} `}
          >
            Ćwiczenia
          </Typography>
        </NavigationLink>
        <NavigationLink
          url="/me/analize"
          className={({ isActive }: { isActive: boolean }) =>
            `${styles.navLink} ${styles.mobileNavLink} ${isActive ? selectedLinkClass : ""} `
          }
        >
          <Image src={analizeImgSrc} alt="" className={styles.navImg} />
          <Typography
            variant="body"
            className={`${styles.navSmallText} ${mobileNavColor} `}
          >
            Analizuj
          </Typography>
        </NavigationLink>
        <NavigationLink
          url="/me/calories"
          className={({ isActive }: { isActive: boolean }) =>
            `${styles.navLink} ${styles.mobileNavLink} ${isActive ? selectedLinkClass : ""} `
          }
        >
          <Image src={caloriesImgSrc} alt="" className={styles.navImg} />
          <Typography
            variant="body"
            className={`${styles.navSmallText} ${mobileNavColor} `}
          >
            Kalorie
          </Typography>
        </NavigationLink>

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
      </nav>
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
    </>
  );
};
