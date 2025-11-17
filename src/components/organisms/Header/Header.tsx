import { Image } from '../../atoms/Image/Image';
import { Link, LocalLink } from '../../atoms/Link/Link';
import { ThemeButton } from '../../atoms/Button/Button';

import styles from './Header.module.css';
import { useTheme } from '../../../context/ThemeContext';

export const HeaderHome: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
	<header className={styles.header} style={styles}>
	    <div className={styles.div} style={styles}>
		<Image src="/logo.png" alt="Logo" />
		<div className={styles.navLinks} style={styles}>
		    <LocalLink text="Home" url="#" />
		    <LocalLink text="About" url="#" />
		    <LocalLink text="Contact" url="#" />
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
