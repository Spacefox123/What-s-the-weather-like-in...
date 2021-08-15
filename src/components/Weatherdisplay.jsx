// import React from 'react';

// import { useEffect } from "react"

const Weatherdisplay = ({ value }) => {
    const apiKey = '3b622c39ee3333d7bebad099fb562948'

    async function getData() {
        try {
            const data = await fetch(`api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`)
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