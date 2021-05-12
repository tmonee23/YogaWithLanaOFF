import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import InternationalYoga1 from "../Photocomponents/Gallery/International Yoga Day, Belgrade, 2013/InternationalDay1"
import InternationalYoga2 from "../Photocomponents/Gallery/International Yoga Day, Belgrade, 2013/InternationalDay2"
import InternationalYoga3 from "../Photocomponents/Gallery/International Yoga Day, Belgrade, 2013/InternationalDay3"
import InternationalYoga4 from "../Photocomponents/Gallery/International Yoga Day, Belgrade, 2013/InternationalDay4"


export default function InternationalYogaDay() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <InternationalYoga1></InternationalYoga1>
                        <InternationalYoga2></InternationalYoga2>
                </div>
                <div className="Gallery-Page-Row">
                        <InternationalYoga3></InternationalYoga3>
                        <InternationalYoga4></InternationalYoga4>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
            </div>
    )
}
