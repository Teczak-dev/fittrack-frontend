import { useTheme } from '../../../context/ThemeContext';
import { TextWithBG } from '../../molecules/TextWithBG/TextWithBG';
import { Image } from '../../atoms/Image/Image';
import styles from './Banner.module.css';
import bannerImg from '../../../assets/images/banner.png';
export const BannerHP: React.FC = () => {
    const {theme} = useTheme();
    const bannerTheme:string = theme === 'light' ? styles.bannerLight : styles.bannerDark;
    const imageTheme:string = theme === 'light' ? styles.imageLight : styles.imageDark;
    return(
	<div className={styles.banner}>
	    <Image src={bannerImg} alt="Banner Image" className={`${styles.bannerImage} ${imageTheme}`} />
	    <TextWithBG className={`${styles.bannerText} ${bannerTheme}`} text="Fit Tracker — trenuj mądrzej, nie ciężej." />
	</div>
    );
}
