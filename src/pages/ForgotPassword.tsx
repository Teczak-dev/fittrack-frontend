import { useState } from "react";
import { ForgotPasswordLayout } from "../components/templates/ForgotPasswordLayout/ForgotPasswordLayout";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/auth";

export const ForgotPassword: React.FC = () => {
    
    const [msg, setMsg] = useState<string>('');
    
    const navigate = useNavigate();
    
    const sendResetLink = async(email: string) => {
	try{
	    forgotPassword(email);
	    setMsg('Link do resetowania hasła został wysłany na Twój email.');
	    setTimeout(() => { navigate('/login'); }, 2000);
	}catch(err: any){
	    setMsg(err.message);
	}

    }
   
    return(
	<ForgotPasswordLayout sendResetLink={sendResetLink} msg={msg} />
    );
}
