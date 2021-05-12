import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionGuac() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                    GUACAMOLE
                </h3>
                <img alt="guac-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/3.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">2 ripe avocados.</li>
                    <li className="recipe-list-item">1/2 teaspoon Sea salt.</li>
                    <li className="recipe-list-item">1 Tbsp of fresh lime juice (or lemon).</li>
                    <li className="recipe-list-item">2 Tbsp to 1/4 cup of minced red onion or thinly sliced green onion.</li>
                    <li className="recipe-list-item">1-2 serrano chiles, stems and seeds removed, minced.</li>
                    <li className="recipe-list-item">2 tablespoons cilantro or parsley (leaves), finely chopped.</li>
                    <li className="recipe-list-item">Several cherry tomatoes.</li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
