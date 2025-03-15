import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Master from "./Master";

const Routing = () => {
  return (
    <Routes>
      <Route path="" element={< Master/>}>
        <Route path="" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
