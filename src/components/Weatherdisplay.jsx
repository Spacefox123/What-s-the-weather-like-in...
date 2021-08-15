import React from 'react';

// import { useEffect } from "react"

const Weatherdisplay = ({ value }) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    async function getData() {
        try {
            const data = await fetch(`api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
            const parsed = await data.json()
            return parsed
        } catch(error) {
            return alert(`There has been an error: ${error}`)
        }
    }

    console.log(getData())

    return(
        <div className='weatherdisplay'>
            <p>{}</p>
        </div>
    )
}

export default Weatherdisplay