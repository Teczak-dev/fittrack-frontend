import { Image } from '../../atoms/Image/Image';
import { Link } from '../../atoms/Link/Link';
import { Button, ThemeButton } from '../../atoms/Button/Button';

import styles from './Header.module.css';
import { useTheme } from '../../../context/useTheme';

import Hamburger from 'hamburger-react';
import { useState } from 'react';

import logoBlack from '../../../assets/images/logo_black.png';
import logoWhite from '../../../assets/images/logo_white.png';
import settingsBlack from '../../../assets/images/settings_black.png';
import settingsWhite from '../../../assets/images/settings_white.png';

import { useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const HeaderHome: React.FC<{home:()=>void; discover:()=>void; price:()=>void}> = ({home, discover, price}) => {
    const { theme, toggleTheme } = useTheme();
    const lightStyle = theme === 'light' ? styles.headerLight : '';
    const buttonsColor = theme === 'light' ? styles.linksLight : styles.linksDark;
    const imageSrc = theme === 'light' ? logoBlack : logoWhite;
    const navigation = useNavigate();
    return (
		<header className={`${styles.header} ${lightStyle}`} style={styles}>
			<div className={styles.div} style={styles}>
			<Image src={imageSrc} alt="Logo" className={styles.logo} onClick={() => navigation('/')} />
			<div className={styles.navLinks} style={styles}>
				<Button onClick={home} className={`${styles.links} ${buttonsColor}`}>
				Fit tracker
				</Button>
				<Button onClick={discover} className={`${styles.links} ${buttonsColor}`}>
				Odkryj
				</Button>
				<Button onClick={price} className={`${styles.links} ${buttonsColor}`}>
				Cena
				</Button>
			</div>
			</div>
			<div className={`${styles.div} ${styles.rightDiv}`} style={styles}>
			<ThemeButton onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</ThemeButton>
			<Link text="Rejestracja" url="/register" className={`${styles.Register} ${theme === 'dark' ? styles.RegisterDark : styles.RegisterLight}`} style={styles} />
			<Link text="Login" url="/login" className={`${styles.Login} ${theme === 'dark' ? styles.LoginDark : styles.LoginLight}`} style={styles} />
			</div>
		</header>
    );
}
export const HeaderHomeMobile: React.FC<{home:()=>void; discover:()=>void; price:()=>void}> = ({home, discover, price}) => {
    const { theme, toggleTheme } = useTheme();
    const lightStyle = theme === 'light' ? styles.headerLightM : '';
    const buttonsColor = theme === 'light' ? styles.linksLight : styles.linksDark; 
    const imageSrc = theme === 'light' ? logoBlack : logoWhite;
    const navigation = useNavigate();

    const [isOpen, setOpen] = useState(false);
    
    return (
		<header className={`${styles.headerM} ${lightStyle}`} style={styles}>
			<div className={styles.navOverlay}>
			<Hamburger toggled={isOpen} toggle={setOpen} />
			<Image src={imageSrc} alt="Logo" className={styles.logo} onClick={() => navigation('/')}/>
			<Link text="Login" url="/login" className={`${styles.Login} ${theme === 'dark' ? styles.LoginDark : styles.LoginLight}`} style={styles} />
			</div>
			{isOpen ? (
			<div className={styles.burger} onClick={() => setOpen(false)}>
			<div className={styles.navLinksM} style={styles}>
				<Button onClick={home} className={`${styles.links} ${buttonsColor}`}>
				Fit tracker
				</Button>
				<Button onClick={discover} className={`${styles.links} ${buttonsColor}`}>
				Odkryj
				</Button>
				<Button onClick={price} className={`${styles.links} ${buttonsColor}`}>
				Cena
				</Button>
			</div>
			<div className={styles.buttonsBurgerM} >
				<ThemeButton onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</ThemeButton>
				<Link text="Rejestracja" url="/register" className={`${styles.Register} ${theme === 'dark' ? styles.RegisterDark : styles.RegisterLight}`} style={styles} />
			</div>
			</div>): null}
		</header>

    );
}


export const HeaderApp: React.FC = () => {

    const { theme, toggleTheme } = useTheme();
    
    const ImageSrc = theme === 'light' ? logoBlack : logoWhite;
    const lightStyle = theme === 'light' ? styles.headerAppLight : '';
    const SettingsSrc = theme === 'light' ? settingsBlack : settingsWhite;
    const [openSettings, setOpenSettings] = useState(false);
    const settingsMenuActive = openSettings ? styles.buttonAppActive : '';
    const navigation = useNavigate();



    return(
	<header className={` ${styles.headerApp} ${lightStyle}`}>
	    <Image src={ImageSrc} alt="Logo" className={styles.logoApp} onClick={() => navigation('/me')}/>
	    <Navigation />
	    <div>
		<span>Hi, user! 👋🏻</span>
		<Image src={logoBlack} alt="User Avatar" className={styles.avatarApp} />
		<Button onClick={() => setOpenSettings(!openSettings)} className={` ${styles.buttonApp} ${settingsMenuActive}`}>
		    <Image src={SettingsSrc} alt="Settings" className={styles.settingsIcon} />
		</Button>
	    </div>
	    {openSettings ? 
		(
		    <div className={styles.settingsMenu}>
			<ThemeButton onClick={toggleTheme} className={styles.buttonThemeApp}>
			    {theme === "dark" ? "Jasny" : "Ciemny"}
			</ThemeButton>
			<Button onClick={() => navigation('/login')}>Logout</Button>
		    </div>

		) : null}
	</header>
    );
}
