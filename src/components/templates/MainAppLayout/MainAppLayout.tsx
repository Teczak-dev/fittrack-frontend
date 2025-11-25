import { Outlet } from "react-router-dom"
import { HeaderApp, HeaderAppMobile } from "../../organisms/Header/Header"
import { useTheme } from "../../../context/useTheme";
import { BrowserView, MobileView } from "react-device-detect";
import { NavigationMobile} from "../../organisms/Navigation/Navigation";

export const MainAppLayout: React.FC = () => {
    
    const {theme} = useTheme();



    return (
	<div style={{width: '100vw', minHeight: '100vh'}} className={`${theme}-mode`}>
	    <BrowserView>    
		<HeaderApp />
		<main>
		    <Outlet />
		</main>
	    </BrowserView>
	    <MobileView>
		<HeaderAppMobile />
		<NavigationMobile />
		<main>
		    <Outlet />
		</main>
	    </MobileView>
		
	</div>
    );
}
	
