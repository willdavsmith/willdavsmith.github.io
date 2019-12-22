import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import '../styles/Intro.css';

export default function Intro() {
    return (
        <header className="App-intro">
            <p className="App-intro-initials">W<span className="App-intro-name">ILL</span> <span className="App-intro-intitials">S</span><span className="App-intro-name">MITH</span></p>
            <hr id="App-intro-bar"></hr>
            <p className="App-intro-title">SOFTWARE ENGINEER</p>
            <Navbar />
        </header>
    )
}