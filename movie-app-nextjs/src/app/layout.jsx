import React from "react";
import "./globals.css";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
