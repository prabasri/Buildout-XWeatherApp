import {useState} from 'react';
import { SearchBar } from "./SearchBar/SearchBar.jsx";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay.jsx";
import './App.css';

function App() {

  const [city, setCity] = useState("");

  const getCityFromChild = (cityFromChild) => {
    setCity(cityFromChild);
  }
  console.log(city);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar getCity={getCityFromChild}/>
      <WeatherDisplay city={city}/>
    </div>
  );
}

export default App;
