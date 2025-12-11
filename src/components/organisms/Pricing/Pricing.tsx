import { Typography } from '../../atoms/Typography/Typography';
import { PricingBox } from '../../molecules/PricingBox/PricingBox';
import styles from './Pricing.module.css';

export const Pricing: React.FC<{onClick: () => void}> = ({ onClick }) => {
    return(
	<div className={styles.Pricing}>
	    <Typography variant="h2" className={styles.title}>
		Cennik
	    </Typography>
	    <PricingBox name='Pełna wersja' price='0' onClick={onClick}/>
	    <Typography variant="body" className={styles.note}>
		Aplikacja zaprojektowana z myślą o prywatności.<br/>
		Zero opłat = same korzyści.<br/>
		Pobierane są wyłącznie niezbędne dane, a w każdej chwili możesz zrezygnować oraz wyeksportować informacje o swoich treningach, aby dodać je do wersji offline aplikacji.<br/>
		Twoja aplikacja offline (w trakcie tworzenia) jest w pełni open-source.<br/>
	    </Typography>
	</div>
    );
}
