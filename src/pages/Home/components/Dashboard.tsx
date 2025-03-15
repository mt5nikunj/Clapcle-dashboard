import {
  AppBar,
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import React, { useState } from "react";
import fileImg from "./../../../assets/file.svg";
import addImg from "./../../../assets/add-square.svg";
import callImg from "./../../../assets/call-calling.svg";
import smsImg from "./../../../assets/sms.svg";
import upArrowImg from "./../../../assets/Vector.svg";
import Grid from "@mui/material/Grid";
import { BarChart } from "@mui/x-charts";
import DataTable from "./DataTable";

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

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const statsData = [
    {
      icon: fileImg,
      title: "Active Customers",
      value: "20K",
      percentage: "10",
      arrowIcon: upArrowImg,
    },
    {
      icon: fileImg,
      title: "Total Customers",
      value: "20K",
      percentage: "10",
      arrowIcon: upArrowImg,
    },
    {
      icon: fileImg,
      title: "Total Leads",
      value: "20K",
      percentage: "10",
      arrowIcon: upArrowImg,
    },
    {
      icon: fileImg,
      title: "Customer Retention Rate",
      value: "20K",
      percentage: "10",
      arrowIcon: upArrowImg,
    },
  ];

  const data = [
    { value: 5, label: "A", color: "hsl(98.08deg 75.36% 72.94%)" },
    { value: 10, label: "B", color: "hsl(33.48deg 92% 70.59%)" },
    { value: 15, label: "C", color: "hsl(206.67deg 88.73% 72.16%)" },
    { value: 20, label: "D", color: "hsl(181.4deg 81.13% 79.22%)" },
    { value: 25, label: "D", color: "hsl(298.71deg 79.49% 77.06%)" },
  ];

  const size = {
    width: 400,
    height: 322,
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "100%", width: "100%", padding: "15px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: " 0px 20px",
        }}
      >
        <Box sx={{ width: 300 }}>
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
              <Tab label="Dashboard" {...a11yProps(0)} />
              <Tab label="CustomerList" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: "hsl(254.72deg 89.83% 65.29%)",
              color: "#ffff",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Add New Customer
          </Button>
        </Box>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
            }}
          >
            {statsData.map((stat, index) => (
              <>
                <Box sx={{ height: "100%", padding: "16px" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box px={1}>
                      <img
                        src={stat.icon}
                        alt={stat.title}
                        loading="lazy"
                        height={"52px"}
                        width={"52px"}
                      />
                    </Box>
                    <Box px={1}>
                      <Box my={1}>{stat.title}</Box>
                      <Box fontSize={12}>Compared to Last Month</Box>
                    </Box>
                    <Box px={1}>
                      <Box fontSize={26} fontWeight={"bold"}>
                        {stat.value}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "hsl(141.43deg 70% 92.16%)",
                          borderRadius: "8px",
                          padding: "0px 5px",
                        }}
                      >
                        <Box fontSize={13} paddingRight={"3px"}>
                          {stat.percentage}%
                        </Box>
                        <Box>
                          <img
                            src={upArrowImg}
                            alt="trend"
                            loading="lazy"
                            height={"12px"}
                            width={"12px"}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {index < statsData.length - 1 && (
                  <Divider orientation="vertical" variant="middle" flexItem />
                )}
              </>
            ))}
          </Box>
          <Box mt={5}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box sx={{ display: "flex", backgroundColor: "#ffff" }}>
                  <Box sx={{ padding: "10px" }}>
                    <Box>
                      <Box>Customer</Box>
                      <Box></Box>
                    </Box>
                    <PieChart
                      series={[
                        {
                          data,
                          startAngle: -90,
                          paddingAngle: 5,
                          innerRadius: 60,
                          outerRadius: 80,
                        },
                      ]}
                      {...size}
                    >
                      {/* <PieCenterLabel>Center label</PieCenterLabel> */}
                    </PieChart>
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ padding: "10px" }}>
                    <Box>
                      <Box>Added v/s Lost v/s Converted Leads</Box>
                      <Box></Box>
                    </Box>
                    <BarChart
                      colors={[
                        "hsl(165.35deg 67.91% 63.33%)",
                        "hsl(298.05deg 78.34% 69.22%)",
                        "hsl(206.76deg 89.16% 67.45%)",
                      ]}
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["group A", "group B", "group C"],
                        },
                      ]}
                      series={[
                        { data: [4, 3, 5] },
                        { data: [1, 6, 3] },
                        { data: [2, 5, 6] },
                      ]}
                      width={500}
                      height={300}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ backgroundColor: "#ffff", padding: "10px" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ textAlign: "center" }}>Recent activities</Box>
                    <Box>
                      <Button>View All</Button>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", marginBottom: "10px" }}>
                    <Box>
                      <img
                        src={addImg}
                        alt="file"
                        loading="lazy"
                        height={"20px"}
                        width={"20px"}
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          height: "100%",
                          // width: "300px",
                          backgroundColor: "none",
                          padding: "0px 16px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box>Abhilash Kumar</Box>
                          <Box>Added a note</Box>
                          <Box
                            sx={{
                              backgroundColor: "hsl(198.75deg 53.33% 94.12%)",
                              borderRadius: "10px",
                              padding: "5px",
                              fontSize: "12px",
                            }}
                          >
                            Customer
                          </Box>
                        </Box>
                        <Box sx={{ paddingBottom: "10px", fontSize: "14px" }}>
                          This is the main record of the customer details and
                          it’s sales analysis.
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <Box>Akhil Anand </Box>
                            <Box>#CUS001</Box>
                          </Box>
                          <Box>
                            <Box sx={{ display: "flex" }}>
                              <Box sx={{ px: "5px" }}>
                                {" "}
                                <img
                                  src={callImg}
                                  alt="file"
                                  loading="lazy"
                                  height={"20px"}
                                  width={"20px"}
                                />
                              </Box>
                              <Box>
                                {" "}
                                <img
                                  src={smsImg}
                                  alt="file"
                                  loading="lazy"
                                  height={"20px"}
                                  width={"20px"}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>GST 27ABCDE1234F1Z5</Box>
                          <Box>2 Days Ago 10:40 AM</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <img
                        src={addImg}
                        alt="file"
                        loading="lazy"
                        height={"20px"}
                        width={"20px"}
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          height: "100%",
                          // width: "300px",
                          backgroundColor: "none",
                          padding: "0px 16px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box>Abhilash Kumar</Box>
                          <Box>Added a note</Box>
                          <Box
                            sx={{
                              backgroundColor: "hsl(198.75deg 53.33% 94.12%)",
                              borderRadius: "10px",
                              padding: "5px",
                              fontSize: "12px",
                            }}
                          >
                            Customer
                          </Box>
                        </Box>
                        <Box sx={{ paddingBottom: "10px", fontSize: "14px" }}>
                          This is the main record of the customer details and
                          it’s sales analysis.
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <Box>Akhil Anand </Box>
                            <Box>#CUS001</Box>
                          </Box>
                          <Box>
                            <Box sx={{ display: "flex" }}>
                              <Box sx={{ px: "5px" }}>
                                {" "}
                                <img
                                  src={callImg}
                                  alt="file"
                                  loading="lazy"
                                  height={"20px"}
                                  width={"20px"}
                                />
                              </Box>
                              <Box>
                                {" "}
                                <img
                                  src={smsImg}
                                  alt="file"
                                  loading="lazy"
                                  height={"20px"}
                                  width={"20px"}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>GST 27ABCDE1234F1Z5</Box>
                          <Box>2 Days Ago 10:40 AM</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ backgroundColor: "#ffff" }} mt={5}>
            <Box>
              <DataTable />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Dashboard;
