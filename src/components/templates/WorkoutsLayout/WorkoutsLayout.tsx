import { useTheme } from '../../../hooks/useTheme';
import styles from './WorkoutsLayout.module.css';

export const WorkoutsLayout: React.FC = () => {

    const {theme} = useTheme();

    const bgColor = theme === 'dark' ? '#0D442F' : '#4E1BB4';
    
    const testData: any = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12','test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12' ];

    return (
	<div className={styles.container}>
	    <h1>Ćwiczenia</h1>
	    <div className={styles.content}>
		{ testData.map( ( item: string ) => 
		(<div className={styles.item} style={{backgroundColor: bgColor}}>{item}</div>)
		)}
	    </div>
	</div>
    );
}
