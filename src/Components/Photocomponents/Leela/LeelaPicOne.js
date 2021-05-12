import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function LeelaPicOne() {

    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, .5, {scale:0, ease:Power3.easeInOut})
        TweenMax.to(picture, .7, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
        <div>
            <img ref={el => picture = el} className="leelaFirstPic" alt="first" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/LeelaGame/0-02-05-12f6d3c811f902b7070b34ff6c22c19b8b57f0d060a25447bd245613e9c96ba1_930f3f70.jpg"></img>
        </div>
    )
}
