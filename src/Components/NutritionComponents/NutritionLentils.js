import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionLentils() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                    Red Lentils with Coconut Milk & Curry
                </h3>
                <h4 className="recipe-underHeader">
                    (Creamy, Vegan & Low Fat)
                </h4>
                <img alt="lentils-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/4.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                            Boil Red Lentils in water.
                            When ready, add Coconut Milk and a bit of Curry Powder.
                            Blend in a mixer.
                            Season with Sea Salt and Sweet Paprika Powder.
                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
