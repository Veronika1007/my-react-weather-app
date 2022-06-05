import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Weather App</header>
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project was coded by Veronika and is{" "}
        <a
          href="https://github.com/Veronika1007/my-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on github
        </a>
      </footer>
    </div>
  );
}
