import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
    className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ className }) => {

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <div className={styles.header}>
                <h1>Dashboard</h1>
                <div>
                    <p style={{marginRight: '10px'}}>Edit</p>
                    <p>day, Month</p>
                </div>
            </div>
            
            <div className={styles.content}>
            </div>
        </div>
    );
}
