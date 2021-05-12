import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionSoup() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Light Summer Soup
                </h3>
                <h4 className="recipe-underHeader">
                    (Creamy, Vegan & Low Fat)
                </h4>
                <img alt="soup-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/10.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">50 gr of Green Curry Paste</li>
                    <li className="recipe-list-item">1 Tbsp of Soybean Oil</li>
                    <li className="recipe-list-item">Mushrooms</li>
                    <li className="recipe-list-item">Onions</li>
                    <li className="recipe-list-item">Garlic</li>
                    <li className="recipe-list-item">Carrots</li>
                    <li className="recipe-list-item">1 cup + 120 ml of Coconut Milk or Vegetable Stock</li>
                    <li className="recipe-list-item">1 Pinch of Salt</li>
                    <li className="recipe-list-item">1 Pinch of Pepper</li>
                    <li className="recipe-list-item">Green Onions</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                        Place Green Curry Paste and Soybean Oil in a pot and quickly stir-fry. Add mushrooms, onions, garlic, carrots and continue cooking.
Then add one cup of coconut milk (or vegetable stock).
You may add rice noodles or gluten-free noodles, as well as chard or watercress.
Add another ½ cup (120ml) of coconut milk or (or vegetable stock).
When ready, season with Sea Salt, Pepper and Green onions.
Enjoy!
                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
