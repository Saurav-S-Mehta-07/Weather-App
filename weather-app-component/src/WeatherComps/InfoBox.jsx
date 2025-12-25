
import "./InfoBox.css";

const InfoBox = ({info}) => {
  return (
    <div className="InfoBox">
        <h1 style={{color:"blue"}}>{info.cityname}</h1>
        <div className="Cards">

            <div className="Card">
                <h3>Temperature : {info.temperature}</h3>
                <h3>Humidity : {info.humidity}</h3>
                <h3>Wind Speed : {info.windSpeed}</h3>
                <h3>Feels Like : {info.feelsLike}</h3>
                <h3>Pressure : {info.pressure}</h3>
                <h3>Description : {info.description}</h3>
            </div>
    
            <div className="Card">
                <h3>Maximum Temp. : {info.maxTemp}</h3>
                <h3>Minimum Temp. : {info.minTemp}</h3>
                <h3>Longitude : {info.longitude}</h3>
                <h3>Latitude : {info.latitude}</h3>
                <h3>SeaLevel : {info.seaLevel}</h3>
            </div>
            
        </div>
    </div>
  )

}

export default InfoBox;
