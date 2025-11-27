import { useTheme } from '../../../context/useTheme';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
    className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ className }) => {
    
    const {theme} = useTheme();

    const gridItemBG = theme === 'dark' ? '#213043' : '#4E1BB4';


    return (
        <div className={`${styles.container} ${className || ''}`}>
            <div className={styles.header}>
                <h1>Pulpit</h1>
                <div>
                    <p style={{marginRight: '10px'}}>Edit</p>
                    <p>day, Month</p>
                </div>
            </div>
            
            <div className={styles.content}>
		<div className={styles.gridItem} style={{gridArea: 'today', backgroundColor: gridItemBG}}>Dzisiaj</div>
		<div className={styles.gridItem} style={{gridArea: 'motto', backgroundColor: gridItemBG}} >Motto</div>
		<div className={styles.gridItem} style={{gridArea: 'streak', backgroundColor: gridItemBG}}>Streak</div>
		{/* Wiersz 2*/}
		<div className={styles.gridItem} style={{gridArea: 'data', backgroundColor: gridItemBG}}>Dane</div>
		<div className={styles.gridItem} style={{gridArea: 'last_workout', backgroundColor: gridItemBG}}>Ostatnie ćwiczenie</div>
		<div className={styles.gridItem} style={{gridArea: 'stats', backgroundColor: gridItemBG}}>Statystyki</div>
		{/* Wiersz 3*/}
		<div className={styles.gridItem} style={{gridArea: 'limit_cal', backgroundColor: gridItemBG}}>Limit kalorii</div>
		<div className={styles.gridItem} style={{gridArea: 'food', backgroundColor: gridItemBG}}>Jedzenie</div>
            </div>
        </div>
    );
}
