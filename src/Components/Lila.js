import React from 'react'
import { TweenMax, Power3 } from "gsap"
import { useRef, useEffect } from "react"

import LeelaPicOne from "./Photocomponents/Leela/LeelaPicOne";
import LeelaPicTwo from "./Photocomponents/Leela/LeelaPicTwo";

export default function Lila() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, { opacity: 0, ease: Power3.easeInOut })
    }, [])


    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="leela-container">
                <div className="leela-header-container">
                    <h2>Leela Game</h2>
                    <h3>the game of self-knowledge was created by enlightened masters in India many centuries ago. They believe that with the help of the game “Leela" life and fate can be changed. The game has been used for centuries to purify and expand consciousness.</h3>
                    <a href="mailto:yogalana2020@gmail.com?subject=Leela Game Date&body=Dear Lana,">Click here to set a date for this unique opportunity to Play with Lana</a>
                </div>

            </div>

        </div>
    )
}