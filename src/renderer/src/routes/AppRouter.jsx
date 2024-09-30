import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { INVENTORY_PATH } from "../constants/paths";

export const Dashboard = lazy(() => import("../sections/dashboard"));
export const Inventory = lazy(() => import("../sections/inventory"));

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
      ],
    },
  ]);

  return routes;
}
