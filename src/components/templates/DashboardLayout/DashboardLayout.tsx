import { useTheme } from '../../../hooks/useTheme';
import { Data } from '../../organisms/Widgets/Data';
import { LastWorkout } from '../../organisms/Widgets/LastWorkout';
import { Motto } from '../../organisms/Widgets/Motto';
import { SoonAdded } from '../../organisms/Widgets/SoonAdded';
import { Stats } from '../../organisms/Widgets/Stats';
import { Streak } from '../../organisms/Widgets/Streak';
import { TodaySummary } from '../../organisms/Widgets/TodaySummary';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
    className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ className }) => {
    
    const {theme} = useTheme();

    const gridItemBG = theme === 'dark' ? '#0D442F' : '#4E1BB4';


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
		<div className={styles.gridItem} style={{gridArea: 'today', backgroundColor: gridItemBG}}> <TodaySummary/> </div>
		<div className={styles.gridItem} style={{gridArea: 'last_workout', backgroundColor: gridItemBG}}><LastWorkout/> </div>
		<div className={styles.gridItem} style={{gridArea: 'streak', backgroundColor: gridItemBG}}><Streak /> </div>
		{/* Wiersz 2*/}
		<div className={styles.gridItem} style={{gridArea: 'data', backgroundColor: gridItemBG}}><Data/></div>
		<div className={styles.gridItem} style={{gridArea: 'motto', backgroundColor: gridItemBG}} ><Motto /></div>
		<div className={styles.gridItem} style={{gridArea: 'stats', backgroundColor: gridItemBG}}><Stats/></div>
		{/* Wiersz 3*/}
		<div className={styles.gridItem} style={{gridArea: 'limit_cal', backgroundColor: gridItemBG}}><SoonAdded text='Limit Kalorii' /></div>
		<div className={styles.gridItem} style={{gridArea: 'food', backgroundColor: gridItemBG}}><SoonAdded text='Jedzenie' /></div>
            </div>
        </div>
    );
}
