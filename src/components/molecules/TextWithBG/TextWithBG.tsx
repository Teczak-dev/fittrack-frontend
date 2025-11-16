import { Label } from "../../atoms/Label/Label";
import { Div } from "../../atoms/Div/Div";

export const TextWithBG: React.FC<{text:string}> = ({text}) =>{
    return(
	<Div>
	    <Label text={text}/>
	</Div>
    );
}
