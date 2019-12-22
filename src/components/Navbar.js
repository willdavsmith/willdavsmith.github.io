import React from 'react';
import '../styles/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="Navbar-nav">
                    <li className="Navbar-nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                    </li>
                    <li className="Navbar-nav-item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Skills</Link>
                    </li>
                    <li className="Navbar-nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                    </li>
                    <li className="Navbar-nav-item">
                        <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Education</Link>
                    </li>
                    <li className="Navbar-nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}