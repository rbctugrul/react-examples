import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
