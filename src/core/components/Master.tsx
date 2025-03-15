import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Master = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Master;
