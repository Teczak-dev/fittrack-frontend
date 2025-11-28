import { useTheme } from '../../../hooks/useTheme';
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
    className
}) => {
    const { theme } = useTheme();
    const textColorClass = theme === 'dark' ? styles.buttonTextDark : styles.buttonTextLight;
    return (
	    <button className={`${styles.button} ${styles[variant]} ${textColorClass} ${className}`} onClick={onClick} disabled={disabled} >
	        {children}
	    </button>
    );
};

export const ThemeButton: React.FC<ButtonProps> = ({ 
    children, 
    onClick,
    disabled = false,
    className
}) => {
    const { theme } = useTheme();

    const classNames = ` ${className} ${styles.themeButton}`;

    return (
	    <button 
	        className={`${classNames} ${theme === 'dark' ? styles.themeButtonDark : styles.themeButtonLight}`} 
	        onClick={onClick} disabled={disabled}>
	        {children}
	    </button>
    );
}
