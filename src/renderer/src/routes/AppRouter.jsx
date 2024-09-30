import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { ADD_MEDICINE_PATH, INVENTORY_PATH, MEDICINE_PATH } from "../constants/paths";

export const Dashboard = lazy(() => import("../sections/dashboard"));
export const Inventory = lazy(() => import("../sections/inventory"));
export const Medicine = lazy(() => import("../sections/medicine"));
export const AddMedicine = lazy(() => import("../sections/add-medicine"));

/**
 * Defines routing configuration and components using React Router for the application.
 * This component sets up routes with lazy loading and a dashboard layout.
 * @returns {JSX.Element} The JSX element representing the configured routes.
 */
export default function AppRouter() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { element: <Inventory />, path: INVENTORY_PATH },
        { element: <Medicine />, path: MEDICINE_PATH },
        { element: <AddMedicine />, path: ADD_MEDICINE_PATH },
      ],
    },
  ]);

  return routes;
}
