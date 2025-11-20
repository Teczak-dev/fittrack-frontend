import { useNavigate } from "react-router-dom";
import { LoginLayout } from "../components/templates/LoginLayout/LoginLayout";

export const Login: React.FC = () => {

    const navigate = useNavigate();

    const loginFunction = (email: string, password: string) => {
	console.log("Login function called with email:", email, "and password:", password);
	navigate('/me/dashboard');
    }

    return(
	<LoginLayout login={loginFunction} />
    );
}
