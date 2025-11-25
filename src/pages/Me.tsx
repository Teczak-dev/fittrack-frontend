import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Me: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
	navigate('/me/dashboard');
    }, [])

    return (
	<div>
	    <h1>Me Page</h1>
	    <p>To jest strona o tobie</p>
	    <Link to="/me/dashboard">Go to Dashboard</Link>

	</div>
    );
}
