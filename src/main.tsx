import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./global.css";
import App from "./App.tsx";
import { LoadingPage } from "./pages/LoadingPage.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ScreenWidthProvider } from "./context/ScreenWidthContext.tsx";
import { ProtectedRoute } from "./components/organisms/ProtectedRoute/ProtectedRoute.tsx";
import { WrongAdress } from "./pages/WrongAdress.tsx";
const Home = lazy(() =>
  import("./pages/Home.tsx").then((module) => ({ default: module.Home })),
);
const Login = lazy(() =>
  import("./pages/Login.tsx").then((module) => ({ default: module.Login })),
);
const Register = lazy(() =>
  import("./pages/Register.tsx").then((module) => ({
    default: module.Register,
  })),
);
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy.tsx").then((module) => ({
    default: module.default,
  })),
);
const ForgotPassword = lazy(() =>
  import("./pages/ForgotPassword.tsx").then((module) => ({
    default: module.ForgotPassword,
  })),
);
const Dashboard = lazy(() =>
  import("./pages/Dashboard.tsx").then((module) => ({
    default: module.Dashboard,
  })),
);
const Me = lazy(() =>
  import("./pages/Me.tsx").then((module) => ({ default: module.Me })),
);
const Workouts = lazy(() =>
  import("./pages/Workouts.tsx").then((module) => ({
    default: module.Workouts,
  })),
);
const Analize = lazy(() =>
  import("./pages/Analize.tsx").then((module) => ({ default: module.Analize })),
);
const Calories = lazy(() =>
  import("./pages/Calories.tsx").then((module) => ({
    default: module.Calories,
  })),
);
const VerifyAccount = lazy(() =>
  import("./pages/VerifyAccont.tsx").then((module) => ({
    default: module.VerifyAccount,
  })),
);
const ResetPassword = lazy(() =>
  import("./pages/ResetPassword.tsx").then((module) => ({
    default: module.ResetPassword,
  })),
);
const Account = lazy(() =>
  import("./pages/Account.tsx").then((module) => ({ default: module.Account })),
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <WrongAdress />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <App />{" "}
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <Login />{" "}
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <Register />{" "}
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <ForgotPassword />{" "}
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/verify/:token",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <VerifyAccount />{" "}
          </Suspense>
        ),
      },
      {
        path: "/reset-password/:token",
        element: (
          <Suspense fallback={<LoadingPage />}>
            {" "}
            <ResetPassword />{" "}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/me",
    errorElement: <WrongAdress />,
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <ProtectedRoute />{" "}
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Me />
          </Suspense>
        ),
      },
      {
        path: "/me/dashboard",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/me/workouts",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Workouts />
          </Suspense>
        ),
      },
      {
        path: "/me/analize",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Analize />
          </Suspense>
        ),
      },
      {
        path: "/me/calories",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Calories />
          </Suspense>
        ),
      },
      {
        path: "/me/account",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Account />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ScreenWidthProvider>
        <RouterProvider router={router} />
      </ScreenWidthProvider>
    </ThemeProvider>
  </StrictMode>,
);
