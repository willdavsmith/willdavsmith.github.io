import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import '../styles/Intro.css';

export default function Intro() {
    return (
        <header id="intro">
            <p className="intro-initials">W<span className="intro-name">ILL</span> <span className="intro-intitials">S</span><span className="intro-name">MITH</span></p>
            <hr id="App-intro-bar"></hr>
            <p id="intro-title">SOFTWARE ENGINEER</p>
            <Navbar />
        </header>
    )
}