import { useTheme } from "../context/ThemeContext";
import HomePageLayout from "../components/templates/HomePageLayout/HomePageLayout";
export const Home: React.FC = () => {
    const {theme} = useTheme();

    return (
	<div style={{width: '100vw', height: '100vh'}} className={`${theme}-mode`}>
	    <HomePageLayout />
    	</div>
    );
}

