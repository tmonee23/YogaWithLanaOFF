import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionAlmond() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            Almond
        </div>
    )
}
