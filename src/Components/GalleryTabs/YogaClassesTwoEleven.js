import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaClasses1 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011one";
import YogaClasses2 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011two";
import YogaClasses3 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011three";
import YogaClasses4 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011four";
import YogaClasses5 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011Five";
import YogaClasses6 from "../Photocomponents/Gallery/Yoga Classes 2011/Classes2011Six";

export default function YogaClassesTwoEleven() {

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
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
