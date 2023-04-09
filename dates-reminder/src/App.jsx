import React, { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [holidays, setHolidays] = useState(data);

  return (
    <main className="App">
      <section className="container">
        <h3>National Holidays Dates</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt="img" />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
            </div>
          );
        })}
        <button onClick={() => setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
