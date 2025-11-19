import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import { useTheme } from '../../../context/ThemeContext';
import styles from './PricingBox.module.css';

interface PricingBoxProps {
    className?: string;
    name: string;
    price: string;
    onClick: () => void;
}

export const PricingBox: React.FC<PricingBoxProps> = ({className, name, price, onClick}) => {
    const { theme } = useTheme();
    const lightStyle = theme === 'light' ? styles.PricingBoxLight : '';
    return(
	<div className={`${styles.PricingBox} ${className} ${lightStyle}`} style={styles}>
	    <Typography variant='h2' >{name}</Typography>
	    <Typography variant='body'>${price}/mth</Typography>
	    <Button onClick={onClick} className={styles.button}>Wybierz plan</Button>
	</div>
    );
}
