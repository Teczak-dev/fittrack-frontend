import { useNavigate } from "react-router-dom";
import { Typography } from "../components/atoms/Typography/Typography"

export const WrongAdress = () => {
    
    const navigate = useNavigate();

    return (
	<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",width: '100svw' , height: "100svh", textAlign: "center", gap: "16px", backgroundColor: "#222", color: "#fff" }}>
	    <Typography variant="h1"> Wygląda na to, że trafiłeś na złą stronę </Typography>
	    <Typography variant="body"> Sprawdź czy adres jest poprawny lub wróć na stronę główną. </Typography>
	    <button 
		style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "#fff" }} 
		onClick={() => navigate("/")}
	    >
		Strona główna
	    </button>
	</div>
    );
}
