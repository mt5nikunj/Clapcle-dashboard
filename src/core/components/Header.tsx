import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Divider,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useState } from "react";

const Header = () => {
  const menuItems = ["Profile", "My account", "Logout"];

  const [hoveredRow, setHoveredRow] = useState("");

  const renderMenu = (title: String) => (
    <PopupState variant="popover" popupId={`${title.toLowerCase()}-menu`}>
      {(popupState) => (
        <>
          <IconButton {...bindTrigger(popupState)}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Typography variant="body1" sx={{ color: "#484848" }}>
                {title}
              </Typography>
              <img
                src="src/assets/arrow-down.png"
                alt="Arrow_down"
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={popupState.close}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 24px 12px 24px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px",height:'45px' }}>
            <IconButton>
              <img
                src="src/assets/menu.svg"
                alt="Menu"
                style={{ width: "28px", height: "28px", }}
              />
            </IconButton>
            <img
              src="src/assets/logo.svg"
              alt="Company Logo"
              style={{ width: "112px", height: "45px" }}
            />
          </Box>
          {hoveredRow !== "tap" && (
            <Box
              sx={{
                alignItems: "start",
                mx: 5,
                borderRadius: "4px",
                transition: "0.3s",

                width: "280px",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(11, 11, 11, 0.1)",
                  transform: "scale(1.02)",
                },
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <img
                  src="src/assets/search-normal.svg"
                  alt="Search"
                  style={{ width: "24px", height: "24px" }}
                />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  mt: 0.9,
                  flex: 1,
                }}
                onClick={() => setHoveredRow("tap")}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          )}
          {hoveredRow === "tap" && (
            <Box
              sx={{
                alignItems: "start",
                mx: 5,
                borderRadius: "4px",
                transition: "0.3s",
                width: "280px",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <img
                  src="src/assets/search-normal.svg"
                  alt="Search"
                  style={{ width: "24px", height: "24px" }}
                />
              </IconButton>

              <TextField
                variant="standard"
                color="secondary"
                sx={{
                  ml: 1,
                  mt: 0.9,
                  flex: 1,
                }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <img
                  src="src/assets/close-circle.svg"
                  alt="Search"
                  onClick={() => setHoveredRow("")}
                  style={{ width: "20px", height: "20px" }}
                />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ color: "#999999" }}>
              Financial Year
            </Typography>
            <Typography variant="body2" sx={{ color: "#484848" }}>
              2023-2024
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2,  }}>
            {renderMenu("Quick Access")}
            {renderMenu("Activities")}
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Box
                sx={{
                  height: "24px",
                  width: "1px",
                  backgroundColor: "#E6E6E6",
                  borderRadius: "4px",
                }}
              ></Box>
            </Box>
            {/* <Divider
              orientation="vertical"
              flexItem
              sx={{ color: "#E6E6E6", height: "24px", width: "1px" }}
            /> */}
            <Box sx={{ position: "relative" }}>
              <Typography
                variant="body2"
                sx={{
                  height: "8px",
                  width: "8px",
                  backgroundColor: "#DE7F53",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "7px",
                  right: "10px",
                }}
              ></Typography>
              <IconButton>
                <img
                  src="src/assets/notification.svg"
                  alt="Notification"
                  style={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            </Box>
            <img
              src="src/assets/PROFILE.svg"
              alt="Profile"
              style={{ width: "40px", height: "40px" }}
            />
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Typography variant="body1" sx={{ color: "#484848" }}>
                Akshay Mendapara
              </Typography>
              <img
                src="src/assets/arrow-down.png"
                alt="Arrow_down"
                style={{ width: "24px", height: "24px", paddingLeft: "5px" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box role="presentation" sx={{ padding: "0px 24px 12px 24px" }}>
        <Breadcrumbs aria-label="breadcrumb" separator="">
          <Link
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#999999",
              gap:'4px'
            }}
            color="inherit"
          >
            <Box
              sx={{
                display: "flex",
                paddingRight: "8px",
                alignItems: "center",
              }}
            >
              <img
                src="src/assets/arrow-left.svg"
                alt="Arrow_left"
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
            Entry Setup
          </Link>
          <Typography
            sx={{
              color: "#484848",
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <img
              src="src/assets/arrow-right.svg"
              alt="Arrow_right"
              style={{ width: "24px", height: "24px" }}
            />
            Customer
          </Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default Header;
