import {
  LOGIN_PATH,
  DASHBOARD_PATH,
  PATH_NOT_FOUND,
  INVENTORY_PATH,
} from "../../constants/paths";

// TODO: add and implement SvgColor component (Icons)
const navConfig = [
  {
    title: "dashboard",
    path: DASHBOARD_PATH,
  },
  {
    title: "inventory",
    path: INVENTORY_PATH,
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
