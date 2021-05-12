import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function NinthPicture() {
    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, 1, {scale: 0, ease:Power3.easeInOut})
        TweenMax.to(picture, 1, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
    <div className="poseCard">
        <img ref={el => picture=el} className="firstPose" alt="Ninth Pose" 
        src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/10.+Warrior+II+Yoga+Card.jpg">
        </img>
    </div>
    )
}
