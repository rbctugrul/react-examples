import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = "2aa95feb659b6eab64769e1fc8a072cc";

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(data);
    } catch {
      alert("Veri alinirken hata oluştu");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  console.log(latitude, longitude, weather);

  return <div>Hava Durumu</div>;
};

export default App;
