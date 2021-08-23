import React from 'react';

const Weatherdisplay = ({ value }) => {
    const convertTime = (unix) => {
        let date = new Date(unix * 1000);
        let hours = date.getHours()
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime
    }

    try {
    let description = value.data.weather[0].description
    let url = `http://openweathermap.org/img/wn/${value.data.weather[0].icon}@2x.png`
    let temp = value.data.main.temp
    let feels = value.data.main.feels_like
    let humidity = value.data.main.humidity
    let pressure = value.data.main.pressure
    let wind = value.data.wind.speed
    let windDeg = value.data.wind.deg
    let clouds = value.data.clouds.all
    let sunrise = convertTime(value.data.sys.sunrise)
    let sunset = convertTime(value.data.sys.sunset)
    let city = value.data.name

    console.log(value)
    console.log(url)
    console.log(value.data.weather[0].icon)
    return(
        <div className='weatherdisplay'>
            <h1>{`What's the motherfucking weather in ${city}??`}</h1>
            <p>{`Today, it's goddamn ${description}, or just look through the window!`}</p>
            <img src={url} alt="Weather icon"></img>
            <p>{`It's ${temp}°C outside. But alas, it feels like ${feels}°C.`}</p>
            <p>{`The pressure is ${pressure} kPa and the humidity is ${humidity}%`}</p>
            <p>{`The wind speed is ${wind}m/s and it's blowing in the angle of ${windDeg}°`}</p>
            <p>{`The sky coverage with clouds is ${clouds}%`}</p>
            <p>{`Today, the sunrise is at ${sunrise} and the sunset is at ${sunset}`}</p>
        </div>
    )} catch(err) {
        return(
            <div className="weatherdisplay notfound">
                <p>City not found!</p>
            </div>
        )
    }
}

export default Weatherdisplay