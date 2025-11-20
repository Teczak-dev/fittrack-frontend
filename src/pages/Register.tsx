import { useNavigate } from "react-router-dom";
import { RegisterLayout } from "../components/templates/RegisterLayout/RegisterLayout";

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const registerFunction = (email: string, password: string, username: string) => {
	console.log(`Login function called with username: ${username}, email: ${email}, and password: ${password}`);
	navigate('/login');
    }

    return(
	<RegisterLayout register={registerFunction}/>
    );
}
