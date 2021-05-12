import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import AntiGravity1 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity1"
import AntiGravity2 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity2"
import AntiGravity3 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity3"
import AntiGravity4 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity4"
import AntiGravity5 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity5"
import AntiGravity6 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity6"
import AntiGravity7 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity7"
import AntiGravity8 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity8"
import AntiGravity9 from "../Photocomponents/Gallery/Anti Gravity Yoga/AntiGravity9"

export default function AntiGravityYoga() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div  className="page-container">
            <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <AntiGravity1></AntiGravity1>
                        <AntiGravity2></AntiGravity2>
                        <AntiGravity3></AntiGravity3>
                </div>
                <div className="Gallery-Page-Row">
                        <AntiGravity4></AntiGravity4>
                        <AntiGravity5></AntiGravity5>
                        <AntiGravity6></AntiGravity6>
                </div>
                <div className="Gallery-Page-Row">
                        <AntiGravity7></AntiGravity7>
                        <AntiGravity8></AntiGravity8>
                        <AntiGravity9></AntiGravity9>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
