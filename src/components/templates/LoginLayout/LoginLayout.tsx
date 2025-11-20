import { LoginForm } from "../../organisms/Forms/Forms";
import logoBlack from '../../../assets/images/logo_black.png';
import logoWhite from '../../../assets/images/logo_white.png';
import { Image } from "../../atoms/Image/Image";
import { useTheme } from "../../../context/useTheme";
import styles from './LoginLayout.module.css';
import { ThemeButton } from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

interface LoginLayoutProps {
    login: (email: string, pass: string) => void;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({login}) => {
    const { theme, toggleTheme } = useTheme();
    
    const containerStyle = theme === 'light' ? {backgroundColor: '#f1f1f1'} : {backgroundColor: '#121212'};
    const logoSelected = theme === 'light' ? logoBlack : logoWhite;
    const navigate = useNavigate();
    
    return(
        <div className={styles.container} style={containerStyle}>
            <Image src={logoSelected} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
            <LoginForm login={login} />
            <ThemeButton className={styles.buttonTheme} onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</ThemeButton>
        </div>
    );
}
