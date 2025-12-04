import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css';
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ScreenWidthProvider } from './context/ScreenWidthContext.tsx';
import { ProtectedRoute } from './components/organisms/ProtectedRoute/ProtectedRoute.tsx';
import { UserProvider } from './context/UserContext.tsx';
import { WorkoutsProvider } from './context/WorkoutsContext.tsx';
import { WorkoutCategoryProvider } from './context/WorkoutCategoryContext.tsx';
import { Login } from './pages/Login.tsx';
import { Register } from './pages/Register.tsx';
import { ForgotPassword } from './pages/ForgotPassword.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { MainAppLayout } from './components/templates/MainAppLayout/MainAppLayout.tsx';
import { Me } from './pages/Me.tsx';
import { Workouts } from './pages/Workouts.tsx';
import { Analize } from './pages/Analize.tsx';
import { Calories } from './pages/Calories.tsx';
import VerifyAccount from './pages/VerifyAccont.tsx';
import { ResetPassword } from './pages/ResetPassword.tsx';
import { Account } from './pages/Account.tsx';
import { WrongAdress } from './pages/WrongAdress.tsx';

const router = createBrowserRouter([
    {
	path: "/",
	errorElement: <WrongAdress />,
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
	},
	{
	    path: '/verify/:token',
	    element: <VerifyAccount />
	},
	{
	    path: '/reset-password/:token',
	    element: <ResetPassword />
	}
	    
	]
    },
    {
	path: "/me",
	errorElement: <WrongAdress />,
	element: (
		<ProtectedRoute>
		    <UserProvider> 
			<WorkoutsProvider>
			    <WorkoutCategoryProvider>
				<MainAppLayout />
			    </WorkoutCategoryProvider>
			</WorkoutsProvider>
		    </UserProvider>
		</ProtectedRoute>
		) ,
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
	    },
	    {
		path: '/me/account',
		element: <Account />
	    }
	]
    }
    ], {basename: '/app/fittrack/'}
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<ThemeProvider>
	    <ScreenWidthProvider>
		<RouterProvider router={router}/>
	    </ScreenWidthProvider>
	</ThemeProvider>
  </StrictMode>,
)
