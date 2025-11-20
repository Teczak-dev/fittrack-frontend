import { useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/Button/Button";

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    return(
	<div>
	    <h1>Dashboard</h1>
	    <p>Welcome to your dashboard!</p>
	    <Button onClick={() => navigate('/login')}>Logout</Button>
	</div>
    );
}
