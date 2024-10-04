import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import {
  ADD_MEDICINE_PATH,
  INVENTORY_PATH,
  MEDICINE_GROUP_ITEM_PATH,
  MEDICINE_GROUP_PATH,
  MEDICINE_PATH,
  PAYMENT_REPORTS_PATH,
  REPORTS_PATH,
  SALES_REPORTS_PATH,
  USER_PATH,
  USERS_PATH,
} from "../constants/paths";
import MedicineGroupItems from "../sections/MedicineGroupItems";

export const Dashboard = lazy(() => import("../sections/dashboard"));
export const Inventory = lazy(() => import("../sections/inventory"));
export const Medicine = lazy(() => import("../sections/medicine"));
export const AddMedicine = lazy(() => import("../sections/add-medicine"));
export const MedicineGroup = lazy(() => import("../sections/MedicineGroups"));
export const MedicineGroupITem = lazy(() =>
  import("../sections/MedicineGroupItems")
);

export const Reports = lazy(() => import("../sections/reports/Reports"));
export const SalesReports = lazy(() =>
  import("../sections/reports/SalesReports")
);
export const PaymentReports = lazy(() =>
  import("../sections/reports/PaymentReports")
);

export const UsersList = lazy(() => import("../sections/UsersList"));
export const User = lazy(() => import("../sections/users/User"));

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
        { element: <MedicineGroup />, path: MEDICINE_GROUP_PATH },
        { element: <MedicineGroupItems />, path: MEDICINE_GROUP_ITEM_PATH },

        { element: <Reports />, path: REPORTS_PATH },
        { element: <SalesReports />, path: SALES_REPORTS_PATH },
        { element: <PaymentReports />, path: PAYMENT_REPORTS_PATH },

        { element: <UsersList />, path: USERS_PATH },
        { element: <User />, path: USER_PATH },
      ],
    },
  ]);

  return routes;
}
