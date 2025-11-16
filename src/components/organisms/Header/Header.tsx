import { Image } from '../../atoms/Image/Image';
import { Link, LocalLink } from '../../atoms/Link/Link';
import { Div } from '../../atoms/Div/Div';

import styles from './Header.module.css';
import { useTheme } from '../../../context/ThemeContext';

export const HeaderHome: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
	<header className={styles.header} style={styles}>
	    <Div className={styles.div} style={styles}>
		<Image imgPath="/logo.png" altText="Logo" />
		<Div className={styles.navLinks} style={styles}>
		    <LocalLink text="Home" url="#" />
		    <LocalLink text="About" url="#" />
		    <LocalLink text="Contact" url="#" />
		</Div>
	    </Div>
	    <Div className={`${styles.div} ${styles.rightDiv}`} style={styles}>
		<button onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</button>
		<Link text="Rejestracja" url="/signup" className={`${styles.Register} ${theme === 'dark' ? styles.RegisterDark : styles.RegisterLight}`} style={styles} />
		<Link text="Login" url="/login" className={`${styles.Login} ${theme === 'dark' ? styles.LoginDark : styles.LoginLight}`} style={styles} />
	    </Div>
	</header>
    );
}
