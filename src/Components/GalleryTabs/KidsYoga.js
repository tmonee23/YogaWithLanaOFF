import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import KidsYoga1 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga1"
import KidsYoga2 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga2"
import KidsYoga3 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga3"
import KidsYoga4 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga4"
import KidsYoga5 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga5"
import KidsYoga6 from "../Photocomponents/Gallery/Kids Yoga/Kidsyoga6"


export default function KidsYoga() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <KidsYoga1></KidsYoga1>
                        <KidsYoga2></KidsYoga2>
                        <KidsYoga3/>
                </div>
                <div className="Gallery-Page-Row">
                        <KidsYoga4></KidsYoga4>
                        <KidsYoga5></KidsYoga5>
                        <KidsYoga6/>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
