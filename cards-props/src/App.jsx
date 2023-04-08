import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card
        img="https://cdn.vox-cdn.com/thumbor/OhRgTL232xHKcJsUuEet-w4l2Ns=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23099830/Screen_Shot_2021_12_15_at_3.57.28_PM.png"
        title="Azula"
        description="Azula was a princess of the Fire Nation, daughter of Fire Lord Ozai and Ursa, younger sister of Zuko, and older half-sister of Kiyi."
      />
      <Card
        img="https://a-static.besthdwallpaper.com/avatar-the-legend-of-korra-amon-wallpaper-2880x1800-75935_8.jpg"
        title="Amon"
        description="Amon, born as Noatak, was the charismatic and mysterious leader of an anti-bender revolutionary group known as the Equalists. "
      />
      <Card
        img="https://i.pinimg.com/originals/bd/b4/d4/bdb4d44c2e702caa5c683ecea2bcb6ee.jpg"
        title="Zaheer"
        description="Zaheer is the leader of the Red Lotus, a martial arts expert, and an anarchist, who strongly believes in the foundation of a new world without the Order of the White Lotus, the four nations, or the Avatar."
      />
    </div>
  );
}

export default App;
