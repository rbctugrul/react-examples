import React, { useState } from "react";
import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BrandsData from "./brands.json";

function App() {
  const brandsArray = [];

  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
