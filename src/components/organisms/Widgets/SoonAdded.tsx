import { Typography } from "../../atoms/Typography/Typography";
import mainStyles from "./Widgets.module.css";

export const SoonAdded : React.FC<{text:string}> = ({text}) => {
    return (
	<div className={mainStyles.container}>
	    <Typography variant="h2" className={mainStyles.header}>{text}</Typography>
	    <div style={{padding: '20px', textAlign: 'center', marginTop: '40px'}}>
		<Typography variant="body">Ta funkcjonalność wkrótce zostanie dodana!</Typography>
	    </div>
	</div>
    );
}
