import { TextWithBG } from '../../molecules/TextWithBG/TextWithBG';
import styles from './Discover.module.css';


export const Discover: React.FC = () => {
    return(
	<div className={styles.discover}>
	    <div className={styles.discoverSectionLeftTop}>
		<TextWithBG text='Sprawdzone sposoby w nowym wydaniu' className={styles.textWBG}/>
	    </div>
	    <div className={styles.discoverSectionRightTop}>
		<TextWithBG text='Wszystko co potrzebne w jednym miejscu' className={styles.textWBG}/>
	    </div>
	    <div className={styles.discoverSectionLeftBottom}>
		<TextWithBG text='Zaprojektowane z myślą o komputerach i telefonach' className={styles.textWBG}/>
	    </div>
	    <div className={styles.discoverSectionRightBottom}>
		<TextWithBG text='Nie przekładaj tego na jutro, zacznij już dziś' className={styles.textWBG} />
	    </div>
	</div>
    );
}
