import { ForgotPasswordLayout } from "../components/templates/ForgotPasswordLayout/ForgotPasswordLayout";
import { useNavigate } from "react-router-dom";

export const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const sendResetLink = (email: string) => {
	console.log("Send reset link to email:", email);
	navigate('/login');
    }
   
    return(
	<ForgotPasswordLayout sendResetLink={sendResetLink} />
    );
}
