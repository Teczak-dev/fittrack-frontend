import { Typography } from "../../atoms/Typography/Typography";
import styles from './TextWithBG.module.css';

export const TextWithBG: React.FC<{text: string, className?:string}> = ({text, className}) => {
    return(
	<div className={`${styles.container} ${className}`}>
	    <Typography variant="body">{text}</Typography>
	</div>
    );
}
