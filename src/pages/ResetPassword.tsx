import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../api/auth";
import { ResetPasswordLayout } from "../components/templates/ResetPasswordLayout/ResetPasswordLayout";

export const ResetPassword : React.FC = () => {
    
    const [error, setError] = useState('');
    const { token } = useParams<{ token: string }>();
    const navigate = useNavigate();
    
    useEffect(() => {
	if (!token) navigate('/home');
    }, [token]);
    
    const handleSubmit = (password:string) => {
	try{
	    resetPassword(password);
	    setError('Hasło zostało zresetowane pomyślnie. Za chwilę nastąpi przekierowanie do strony logowania.');
	    setTimeout(()=>{ navigate('/login'); }, 2000);
	}catch(err: any){
	    setError(err.message);
	}
    }

    return ( <ResetPasswordLayout handleSubmit={handleSubmit} msg={error}/> );
}
