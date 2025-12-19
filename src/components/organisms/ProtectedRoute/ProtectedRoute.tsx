import { Navigate } from "react-router-dom";
import { MainAppLayout } from "../../templates/MainAppLayout/MainAppLayout";
import { UserProvider } from "../../../context/UserContext";
import { WorkoutsProvider } from "../../../context/WorkoutsContext";
import { WorkoutCategoryProvider } from "../../../context/WorkoutCategoryContext";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <UserProvider>
        <WorkoutsProvider>
          <WorkoutCategoryProvider>
            <MainAppLayout />
          </WorkoutCategoryProvider>
        </WorkoutsProvider>
      </UserProvider>
    </>
  );
};
