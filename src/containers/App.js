import React, {useEffect, useState } from 'react';
import Title from '../components/Title'
import Weatherdisplay from '../components/Weatherdisplay'
import Footer from '../components/Footer'
import 'tachyons'
import './App.css';

const App = () => {
    const [input, setInput] = useState('')
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

        if (!input) {
            setInput('London');
        }

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&lang=en&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData({data}))
        .catch(err => setWeatherData(false))
    }, [input])
    
    //! function that handles a change in the input and sets the state to the value
    function handleChange(event) {
        setInput(event.target.value);
    }

    return(
        <main className='bg-light-blue'>
            <Title onChange={handleChange} value={input}/>
            <Weatherdisplay value={weatherData}/>
            <Footer />
        </main>
    )
}

export default App;