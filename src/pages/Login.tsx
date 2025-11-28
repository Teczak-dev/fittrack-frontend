import { useNavigate } from "react-router-dom";
import { LoginLayout } from "../components/templates/LoginLayout/LoginLayout";
import { login } from "../api/auth";
import { useState } from "react";

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const loginFunction = async(email: string, password: string) => {
	try{
	    await login(email, password);
	    navigate('/me');
	}catch(err: any){
	    setError(err.message);
	}
    }

    return(
	<LoginLayout login={loginFunction} error={error} />
    );
}
