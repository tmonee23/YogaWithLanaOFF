import React from 'react'
import { TweenMax, Power3 } from "gsap"
import { useRef, useEffect } from "react"

import CoachingPicOne from "./Photocomponents/Coaching/CoachingOne";
import CoachingPicTwo from "./Photocomponents/Coaching/CoachingBackground";

export default function Coaching() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, { opacity: 0, ease: Power3.easeInOut })
    }, [])


    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="coaching-container">
                <div className="coaching-header-container">
                    <h2>“Hello Change”</h2>
                    <h2>Guiding through the Times of Adaptation</h2>
                    <p>Change is inevitable. It is part of a bigger journey. There are changes in everyone's life. In these dynamic times we happen to experience the shifts unprepared and overwhelmed more often.
                    With this phenomenal program I offer you my steady guidance through the phase of transition and adaptation. We aim to enter the new reality gently and consciously, avoiding excessive stress and resisting tendencies.
                    After passing through the stage of conscious synchronization, conformity occurs. So, we can efficiently resonate with our new reality, finding points of contact with it and naturally activating all our resources to the maximum.
                    The process of synchronization during the period of adaptation is extremely important. Giving it due attention, you can then generate the strength you need for the life you always wanted to have.
                    </p>
                    <h4>21 day program:</h4>
                    <h4> Week 1:</h4> <p>What is Energy Integrity. How do we loose/gain Energy. </p> 
                    <h4> Week 2:</h4> <p>Assessment of our personal resources. </p> 
                    <p>New Methods and formats for their implementation. </p>
                    <h4> Week 3:</h4> <p>Synchronization and harmonization of our resources with the proposed new circumstances/environments.  </p> 
                    <h4> Practical Assignments:</h4> <p>Experience the state of being “In the Flow”. Positive intellect and the Power of Intention (Determination). Resolving Resistance and False Predictions. Non-dual evaluation of our inner reality and how it can ideally correlate with the new environment. </p>                
                    <a href="mailto:yogalana2020@gmail.com?subject=Seminar Participation&body=Dear Lana,">Sign up here!</a>
                </div>

            </div>
            <div className="Coaching-Photo-One">
                    <CoachingPicOne/>
            </div>  
            <div className="Coaching-Photo-Two">
                    <CoachingPicTwo/>
            </div>
        </div>
    )
}