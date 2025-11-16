import styles from './Label.module.css';

export const Label: React.FC<{text:string}> = ({text}) =>{
    return(
	<span className={styles.label} style={styles}>{text}</span>
    );
}
