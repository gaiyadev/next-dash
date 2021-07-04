import React from "react";
import Navbar from "../components/navbar/navbar";

const Default = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Default;
