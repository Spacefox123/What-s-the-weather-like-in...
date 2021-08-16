import React from 'react';

const Weatherdisplay = ({ value }) => {
    try {
    let temp = value.data.main.temp
    let city = value.data.name
    return(
        <div className='weatherdisplay'>
            <p>{`Current temperature in ${city} is ${temp} degrees Celsius!`}</p>
        </div>
    )} catch(err) {
        return(
            <div className="weatherdisplay notfound">
                <p className="notfound-text">City not found!</p>
            </div>
        )
    }
}

export default Weatherdisplay