import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { RouletteComponent } from "./components/RouletteComponent";
import { WheelRoulette } from "./components/WheelRoulette";
import { AxiosExample } from "./components/AxiosExample";
import { GooglePlaces } from "./components/GooglePlaces";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        {/* <AxiosExample /> */}
        <RouletteComponent />
        <WheelRoulette />
        <GooglePlaces />
      </div>
    </div>
  );
}

export default App;
