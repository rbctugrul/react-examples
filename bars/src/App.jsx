import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
  };

  const data = [
    {
      id: 1,
      title: "Beşiktaş",
      color: "black",
      textColor: "white",
      value: getRandomNumber(),
      maxValue: 1000 + getRandomNumber() + getRandomNumber(),
    },
    {
      id: 2,
      title: "Galatasaray",
      color: "red",
      textColor: "yellow",
      value: getRandomNumber(),
      maxValue: 1000 + getRandomNumber() + getRandomNumber(),
    },
    {
      id: 3,
      title: "Fenerbahçe",
      color: "blue",
      textColor: "yellow",
      value: getRandomNumber(),
      maxValue: 1000 + getRandomNumber() + getRandomNumber(),
    },
    {
      id: 4,
      title: "Bursaspor",
      color: "green",
      textColor: "white",
      value: getRandomNumber(),
      maxValue: 1000 + getRandomNumber() + getRandomNumber(),
    },
    {
      id: 5,
      title: "Trabzonspor",
      color: "#800000",
      textColor: "#3BB9FF",
      value: getRandomNumber(),
      maxValue: 1000 + getRandomNumber() + getRandomNumber(),
    },
  ];

  const setBarDataRandom = () => {
    let data = [...barData];
    data.map((item) => {
      return (item.value += getRandomNumber());
    });
    setBarData(data);
  };

  function compareValues(key, order = "desc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  useEffect(() => {
    const arr = [...barData];
    let timer;
    timer = setInterval(() => {
      arr.forEach((item, index) => {
        if (item.value > item.maxValue) {
          let data = [...barData];
          data.map((item) => {
            return (item.value = item.maxValue);
          });

          setBarData(data);
          clearInterval(timer);
        } else {
          setBarDataRandom();
        }
      });
    }, 500);
  }, []);

  const [barData, setBarData] = useState(data);

  return (
    <div className="App">
      <h1>BARS</h1>
      {barData.sort(compareValues("value", "desc")).map((item, index) => {
        return (
          <div
            key={index}
            className="chart"
            style={{
              backgroundColor: item.color,
              color: item.textColor,
              width:
                item.value >= item.maxValue
                  ? "100%"
                  : (item.value) + "px",
              transform: `translateY(${index * 60 + 20 + "px"})`,
            }}
          >
            {item.title + "" + " Şirket Değeri: " + item.value}
          </div>
        );
      })}
    </div>
  );
}

export default App;
