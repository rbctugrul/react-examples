"use client"
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
