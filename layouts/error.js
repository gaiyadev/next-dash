import React from "react";

const Error = ({ children }) => {
  return (
    <div>
      <h1>Page not found</h1>
      {children}
    </div>
  );
};

export default Error;
