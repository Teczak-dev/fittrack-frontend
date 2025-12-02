import { Outlet } from "react-router-dom"
import { HeaderApp, HeaderAppMobile } from "../../organisms/Header/Header"
import { useTheme } from "../../../hooks/useTheme";
import { BrowserView, MobileView } from "react-device-detect";
import { NavigationMobile} from "../../organisms/Navigation/Navigation";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

const DesktopBigLayout: React.FC = () => {
    return(
	<>
	    <HeaderApp />
	    <main>
		<Outlet />
	    </main>
	</>
    );
}

const DesktopSmallLayout: React.FC = () => {
    return(
	<>
	    <HeaderAppMobile />
	    <NavigationMobile />
	    <main>
		<Outlet />
	    </main>
	</>
    );
}
export const MainAppLayout: React.FC = () => {
    
    const {theme} = useTheme();
    const {width} = useScreenWidth();    
    
    return (
	<div style={{width: '100svw', minHeight: '100svh'}} className={`${theme}-mode`}>
	    <BrowserView>    
		{width > 850?
		    ( <DesktopBigLayout/>) : ( <DesktopSmallLayout/>)
		}
	    </BrowserView>
	    <MobileView>
		<HeaderAppMobile />
		<main>
		    <Outlet />
		</main>
		<NavigationMobile />
	    </MobileView>
		
	</div>
    );
}


