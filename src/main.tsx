import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css';
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Login } from './pages/Login.tsx';
import { Register } from './pages/Register.tsx';
import { ForgotPassword } from './pages/ForgotPassword.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { MainAppLayout } from './components/templates/MainAppLayout/MainAppLayout.tsx';
import { Me } from './pages/Me.tsx';
import { Workouts } from './pages/Workouts.tsx';
import { Analize } from './pages/Analize.tsx';
import { Calories } from './pages/Calories.tsx';

const router = createBrowserRouter([
    {
	path: "/",
	errorElement: <div>Oops! An error occurred.</div>,
	children: [
	{
	    index: true,
	    element: <App />,
	},
	{
	    path: '/home',
	    element: <Home />
	},
	{
	    path: "/login",
	    element: <Login />
	},
	{
	    path: '/register',
	    element: <Register />
	},
	{
	    path: '/forgot-password',
	    element: <ForgotPassword />
	}
	    
	]
    },
    {
	path: "/me",
	element: <MainAppLayout />,
	errorElement: <div>Oops! An error occurred.</div>,
	children: [
	    {
		index: true,
		element: <Me />,
	    },
	    {
		path: '/me/dashboard',
		element: <Dashboard />
	    },
	    {
		path: '/me/workouts',
		element: <Workouts />
	    },
	    { 
		path: '/me/analize',
		element: <Analize />
	    },
	    { 
		path: '/me/calories',
		element: <Calories />
	    }
	]
    }
    ], {basename: '/app/fittrack/'}
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<ThemeProvider>
	    <RouterProvider router={router}/>
	</ThemeProvider>
  </StrictMode>,
)
