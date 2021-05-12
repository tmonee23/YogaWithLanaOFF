import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaStudio1 from "../Photocomponents/Gallery/Yoga Studio/YogaStudio1"
import YogaStudio2 from "../Photocomponents/Gallery/Yoga Studio/YogaStudio2"
import YogaStudio3 from "../Photocomponents/Gallery/Yoga Studio/YogaStudio3"

export default function YogaStudio() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
                        <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <YogaStudio1></YogaStudio1>
                        <YogaStudio2></YogaStudio2>
                        <YogaStudio3/>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
