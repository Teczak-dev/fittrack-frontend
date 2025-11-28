
import { useTheme } from '../../../hooks/useTheme';
import styles from './AnalizeLayout.module.css';

export const AnalizeLayout: React.FC = () => {

    const {theme} = useTheme();

    const bgColor = theme === 'dark' ? '#213043' : '#4E1BB4';

    return(
	<div className={styles.container}>
	    <h1 className={styles.header}>Analizuj</h1>

	    {/* grid layout */}
	    <div className={styles.content}>
		{/* lewa strona */}
		<div className={styles.gridItem} style={{gridArea: 'today' , backgroundColor: bgColor}}>
		    Dzisiaj
		</div>
		<div className={styles.gridItem} style={{gridArea: 'thisW', backgroundColor: bgColor}}>
		    Ten tydzień
		</div>
		<div className={styles.gridItem} style={{gridArea: 'thisM', backgroundColor: bgColor}}>
		    Ten miesiąc
		</div>

		{/* prawa strona*/}
		<div className={styles.gridItem} style={{gridArea: 'year', backgroundColor: bgColor}}>
		    Rok 2025
		</div>
		<div className={styles.gridItem} style={{gridArea: 'lastW', backgroundColor: bgColor}}>
		    Ostatni tydzień
		</div>
		<div className={styles.gridItem} style={{gridArea: 'lastM', backgroundColor: bgColor}}>
		    Ostatni miesiąc
		</div>
	    </div>
	</div>
    );
}
