import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../pages/Home/HomePage";
import Properties from "../pages/Properties/Properties";
import { Routes } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default Root;
