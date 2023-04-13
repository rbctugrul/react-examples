import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>
            Our Characters
            <div className="underline"></div>
          </h2>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
