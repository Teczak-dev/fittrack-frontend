import { useTheme } from '../../../hooks/useTheme';
import { Typography } from '../../atoms/Typography/Typography';
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
const getCurrentDate = ():string => {
	const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
	return new Date().toLocaleDateString(undefined, options);
}
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ className }) => {
    
    const {theme} = useTheme();
    const currentDate = getCurrentDate();
    const gridItemBG = theme === 'dark' ? '#4E1BB4' : '#a9dc94';
    const headerTextColorClass = theme === 'dark' ? styles.headerDark : styles.headerLight;

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <div className={`${styles.header} ${headerTextColorClass}`}>
                <Typography variant='h2'>Pulpit</Typography>
                <div>
                    <Typography variant='body' className={styles.editBtn}>Edytuj (prace wciąż trwają)</Typography>
                    <Typography variant='body'>{currentDate}</Typography>
                </div>
            </div>
            
            <div className={styles.content}>
            <div className={styles.gridItem} style={{gridArea: 'today', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}> <TodaySummary/> </div>
            <div className={styles.gridItem} style={{gridArea: 'last_workout', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}><LastWorkout/> </div>
            <div className={styles.gridItem} style={{gridArea: 'streak', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}><Streak /> </div>
		{/* Wiersz 2*/}
        <div className={styles.gridItem} style={{gridArea: 'motto', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}} ><Motto /></div>
        <div className={styles.gridItem} style={{gridArea: 'stats', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}><Stats/></div>
		{/* Wiersz 3*/}
        <div className={styles.gridItem} style={{gridArea: 'limit_cal', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}><SoonAdded text='Limit Kalorii' /></div>
        <div className={styles.gridItem} style={{gridArea: 'food', backgroundColor: gridItemBG, color: theme === 'dark' ? '#f1f1f1' : '#000'}}><SoonAdded text='Jedzenie' /></div>
            </div>
        </div>
    );
}
