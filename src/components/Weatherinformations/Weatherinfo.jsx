import PropTypes from 'prop-types';
import './Weatherinfo.css'
function WeatherInfo({ weather }) {
  console.log(weather.weather[0].icon);
  return (
    <div className='weather-container'>
  <h2>{weather.name}</h2>
    <div className='weather-info'>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather icon"
      />
      <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
    </div> 
    <p className='description'>{weather.weather[0].description}</p>
    <div className='details'>
      <p>Sensação térmica:{Math.round(weather.main.feels_like)}ºC</p>
      <p>Umidade:{weather.main.humidity}%</p>
      <p>Pressão:{weather.main.pressure}</p>
  
    </div>
     </div>
  );
}

WeatherInfo.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default WeatherInfo;
