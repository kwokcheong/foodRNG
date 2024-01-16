import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { RouletteComponent } from "./components/RouletteComponent";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <p>Our first app</p>
        {/* <AxiosExample /> */}
        <RouletteComponent />
      </div>
    </div>
  );
}

export default App;
