import styles from './Discover.module.css';
import discover1 from '../../../assets/images/discover1.png';
import discover2 from '../../../assets/images/discover2.png';
import discover3 from '../../../assets/images/discover3.png';
import discover4 from '../../../assets/images/discover4.png';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Typography';

export const Discover: React.FC = () => {
    return(
	<div className={styles.discover}>
	    <div className={styles.discoverSectionLeftTop}>
		<Typography variant='body' className={styles.textWBG} >Sprawdzone sposoby w nowym wydaniu</Typography>
		<Image src={discover1} alt="Discover Image 1" className={styles.discoverImage}/>
	    </div>
	    <div className={styles.discoverSectionRightTop}>
		<Typography variant='body' className={styles.textWBG} >Wszystko co potrzebne w jednym miejscu</Typography>
		<Image src={discover2} alt="Discover Image 1" className={styles.discoverImage}/>
	    </div>
	    <div className={styles.discoverSectionLeftBottom}>
		<Typography variant='body' className={styles.textWBG}>Zaprojektowane z myślą o komputerach i telefonach</Typography>
		<Image src={discover3} alt="Discover Image 1" className={styles.discoverImage}/>
	    </div>
	    <div className={styles.discoverSectionRightBottom}>
		<Typography variant='body' className={styles.textWBG} >Nie przekładaj tego na jutro, zacznij już dziś</Typography>
		<Image src={discover4} alt="Discover Image 1" className={styles.discoverImage}/>
	    </div>
	</div>
    );
}
