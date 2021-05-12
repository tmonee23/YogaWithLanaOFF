import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function CoachingOne() {

    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, .5, {scale:0, ease:Power3.easeInOut})
        TweenMax.to(picture, .7, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
        <div>
            <img ref={el => picture = el} className="coachingFacePicture" alt="Face" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/CoachingPage/LanaCoaching01.jpg"></img>
        </div>
    )
}
