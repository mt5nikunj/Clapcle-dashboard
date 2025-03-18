import {
  AppBar,
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
// import { PieChart } from "@mui/x-charts/PieChart";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useState } from "react";
import fileImg from "./../../../assets/file.svg";
import addImg from "./../../../assets/add-square.svg";
import callImg from "./../../../assets/call-calling.svg";
import smsImg from "./../../../assets/sms.svg";
import upArrowImg from "./../../../assets/arrow-up.svg";
import Grid from "@mui/material/Grid";
// import { BarChart } from "@mui/x-charts";
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

  const activities = [
    {
      imgSrc: addImg,
      name: "Abhilash Kumar",
      action: "Added a note",
      tag: "Customer",
      description:
        "This is the main record of the customer details and its sales analysis.",
      user: "Akhil Anand",
      customerId: "#CUS001",
      gst: "GST 27ABCDE1234F1Z5",
      time: "2 Days Ago 10:40 AM",
    },
    {
      imgSrc: addImg,
      name: "Abhilash Kumar",
      action: "Added a note",
      tag: "Customer",
      description:
        "This is the main record of the customer details and its sales analysis.",
      user: "Akhil Anand",
      customerId: "#CUS001",
      gst: "GST 27ABCDE1234F1Z5",
      time: "2 Days Ago 10:40 AM",
    },
    // More activity objects...
  ];

  const pieData = [
    { name: "Mumbai", value: 500 },
    { name: "Mumbai", value: 300 },
    { name: "Mumbai", value: 300 },
    { name: "Mumbai", value: 100 },
    { name: "Mumbai", value: 100 },
  ];

  const barData = [
    { name: "Jan 1-7", added: 80, lost: 30, converted: 40 },
    { name: "Jan 8-14", added: 50, lost: 60, converted: 30 },
    { name: "Jan 15-21", added: 90, lost: 20, converted: 50 },
    { name: "Jan 22-28", added: 70, lost: 40, converted: 60 },
    { name: "Feb 1-9", added: 60, lost: 50, converted: 70 },
  ];

  const COLORS = ["#D35BE3", "#7CEAED", "#59A3ED", "#E99626", "#9EE563"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "100%", width: "100%", padding: "0px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: " 0px 24px",
        }}
      >
        <Box sx={{ width: 300, backgroundColor:'#FFFFFF99', padding:'8px',borderRadius: "8px", }}>
          <AppBar
            position="static"
            elevation={0.0}
            sx={{
              backgroundColor: "#FFFFFF99",
              // color: "black",
              borderRadius: "8px",
              borderColor: "#FFFFFF",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              {["Dashboard", "CustomerList"].map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{
                    bgcolor: value === index ? "#7859ED" : "#FFFFFF", 
                    color: value === index ? "#FFFFFF" : "#7859ED", 
                    height:'40px',
                    fontWeight:'600',
                    borderRadius: "4px",
                    transition: "0.3s",
                    textTransform:'capitalize'
                  }}
                />
              ))}
            </Tabs>
          </AppBar>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: "#7859ED",
              color: "#ffff",
              cursor: "pointer",
              borderRadius: "5px",
              height: "48px",
              fontWeight:'600',
              width: "192px",
              textTransform:'capitalize'
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
              borderRadius: "8px",
              height: "116px",
            }}
          >
            {statsData.map((stat, index) => (
              <>
                <Box sx={{ height: "100%", padding: "16px" }}>
                  <Box
                    sx={{ display: "flex",height:'84px', justifyContent: "space-between" }}
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
                      <Box my={1} color={"#999999"}  fontWeight={500}>
                        {stat.title}
                      </Box>
                      <Box fontSize={12} color={"#999999"} mt={"20px"}>
                        Compared to Last Month
                      </Box>
                    </Box>
                    <Box px={1}>
                      <Box fontSize={28} fontWeight={"600"} color="#484848">
                        {stat.value}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "hsl(141.43deg 70% 92.16%)",
                          borderRadius: "4px",
                          marginTop: "10px",
                          height:'28px'
                        }}
                      >
                        <Box fontSize={'12px'} paddingRight={"3px"} color={'#2D643D'} >
                          {stat.percentage}%
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <img
                            src={upArrowImg}
                            alt="trend"
                            loading="lazy"
                            height={"20px"}
                            width={"20px"}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {index < statsData.length - 1 && (
                  <Box sx={{display:'flex', alignItems:'center', height:'100%'}}>
                  <Box  sx={{height:'64px', width:'1px',  backgroundColor:'#E6E6E6',borderRadius:'4px'}} ></Box>
                  </Box>
                )}
              </>
            ))}
          </Box>
          <Box mt={"16px"}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    height: "419px",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Box>
                      <Box>Customer</Box>
                      <Box></Box>
                    </Box>
                    <PieChart width={250} height={250}>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ padding: "10px" }}>
                    <Box>
                      <Box>Added v/s Lost v/s Converted Leads</Box>
                    </Box>
                    <ResponsiveContainer
                      width="100%"
                      height={395}
                      minWidth={550}
                    >
                      <BarChart data={barData}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey="added"
                          fill={"#95e79c"}
                          // radius={[5, 5, -5, -5]}
                        />
                        <Bar
                          dataKey="lost"
                          fill={"#D35BE3"}
                          // radius={[5, 5, 5, 5]}
                        />
                        <Bar
                          dataKey="converted"
                          fill={COLORS[2]}
                          // radius={[5, 5, 5, 5]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundColor: "#ffff",
                    padding: "24px",
                    borderRadius: "8px",
                    height: "419px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography variant="body1">Recent activities</Typography>
                    <Typography variant="body1" color="#7859ED">View All</Typography>
                  </Box>
                  {activities.map((activity, index) => (
                    // <ActivityItem key={index} {...activity} />
                    <Box sx={{ display: "flex", marginBottom: "10px" }}>
                      <Box>
                        <img
                          src={activity.imgSrc}
                          alt="file"
                          loading="lazy"
                          height={"24px"}
                          width={"24px"}
                        />
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          padding: "10px",
                          "&:hover": {
                            backgroundColor: "white",
                            boxShadow: "0px 4px 10px rgba(11, 11, 11, 0.1)",
                            transform: "scale(1.02)",
                          },
                          cursor: "pointer",
                          marginLeft: "15px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box color={'#484848'}>{activity.name}</Box>
                          <Typography variant="body2" sx={{ color: "#999999" }}>
                            {activity.action}
                          </Typography>
                          <Box
                            sx={{
                              backgroundColor: "#EAF3F7",
                              borderRadius: "4px",
                              padding: "6px 8px",
                              fontSize: "10px",
                            }}
                          >
                            {activity.tag}
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            paddingBottom: "10px",
                            fontSize: "14px",
                            color: "#999999",
                          }}
                        >
                          {activity.description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box sx={{ display: "flex",color :'#484848'}}>
                            <Box>{activity.user} </Box>
                            <Box>{activity.customerId}</Box>
                          </Box>
                          <Box sx={{ display: "flex", gap:'16px' }}>
                            <img
                              src={callImg}
                              alt="call"
                              loading="lazy"
                              height={"20px"}
                              width={"20px"}
                            />
                            <img
                              src={smsImg}
                              alt="sms"
                              loading="lazy"
                              height={"20px"}
                              width={"20px"}
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography sx={{ color: "#999999" }}>
                            {activity.gst}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#999999" }}>
                            {activity.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ backgroundColor: "#ffff" }} mt={"16px"}>
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
