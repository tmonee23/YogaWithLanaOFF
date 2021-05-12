import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionBites() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Power Mini-Bites:
                </h3>
                <h4 className="recipe-underHeader">
                    (Creamy, Vegan & Low Fat)
                </h4>
                <img alt="bites-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/mini_bite.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                    Dates with almonds blended & rolled into small balls. Top with a fresh blackberry or any other berry & enjoy a sweet bite with your afternoon tea.
                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
