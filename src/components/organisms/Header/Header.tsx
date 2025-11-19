import { Image } from '../../atoms/Image/Image';
import { Link } from '../../atoms/Link/Link';
import { Button, ThemeButton } from '../../atoms/Button/Button';

import styles from './Header.module.css';
import { useTheme } from '../../../context/ThemeContext';

export const HeaderHome: React.FC<{home:()=>void; discover:()=>void; price:()=>void}> = ({home, discover, price}) => {
    const { theme, toggleTheme } = useTheme();
    const lightStyle = theme === 'light' ? styles.headerLight : '';
    const buttonsColor = theme === 'light' ? styles.linksLight : styles.linksDark;
    return (
	<header className={`${styles.header} ${lightStyle}`} style={styles}>
	    <div className={styles.div} style={styles}>
		<Image src="/logo.png" alt="Logo" className={styles.logo}/>
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
		<Link text="Rejestracja" url="/signup" className={`${styles.Register} ${theme === 'dark' ? styles.RegisterDark : styles.RegisterLight}`} style={styles} />
		<Link text="Login" url="/login" className={`${styles.Login} ${theme === 'dark' ? styles.LoginDark : styles.LoginLight}`} style={styles} />
	    </div>
	</header>
    );
}
