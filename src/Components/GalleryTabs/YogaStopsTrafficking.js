import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaTraffic1 from "../Photocomponents/Gallery/Yoga Stops Trafficking - 108 Sun Salutations/YogaStops1"
import YogaTraffic2 from "../Photocomponents/Gallery/Yoga Stops Trafficking - 108 Sun Salutations/YogaStops2"
import YogaTraffic3 from "../Photocomponents/Gallery/Yoga Stops Trafficking - 108 Sun Salutations/YogaStops3"
import YogaTraffic4 from "../Photocomponents/Gallery/Yoga Stops Trafficking - 108 Sun Salutations/YogaStops4"
import YogaTraffic5 from "../Photocomponents/Gallery/Yoga Stops Trafficking - 108 Sun Salutations/YogaStops5"


export default function YogaStopsTrafficking() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
                        <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <YogaTraffic1></YogaTraffic1>
                        <YogaTraffic2></YogaTraffic2>
                        <YogaTraffic3/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaTraffic4></YogaTraffic4>
                        <YogaTraffic5></YogaTraffic5>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
