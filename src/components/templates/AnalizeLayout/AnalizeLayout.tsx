
import { useTheme } from '../../../hooks/useTheme';
import { Stats } from '../../organisms/Widgets/Stats';
import styles from './AnalizeLayout.module.css';

export const AnalizeLayout: React.FC = () => {

    const {theme} = useTheme();

    const bgColor = theme === 'dark' ? '#0D442F' : '#4E1BB4';

    return(
	<div className={styles.container}>
	    <h1 className={styles.header}>Analizuj</h1>

	    {/* grid layout */}
	    <div className={styles.content}>
		<div className={styles.gridItem} style={{gridArea: 'TypesWheel', backgroundColor: bgColor}}>
		    Koło typów treningów
		</div>
		<div className={styles.gridItem} style={{gridArea: 'TypesRadar', backgroundColor: bgColor}}>
		    Preferencje typów treningów
		</div>
		<div className={styles.gridItem} style={{gridArea: 'thisW', backgroundColor: bgColor}}>
		    <Stats />
		</div>
		<div className={styles.gridItem} style={{gridArea: 'thisM', backgroundColor: bgColor}}>
		    Ten miesiąc
		</div>

	    </div>
	</div>
    );
}
