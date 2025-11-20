import logoBlack from '../../../assets/images/logo_black.png';
import logoWhite from '../../../assets/images/logo_white.png';
import { Image } from "../../atoms/Image/Image";
import { useTheme } from "../../../context/useTheme";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from '../../organisms/Forms/Forms';
import { ThemeButton } from "../../atoms/Button/Button";
import styles from './ForgotPasswordLayout.module.css';

interface ForgotPasswordLayoutProps {
    sendResetLink: (email: string) => void;
}

export const ForgotPasswordLayout: React.FC<ForgotPasswordLayoutProps> = ({
    sendResetLink,
}) => {
    
    const { theme, toggleTheme } = useTheme();
    
    const containerStyle = theme === 'light' ? {backgroundColor: '#f1f1f1'} : {backgroundColor: '#121212'};
    const logoSelected = theme === 'light' ? logoBlack : logoWhite;
    const navigate = useNavigate();

    return(
        <div className={styles.container} style={containerStyle}>
            <Image src={logoSelected} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
            <ForgotPasswordForm resetPassword={sendResetLink} />
            <ThemeButton className={styles.buttonTheme} onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</ThemeButton>
        </div>
    );
}
