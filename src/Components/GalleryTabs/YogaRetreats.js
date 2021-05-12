import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaRetreat1 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic1"
import YogaRetreat3 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic3"
import YogaRetreat4 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic4"
import YogaRetreat5 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic5"
import YogaRetreat6 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic6"
import YogaRetreat7 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic7"
import YogaRetreat8 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic8"
import YogaRetreat9 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic9"
import YogaRetreat10 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic10"
import YogaRetreat11 from "../Photocomponents/Gallery/Yoga Retreats/RetreatsPic11"


export default function YogaRetreats() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
                        <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <YogaRetreat1></YogaRetreat1>
                        <YogaRetreat3/>
                        <YogaRetreat10></YogaRetreat10>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaRetreat4></YogaRetreat4>
                        <YogaRetreat5></YogaRetreat5>
                        <YogaRetreat6/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaRetreat7></YogaRetreat7>
                        <YogaRetreat8></YogaRetreat8>
                        <YogaRetreat9></YogaRetreat9>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaRetreat11></YogaRetreat11>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
