import { useTheme } from "../../../context/useTheme";
import { NavigationLink } from "../../atoms/Link/Link";
import { Button, ThemeButton } from "../../atoms/Button/Button";
import { useState } from "react";
import { Image } from "../../atoms/Image/Image";
import styles from './Navigation.module.css';

import dashboardDark from '../../../assets/images/navigation_icons/dashboard_black.png';
import dashboardLight from '../../../assets/images/navigation_icons/dashboard_white.png';
import workoutsDark from '../../../assets/images/navigation_icons/workout_black.png';
import workoutsLight from '../../../assets/images/navigation_icons/workout_white.png';
import analizeDark from '../../../assets/images/navigation_icons/analize_black.png';
import analizeLight from '../../../assets/images/navigation_icons/analize_white.png';
import caloriesDark from '../../../assets/images/navigation_icons/calories_black.png';
import caloriesLight from '../../../assets/images/navigation_icons/calories_white.png'; 

import settingsBlack from '../../../assets/images/settings_black.png';
import settingsWhite from '../../../assets/images/settings_white.png';
import { useNavigate } from "react-router-dom";

export const Navigation: React.FC = () => {
    const {theme} = useTheme();

    const navBackgroundClass = theme === 'dark' ? styles.navDark : styles.navLight;
    const selectedLinkClass = theme === 'dark' ? styles.navLinkActiveDark : styles.navLinkActiveLight;
    
    const dashboardImgSrc = theme === 'dark' ? dashboardLight : dashboardDark;
    const workoutsImgSrc = theme === 'dark' ? workoutsLight : workoutsDark;
    const analizeImgSrc = theme === 'dark' ? analizeLight : analizeDark;
    const caloriesImgSrc = theme === 'dark' ? caloriesLight : caloriesDark;


    return (
	<nav className={`${styles.nav} ${navBackgroundClass}`}>

	    <NavigationLink url='/me/dashboard' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `} >
		<Image src={dashboardImgSrc} alt="" className={styles.navImg}/>Pulpit
	    </NavigationLink>
	    <NavigationLink url='/me/workouts' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `} >
		<Image src={workoutsImgSrc} alt="" className={styles.navImg}/>Ćwiczenia
	    </NavigationLink>
	    <NavigationLink url='/me/analize' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `}>
		<Image src={analizeImgSrc} alt="" className={styles.navImg}/>Analizuj
	    </NavigationLink>
	    <NavigationLink url='/me/calories' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `}>
		<Image src={caloriesImgSrc} alt="" className={styles.navImg}/>Kalorie 
	    </NavigationLink>
	</nav>
    );
}


export const NavigationMobile: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    const navigation = useNavigate();

    const SettingsSrc = theme === 'light' ? settingsBlack : settingsWhite;
    const [openSettings, setOpenSettings] = useState(false);
    const settingsMenuActive = openSettings ? styles.buttonAppActive : '';
    const selectedLinkClass = theme === 'dark' ? styles.navLinkActiveDark : styles.navLinkActiveLight;
    
    const dashboardImgSrc = theme === 'dark' ? dashboardLight : dashboardDark;
    const workoutsImgSrc = theme === 'dark' ? workoutsLight : workoutsDark;
    const analizeImgSrc = theme === 'dark' ? analizeLight : analizeDark;
    const caloriesImgSrc = theme === 'dark' ? caloriesLight : caloriesDark;


    return(
	<>
	    <nav className={styles.navMobile}>
		<NavigationLink url='/me/dashboard' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `} >
		    <Image src={dashboardImgSrc} alt="" className={styles.navImg}/>
		</NavigationLink>
		<NavigationLink url='/me/workouts' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `} >
		    <Image src={workoutsImgSrc} alt="" className={styles.navImg}/>
		</NavigationLink>
		<NavigationLink url='/me/analize' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `}>
		    <Image src={analizeImgSrc} alt="" className={styles.navImg}/>
		</NavigationLink>
		<NavigationLink url='/me/calories' className={ ({ isActive }: { isActive: boolean }) => `${styles.navLink} ${isActive ? selectedLinkClass : ""} `}>
		    <Image src={caloriesImgSrc} alt="" className={styles.navImg}/> 
		</NavigationLink>

		<Button onClick={() => setOpenSettings(!openSettings)} className={` ${styles.buttonApp} ${settingsMenuActive}`}>
		    <Image src={SettingsSrc} alt="Settings" className={styles.settingsIcon} />
		</Button>
	    </nav>
	    {openSettings ? 
		(
		    <div className={styles.settingsMenu}>
			<ThemeButton onClick={toggleTheme} className={styles.buttonThemeApp}>
			    {theme === "dark" ? "Jasny" : "Ciemny"}
			</ThemeButton>
			<Button onClick={() => navigation('/login')}>Logout</Button>
		    </div>

		) : null}
	</>

    );
}
