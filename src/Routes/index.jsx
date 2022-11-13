import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../Components/Layout/DashboardLayout";

const NoPage = lazy(() => import("../Pages/NoPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<center><h3>Loading...</h3></center>}>
      <Routes>

        {/* When user comes to basaed route redirect to dashboard */}
        <Route index element={<Navigate to="/dashboard/dashboard" />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/dashboard" element={<h1>Dashboard Page</h1>} />
          <Route path="/dashboard/user-managment" element={<h1>User management page</h1>} />
          <Route path="/dashboard/plans" element={<h1>Plans page</h1>} />
          <Route path="/dashboard/profile" element={<h1>Profile page</h1>} />
        </Route>

        <Route
          path="*"
          element={
            <NoPage />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
