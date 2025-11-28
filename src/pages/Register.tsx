import { useNavigate } from "react-router-dom";
import { RegisterLayout } from "../components/templates/RegisterLayout/RegisterLayout";
import { useState } from "react";
import { register } from "../api/auth";

export const Register: React.FC = () => {
    
    const [error, setError] = useState('');

    const navigate = useNavigate();
    

    const registerFunction = (email: string, password: string, username: string) => {
	try{
	    register(username, email, password);
	    setError('Uzytkownik zarejestrowany pomyślnie. Teraz możesz się zalogować.');
	    setTimeout(() => {
		setError('');
		navigate('/login');
	    }, 2000);
	}catch(err: any){
	    setError(err.message);
	}
    }

    return(
	<RegisterLayout register={registerFunction} error={error}/>
    );
}
