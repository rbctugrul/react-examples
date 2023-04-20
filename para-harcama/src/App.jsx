import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import products from "./products.json";
import Product from "./components/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <>
      <Header money={money} />
      {products.map((product) => (
        <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
      ))}
    </>
  );
}

export default App;
