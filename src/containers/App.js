import React, { Component } from 'react';
import Title from '../components/Title'
import Weatherdisplay from '../components/Weatherdisplay'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return(
            <>
            <Title />
            <Weatherdisplay />
            <Footer />
            </>
        )
    }
}

export default App;