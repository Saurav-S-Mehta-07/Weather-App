import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

import { useEffect, useState } from 'react';


const WeatherApp = () => {
    let [city, setCity] = useState("");
    let [data, setData] = useState({});



    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9c92049098cbafecf33071189a5d2004";

    let getWeatherInfo  = async (city)=>{
          let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonRes =  await response.json();
          let result = {
               temperature : jsonRes.main.temp,
               feelsLike : jsonRes.main.feels_like,
               minTemp:  jsonRes.main.temp_min,
               maxTemp:  jsonRes.main.temp_max,
               humidity:jsonRes.main.humidity,
               seaLevel : jsonRes.main.sea_level,
               pressure : jsonRes.main.pressure,
               description : jsonRes.weather[0].description,
               windSpeed : jsonRes.wind.speed,
               latitude : jsonRes.coord.lat,
               longitude : jsonRes.coord.lon,
               cityname : jsonRes.name,
          }
          setData(result);
    }

    let handleChange = (event)=>{
           setCity(()=>{
             return event.target.value;
           })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        getWeatherInfo(city);
        setCity("");
    }
    
    useEffect( ()=>{
        async function getMumbaiWeather(){
            getWeatherInfo("mumbai");
        }
        getMumbaiWeather();
    },[]);

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"blue"}}>Weather App</h1>
        <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} city={city}/>
        <hr />
        <InfoBox info={data}/>
    </div>
  )
}

export default WeatherApp