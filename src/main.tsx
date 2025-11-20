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
	errorElement: <div>Oops! An error occurred.</div>,
	children: [
	    {
		index: true,
		element: <div>Me Section</div>,
	    },
	    {
		path: '/me/dashboard',
		element: <Dashboard />
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
