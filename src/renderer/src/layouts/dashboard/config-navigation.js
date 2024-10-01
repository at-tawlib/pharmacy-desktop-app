import {
  LOGIN_PATH,
  DASHBOARD_PATH,
  PATH_NOT_FOUND,
  INVENTORY_PATH,
  ADD_MEDICINE_PATH,
  MEDICINE_PATH,
} from "../../constants/paths";

const navConfig = [
  {
    title: "dashboard",
    path: DASHBOARD_PATH,
    icon: "material-symbols:dashboard",
  },
  {
    title: "inventory",
    path: INVENTORY_PATH,
    icon: "material-symbols:inventory",
    children: [
      {
        title: "List Medicines",
        path: INVENTORY_PATH,
        icon: "ic:baseline-list-alt",
      },
      {
        title: "Add Medicine",
        path: ADD_MEDICINE_PATH,
        icon: "ic:round-add-box",
      },
      {
        title: "View Medicine",
        path: MEDICINE_PATH,
        icon: "ic:baseline-remove-red-eye",
      },
    ],
  },
  {
    title: "login",
    path: LOGIN_PATH,
  },
  {
    title: "Not found",
    path: PATH_NOT_FOUND,
  },
];

export default navConfig;
