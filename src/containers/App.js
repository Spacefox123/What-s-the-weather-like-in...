import React, { useState } from 'react';
import Title from '../components/Title'
import Weatherdisplay from '../components/Weatherdisplay'
import Footer from '../components/Footer'
import 'tachyons'
import './App.css';

const App = () => {
    const [input, setInput] = useState('')

    function handleChange(event) {
		setInput(event.target.value)
	}

    console.log(input)

    return(
        <main className='bg-light-blue'>
            <Title onChange={handleChange} value={input}/>
            <Weatherdisplay value={input}/>
            <Footer />
        </main>
    )
}

export default App;