import PropTypes from "prop-types";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  useTheme,
  IconButton,
} from "@mui/material";

import Iconify from "../../components/iconify";
import { bgBlur } from "../../theme/css";
import { NAV, HEADER } from "./config-layout";
import { AccountPopover, NotificationsPopover } from "./common";
import { useResponsive } from "../../hooks/use-responsive";

export default function Header({ user, onOpenNav }) {
  const theme = useTheme();
  const lgUp = useResponsive("up", "lg");

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton>
            <Iconify icon="eva:search-fill" />
          </IconButton>
          <NotificationsPopover />
          <AccountPopover user={user} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
  user: PropTypes.object,
};
