import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Stack,
  alpha,
  Avatar,
  Drawer,
  Typography,
  ListItemButton,
} from "@mui/material";

import RouterLink from "../../routes/components";
import { usePathname } from "../../routes/hooks/use-pathname";
import { useResponsive } from "../../hooks/use-responsive";

import Scrollbar from "../../components/scrollbar";
import { NAV } from "./config-layout";
import navConfig from "./config-navigation";

export default function Nav({ user, openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        py: 2,
        px: 2.5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        alt={user?.firstName}
        sx={{
          border: (theme) => `solid 2px ${theme.palette.background.default}`,
        }}
      >
        {user?.firstName.charAt(0).toUpperCase()}
      </Avatar>

      <Box sx={{ ml: 2 }}>
        <Typography variant="h6" color="white">
          {user?.firstName} {user?.lastName}
        </Typography>

        <Typography variant="body2" sx={{ color: "yellow" }}>
          {user?.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* TODO: Add logo here */}

      {renderAccount}

      {renderMenu}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
            backgroundColor: (theme) => theme.palette.primary.darker,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              backgroundColor: (theme) => theme.palette.primary.darker,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
  user: PropTypes.object,
};

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        typography: "body2",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.8),
        },
        ...(active && {
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.8),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.8),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {/* TODO: add icons here */}
        {/* {item.icon} */}
      </Box>

      <Box component="span" color="white">
        {item.title}{" "}
      </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
