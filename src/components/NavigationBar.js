import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChecklistContainer from "../pages/checklist/ChecklistContainer";
import LoginContainer from "../pages/login/LoginContainer";

const NavigationBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LoginContainer />} />
          <Route path="/checklist" element={<ChecklistContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavigationBar;
