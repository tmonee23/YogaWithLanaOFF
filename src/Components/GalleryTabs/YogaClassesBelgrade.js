import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaClasses1 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses1"
import YogaClasses2 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses2"
import YogaClasses3 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses3"
import YogaClasses4 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses4"
import YogaClasses5 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses5"
import YogaClasses6 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses6"
import YogaClasses7 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses7"
import YogaClasses8 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses8"
import YogaClasses9 from "../Photocomponents/Gallery/Yoga in Belgrade/BelgradeClasses9"


export default function YogaClassesBelgrade() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
                        <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <YogaClasses1></YogaClasses1>
                        <YogaClasses2></YogaClasses2>
                        <YogaClasses3/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaClasses4></YogaClasses4>
                        <YogaClasses5></YogaClasses5>
                        <YogaClasses6/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaClasses7></YogaClasses7>
                        <YogaClasses8></YogaClasses8>
                        <YogaClasses9/>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
