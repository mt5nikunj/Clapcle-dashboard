import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  TableBody,
  Typography,
  Tab,
  AppBar,
  Tabs,
} from "@mui/material";
import { CustomerData } from "../utilities/model/datatable.model";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const DataTable = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [hoveredRow, setHoveredRow] = useState("");

  const customerData: CustomerData[] = [
    {
      id: "#C101",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C102",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C103",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C104",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C105",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C106",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C107",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C108",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },
    {
      id: "#C109",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },

    {
      id: "#C110",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },

    {
      id: "#C111",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },

    {
      id: "#C112",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },

    {
      id: "#C113",
      customerName: "ABC Tech Pvt Ltd",
      nickName: "ABC Tech",
      gstNo: "GST232323R434",
      location: "Surat, Gujarat",
      emailId: "hello@abctech.in",
      contactNo: "+91 9766482016",
      balance: "₹ 50,000.00 Cr",
      status: "Completed",
      dateTime: "12 Feb 2025 11:00 AM",
    },

    // Add more data as needed
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        border: "1px",
        borderColor: "#FFFFFF",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "24px",
          backgroundColor: "#FFFFFF",
          paddingRight: "24px",
          border: "1px",
          borderColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            color: "#FFFFFF99",
            height: "56px",
            paddingTop: "16px",
            paddingBottom: "9px",
          }}
        >
          <AppBar
            position="static"
            elevation={0.0}
            sx={{
              backgroundColor: "#FFFFFF99",
              color: "black",
              borderRadius: "8px",
              borderColor: "#FFFFFF",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              TabIndicatorProps={{ style: { display: "none" } }} // Hides indicator
            >
              {["Top Customer", "Top Negative Balance", "Recently Added"].map(
                (label, index) => (
                  <Tab
                    key={index}
                    label={label}
                    sx={{
                      bgcolor: value === index ? "#7859ED" : "transparent", // Selected tab background color
                      color: value === index ? "#FFFFFF" : "#7859ED", // Selected tab text color
                      borderRadius: "4px",
                      transition: "0.3s",
                    }}
                  />
                )
              )}
            </Tabs>
          </AppBar>
        </Box>

        <Typography
          variant="body2"
          my={2}
          style={{
            fontSize: "16px",
          
            color: "#7859ED",
            letterSpacing: "0%",
          }}
        >
          View All
        </Typography>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer
          sx={{ borderRadius: "8px", width: "100%", overflowX: "hidden" }}
        >
          <Table aria-label="customer table" sx={{ width: "100%" }}>
            <TableHead sx={{ backgroundColor: "#BDE1F84D" }}>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell>ID</TableCell>
                <TableCell width={"170px"}>Customer/Vendor Name</TableCell>
                <TableCell width={"140px"}>Nick Name</TableCell>
                <TableCell>GST No.</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Email ID</TableCell>
                <TableCell width={"170px"}>Contact No.</TableCell>
                <TableCell width={"150px"}>Balance</TableCell>
                <TableCell>Status</TableCell>
                <TableCell width={"200px"}>
                  Date & Time
                  <IconButton size="small">
                    <img
                      src="src/assets/sort.svg"
                      alt="Arrow_right"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerData.map((row) => (
                <TableRow
                  key={row.id}
                  onMouseEnter={() => setHoveredRow(row.id)}
                  onMouseLeave={() => setHoveredRow("")}
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#484848",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "white",
                      boxShadow: "0px 4px 10px rgba(11, 11, 11, 0.1)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="src/assets/star-light.svg"
                        alt="star-light"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.customerName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.nickName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.gstNo}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.location}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.emailId}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.contactNo}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.balance}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: "#E2F8E8",
                        color: "#2D643D",
                        px: 1,
                        py: 0.5,
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      <Typography variant="body2" sx={{ marginRight: "0.5px" }}>
                        {row.status}
                      </Typography>
                      <IconButton size="small">
                        <img
                          src="src/assets/info-circle.svg"
                          alt="Info"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.dateTime}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {hoveredRow === row.id && (
                      <Box display="flex" gap={1} alignItems="center">
                        <IconButton size="small">
                          <img
                            src="src/assets/refresh-circle.svg"
                            alt="refresh-circle"
                            width={"24px"}
                            height={"24px"}
                          />
                        </IconButton>
                        <IconButton size="small">
                          <img
                            src="src/assets/menu-table.svg"
                            alt="menu-table"
                            width={"15px"}
                            height={"15px"}
                          />
                        </IconButton>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Top Negative Balance
      </TabPanel>
      <TabPanel value={value} index={2}>
        Recently Added
      </TabPanel>
    </Box>
  );
};

export default DataTable;
