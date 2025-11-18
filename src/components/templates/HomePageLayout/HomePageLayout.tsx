import { HeaderHome } from "../../organisms/Header/Header";
import { BannerHP as Banner } from "../../organisms/Banner/Banner";
import { Discover } from "../../organisms/Discover/Discover";
import { Pricing } from "../../organisms/Pricing/Pricing";
import { Footer } from "../../organisms/Footer/Footer";

export const HomePageLayout = () => {
    return (
	<>
	    <div style={{width: '100vw', minHeight: '100vh', flexDirection: 'column', display: 'flex'}}>
		<Banner />
		<HeaderHome />
		<Discover />
		<Pricing />
		<Footer />
	    </div>
	</>
    );
}
