import { useNavigate } from "react-router-dom";
import { ThemeButton } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { ResetPasswordForm } from "../../organisms/Forms/Forms";
import { useTheme } from "../../../hooks/useTheme";
import logoBlack from '../../../assets/images/logo_black.png';
import logoWhite from '../../../assets/images/logo_white.png';
import styles from './ResetPasswordLayout.module.css';

export const ResetPasswordLayout: React.FC<{handleSubmit: (newPassword:string) => void; msg:string;}> = ({handleSubmit, msg}) => {

    const { theme, toggleTheme } = useTheme();
    
    const containerStyle = theme === 'light' ? {backgroundColor: '#f1f1f1'} : {backgroundColor: '#232425'};
    const logoSelected = theme === 'light' ? logoBlack : logoWhite;
    const navigate = useNavigate();

    return(
	<div className={styles.container} style={containerStyle}>
            <Image src={logoSelected} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
       
	    <ResetPasswordForm handleReset={handleSubmit} msg={msg} />
            <ThemeButton className={styles.buttonTheme} onClick={toggleTheme}>{theme === "dark" ? "Jasny" : "Ciemny"}</ThemeButton>
	</div>
    );
}

