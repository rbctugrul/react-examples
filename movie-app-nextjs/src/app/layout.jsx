import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
