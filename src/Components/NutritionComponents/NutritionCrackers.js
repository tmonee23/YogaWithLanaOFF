import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionCrackers() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                RAW VEGAN CRACKERS
                </h3>
                <img alt="crackers-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/5.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">200 gr Flax seeds</li>
                    <li className="recipe-list-item">200 gr Buckwheats</li>
                    <li className="recipe-list-item">1 mid-sized tomato (peeled)</li>
                    <li className="recipe-list-item">1 Tbsp garlic</li>
                    <li className="recipe-list-item">1/4 onion (diced)</li>
                    <li className="recipe-list-item">1 Tbsp Oregano</li>
                    <li className="recipe-list-item">1 Tbsp Basil</li>
                    <li className="recipe-list-item">1 Tbsp Thyme</li>
                    <li className="recipe-list-item">1 pinch of salt</li>
                    <li className="recipe-list-item">1 Tsp Olive Oil</li>
                    <li className="recipe-list-item">1 pinch of chilli powder</li>

                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="list-header">Step 1:</li>
                    <li className="recipe-instructions">
                            Soak buckwheat and flax seeds in water overnight
                    </li>
                    <li className="list-header">Step 2:</li>
                    <li className="recipe-instructions">
                            Add all other ingredients into a mixer with the soaked mix. Mix until smooth
                    </li>
                    <li className="list-header">Step 3:</li>
                    <li className="recipe-instructions">
                            Place the mixed dough onto a baking sheet and spread thinly.
                    </li>
                    <li className="list-header">Step 4:</li>
                    <li className="recipe-instructions">
                            Place into an oven or dehydrator at low temperature for 2-3 hours. 
                        
                    </li>
                    <li className="list-header">Step 5:</li>
                    <li className="recipe-instructions">
                            Cut into pieces and continue drying until golden brown. 

                    </li>
                    <li className="list-header">Step 6:</li>
                    <li className="recipe-instructions">
                            Store the crackers in a refrigerator, after they have cooled down.
                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
