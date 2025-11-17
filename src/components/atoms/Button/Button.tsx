import { useTheme } from '../../../context/ThemeContext';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary',
    disabled = false,
    className = `${styles.button} ${styles[variant]} `
}) => {

    return (
	<button className={className} onClick={onClick} disabled={disabled} >
	{children}
	</button>
    );
};

export const ThemeButton: React.FC<ButtonProps> = ({ 
    children, 
    onClick,
    disabled = false,
    className = styles.themeButton
}) => {
    const { theme } = useTheme();
    return (
	<button 
	    className={`${className} ${theme === 'dark' ? styles.themeButtonDark : styles.themeButtonLight}`} 
	    onClick={onClick} disabled={disabled}>
	    {children}
	</button>
    );
}
