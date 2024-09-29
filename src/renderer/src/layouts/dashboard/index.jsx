import { useState } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import Nav from "./Nav";
import Main from "./Main";
import Header from "./Header";
import { mockUser } from "../../mock/user";

const user = mockUser;

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header user={mockUser} onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav
          user={mockUser}
          openNav={openNav}
          onCloseNav={() => setOpenNav(false)}
        />
        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
