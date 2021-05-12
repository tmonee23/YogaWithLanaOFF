import React, {useEffect, useRef} from "react"

import PartnerYoga1 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga1"
import PartnerYoga2 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga2"
import PartnerYoga3 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga3"
import PartnerYoga4 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga4"
import PartnerYoga5 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga5"
import PartnerYoga6 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga6"
import PartnerYoga7 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga7"
import PartnerYoga8 from "../Photocomponents/Gallery/Partner Yoga/Partneryoga8"

import {TweenMax, Power3} from 'gsap'

export default function PartnerYoga() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <PartnerYoga1></PartnerYoga1>
                        <PartnerYoga2></PartnerYoga2>
                        <PartnerYoga3/>
                </div>
                <div className="Gallery-Page-Row">
                        <PartnerYoga4></PartnerYoga4>
                        <PartnerYoga5></PartnerYoga5>
                        <PartnerYoga6/>
                </div>
                <div className="Gallery-Page-Row">
                        <PartnerYoga7></PartnerYoga7>
                        <PartnerYoga8></PartnerYoga8>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
