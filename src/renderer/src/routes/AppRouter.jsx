import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";

export const IndexPage = lazy(() => import("../pages/IndexPage"));

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
      children: [{ element: <IndexPage />, index: true }],
    },
  ]);

  return routes;
}
