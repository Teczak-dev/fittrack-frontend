import { useTheme } from '../../../hooks/useTheme';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Typography';
import styles from './Banner.module.css';
import bannerImg from '../../../assets/images/banner.png';

export const BannerHP: React.FC = () => {
    const {theme} = useTheme();

    const appNameTextColor:string = theme === 'light' ? styles.appNameTextColorLight : styles.appNameTextColorDark;
    const imageTheme:string = theme === 'light' ? styles.imageLight : styles.imageDark;
    const subtextColor:string = theme === 'light' ? styles.subtextColorLight : styles.subtextColorDark;
    return(
	<div className={styles.banner}>
	    <Image src={bannerImg} alt="Banner Image" className={`${styles.bannerImage} ${imageTheme}`} />
	    <div className={`${styles.bannerText} `}>  
		<Typography variant='body' className={styles.Text} ><i className={appNameTextColor}>Fit Tracker</i></Typography>
		<Typography variant='body' className={` ${styles.Text} ${subtextColor}` } >trenuj mądrzej, nie ciężej.</Typography>
	    </div>
	</div>
    );
}
