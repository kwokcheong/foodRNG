import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { AxiosExample } from "./components/AxiosExample";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <p>Our first app</p>
        <AxiosExample />
      </div>
    </div>
  );
}

export default App;
