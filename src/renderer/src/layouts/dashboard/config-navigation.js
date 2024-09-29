import {
  LOGIN_PATH,
  USERS_PATHS,
  DASHBOARD_PATH,
  PATH_NOT_FOUND,
} from "../../constants/paths";

// TODO: add and implement SvgColor component (Icons)
const navConfig = [
  {
    title: "dashboard",
    path: DASHBOARD_PATH,
  },
  {
    title: "user",
    path: USERS_PATHS.HOME,
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
