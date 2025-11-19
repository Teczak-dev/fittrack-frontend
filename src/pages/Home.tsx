import React from 'react';
import { HomePageLayout } from "../components/templates/HomePageLayout/HomePageLayout";
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const {theme} = useTheme();

    const navigate = useNavigate();

    const goToLogIn = () => {
	navigate('/login');
    }
    return (
	<div style={{width: '100vw', minHeight: '100vh'}} className={`${theme}-mode`}>
	    <HomePageLayout goToLogIn={goToLogIn}/>
	</div>
    );
};

