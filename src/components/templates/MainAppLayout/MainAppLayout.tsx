import { Outlet } from "react-router-dom"
import { HeaderApp } from "../../organisms/Header/Header"
import { useTheme } from "../../../context/useTheme";

export const MainAppLayout: React.FC = () => {

    const {theme} = useTheme();

    return (
	<div style={{width: '100vw', minHeight: '100vh'}} className={`${theme}-mode`}>
	    <HeaderApp />
	    <main>
		<Outlet />
	    </main>
	</div>
    );
}
	
