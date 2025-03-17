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
  } from "@mui/material";
  import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
   
  const Header = () => {
    const menuItems = ["Profile", "My account", "Logout"];
  
    const renderMenu = (title:String) => (
      <PopupState variant="popover" popupId={`${title.toLowerCase()}-menu`}>
        {(popupState) => (
          <>
            <IconButton {...bindTrigger(popupState)}>
              <Box
                sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#484848", fontWeight: 600 }}
                >
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
            sx={{ display: "flex", justifyContent: "space-between", padding:'16px 24px 12px 24px' }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <img
                  src="src/assets/menu.svg"
                  alt="Menu"
                  style={{ width: "28px", height: "28px", paddingRight:'10px'}}
                />
              </IconButton>
              <img
                src="src/assets/logo.svg"
                alt="Company Logo"
                style={{ width: "112px", height: "45px" }}
              />
            </Box>
  
            <Box sx={{ display: "flex", alignItems: "center", flex: 1, mx: 5 }}>
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <img
                  src="src/assets/search-normal.svg"
                  alt="Search"
                  style={{ width: "24px", height: "24px" }}
                />
              </IconButton>
              <InputBase
                sx={{ ml: 0, flex: 1 }}
                placeholder=""
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
  
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ color: "#999999" }}>
                Financial Year
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#484848", fontWeight: 600 }}
              >
                2023-2024
              </Typography>
            </Box>
  
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 3 }}>
              {renderMenu("Quick Access")}
              {renderMenu("Activities")}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: "#E6E6E6", height: "24px", width: "1px" }}
              />
              <IconButton>
                <img
                  src="src/assets/notification.svg"
                  alt="Notification"
                  style={{ width: "24px", height: "24px" }}
                />
              </IconButton>
              <img
                src="src/assets/PROFILE.svg"
                alt="Profile"
                style={{ width: "40px", height: "40px" }}
              />
              <Box
                sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#484848", fontWeight: 600 }}
                >
                  Akshay Mendapara
                </Typography>
                <img
                  src="src/assets/arrow-down.png"
                  alt="Arrow_down"
                  style={{ width: "24px", height: "24px", paddingLeft:'5px'}}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
  
        <Box role="presentation" sx={{padding: "0px 24px 12px 24px"}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <img
                src="src/assets/arrow-left.svg"
                alt="Arrow_left"
                style={{ width: "24px", height: "24px", paddingLeft: "8px" }}
              />
              Entry Setup
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="src/assets/arrow-right.svg"
                alt="Arrow_right"
                style={{ width: "24px", height: "24px", paddingRight: "8px" }}
              />
              Customer
            </Typography>
          </Breadcrumbs>
        </Box>
      </>
    );
  };
  
  export default Header;
  