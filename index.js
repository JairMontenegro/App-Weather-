const API_KEY = "5b5fa8eccdc403dbde9233182b5cb00f";


const fetchData = position => { 
    const  {latitude, longitude} = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then (response => response.json())
    .then (data => setWeatherData(data)) 
}


const setWeatherData = data => {
    console.log(data)
    const  weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity : data.humidity,
        

    }
} 

const onLoad =() => {
        navigator.geolocation.getCurrentPosition(fetchData);
}  

