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
  AppBar,
  Tab,
  Tabs,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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

    // Add more data as needed
  ];
  return (
    <Box sx={{ backgroundColor: "#FFFFFF99" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mx={5}>
        {" "}
        <Box my={2} sx={{ width: 650 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Top Customer" {...a11yProps(0)} />
              <Tab label="Top Negative Balance" {...a11yProps(1)} />
              <Tab label="Recently Added" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </Box>
        <Box my={2}>View All</Box>
      </Box>
      <TabPanel value={value} index={0}>
      <TableContainer sx={{ p: "10px", borderRadius: "8px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="customer table">
          <TableHead style={{ backgroundColor: "#BDE1F84D" }}>
            <TableRow
              style={{ fontSize: "14px", fontWeight: 600, color: "#919090" }}
            >
              <TableCell align="left"></TableCell>
              <TableCell>ID</TableCell>
              <TableCell width={'170px'}>Customer/Vendor Name</TableCell>
              <TableCell width={'140px'}>Nick Name</TableCell>
              <TableCell>GST No.</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell width={'170px'}>Contact No.</TableCell>
              <TableCell width={'150px'}>Balance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell width={'150px'}>
                Date & Time
                <IconButton size="small">
                  <img
                    src="src/assets/arrow-right.svg"
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
                sx={{ "&:hover": { backgroundColor: "action.hover" } }}
              >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon
                      sx={{ color: "warning.main", fontSize: "20px" }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2">{row.id}</Typography>
                  </Box>
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
                      backgroundColor: "success.light",
                      color: "success.dark",
                      px: 1,
                      py: 0.5,
                      borderRadius: 8,
                      display: "inline-block",
                    }}
                  >
                    <Typography variant="body2">{row.status}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.dateTime}</Typography>
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
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
