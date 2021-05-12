import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

export default function LeelaPicTwo() {

    let picture = useRef(null)

    useEffect(() => {
        TweenMax.from(picture, .5, {scale:0, ease:Power3.easeInOut})
        TweenMax.to(picture, .7, {opacity: 1, ease:Power3.easeIn})
    }, []);

    return (
        <div>
            <img ref={el => picture = el} className="leelaSecondPic" alt="second" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/LeelaGame/0-02-05-be5044942ae441be435b88ddd2d75f7e6c43174ef45899c570f270be7d01226b_4b9779d8.jpg"></img>
        </div>
    )
}
