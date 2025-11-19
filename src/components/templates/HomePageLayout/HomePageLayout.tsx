import { HeaderHome, HeaderHomeMobile } from "../../organisms/Header/Header";
import { BannerHP as Banner } from "../../organisms/Banner/Banner";
import { Discover } from "../../organisms/Discover/Discover";
import { Pricing } from "../../organisms/Pricing/Pricing";
import { Footer } from "../../organisms/Footer/Footer";
import type React from "react";
import { useRef } from "react";
import {BrowserView, MobileView} from 'react-device-detect';

export const HomePageLayout: React.FC<{goToLogIn: () => void}> = ({goToLogIn}) => {

    const bannerSectionRef = useRef<HTMLDivElement>(null);
    const discoverSectionRef = useRef<HTMLDivElement>(null);
    const pricingSectionRef = useRef<HTMLDivElement>(null);

    const scrollToBanner = () => {
	bannerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToDiscover = () => {
	discoverSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToPricing = () => {
    	pricingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
	<>
	    <div style={{width: '100vw', minHeight: '100vh', flexDirection: 'column', display: 'flex'}}>
		<div ref={bannerSectionRef}>
		    <Banner />
		</div>
		<BrowserView>
		    <HeaderHome home={scrollToBanner} discover={scrollToDiscover} price={scrollToPricing}/>
		</BrowserView>
		<MobileView>
		    <HeaderHomeMobile home={scrollToBanner} discover={scrollToDiscover} price={scrollToPricing}/>
		</MobileView>
		<div ref={discoverSectionRef}>
		    <Discover />
		</div>
		<div ref={pricingSectionRef}>
		    <Pricing onClick={goToLogIn} />
		</div>
		<Footer />
	    </div>
	</>
    );
}
