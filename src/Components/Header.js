import React from 'react'
import Navbar from "./Navbar"

import Background from "./Photocomponents/Headerbackground";
import Logo from "./Photocomponents/LogoPicutre"


export default function Header() {


    return(
        <div>
            <Background/>
        <div  className="header-container">
            <div></div>
            <Navbar/>
            <div></div>
            <div className="HeaderTextContainer">
            <a href="/">
            <h1 className="header-text">Yoga with Lana</h1>
            </a>
            </div>
            <div></div>
            <Logo/>
            <div></div>
        </div>
        </div>
    )
}