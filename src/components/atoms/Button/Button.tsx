import styles from './Button.module.css';

export const Button: React.FC<{text:string, click:()=> void}> = ({text, click}) =>{
    return (
	<>
	    <button className={styles.button} onClick={click}>
		{text}
	    </button>
	</>
    );
}
