import React from 'react';
import { HomePageLayout } from "../components/templates/HomePageLayout/HomePageLayout";
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
    const {theme} = useTheme();

    return (
	<div style={{width: '100vw', minHeight: '100vh'}} className={`${theme}-mode`}>
	    <HomePageLayout />
	</div>
    );
};

