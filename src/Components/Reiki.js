import React, {useEffect, useRef} from 'react'
import RosePhoto from "./Photocomponents/Reiki/Rosephoto"
import SecondPhoto from "./Photocomponents/Reiki/SecondReikiPhoto"

import {TweenMax, Power3} from "gsap"

export default function Reiki() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return(
        <div className="page-container">
            <div ref={el => pageContainer = el} className="reiki-content">
                <div className="reiki-photo-container">
                <RosePhoto/>

                </div>
            <div className="openingTextContainerReiki">
            <p className="reikiText">
                Reiki is "energy medicine". It is a system of healing and spiritual development.
                In Japanese, "Rei" means "Universal Intelligence" and "Ki" means "non-physical energy" or "sacred pulsation".
            </p>
            <p className="reikiText">
                It can help return us to a balanced functioning on all levels - 
                physical, mental, emotional, spiritual and social - regardless
                of our age or state of health.
            </p>
            <p className="reikiText">
                Reiki supports our wellbeing and strenghtens our natural ability to heal.
            </p>
            <p className="reikiText">
                - Namaste, Lana
            </p>
            <a className="reiki-link" href="/reiki-workshops">
                Click here for more information on reiki workshops!
            </a>
            </div>
            <div className="reiki-photo-container">
            <SecondPhoto/>

                </div>

            </div>
            <div>
                <div></div>
            </div>
        </div>
    )
}