import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css';
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx';
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
	}
	]
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<ThemeProvider>
	    <RouterProvider router={router}/>
	</ThemeProvider>
  </StrictMode>,
)
