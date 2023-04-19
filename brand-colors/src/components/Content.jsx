import React, { useContext } from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "./MainContext";

function Content() {
  const { brands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
        {brands.map((brand) => (
          <Brand brand={brand} />
        ))}
      </section>
    </main>
  );
}

export default Content;
