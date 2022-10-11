import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChecklistContainer from "../pages/checklist/ChecklistContainer";
import LoginContainer from "../pages/login/LoginContainer";

const NavigationBar = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<LoginContainer />} />
          <Route path="/checklist" element={<ChecklistContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavigationBar;
