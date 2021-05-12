import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionRice() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Vegan Lunch with Red Rice
                </h3>
                <img alt="rice-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/8.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">Red Rice boiled and seasoned with a bit of garlic, salt and coconut oil.</li>
                    <li className="recipe-list-item">Baked Carrot.</li>
                    <li className="recipe-list-item">Baked Beetroot.</li>
                    <li className="recipe-list-item">A Slice of Fresh Lime (or Lemon).</li>
                    <li className="recipe-list-item">Mixed Salad with Cherry Tomatoes, Minced Red Onion, Corn, finely chopped parsley (leaves), a dash of freshly grated black pepper and Sea Salt.</li>
                    <li className="recipe-list-item">Some Raspberries or Blackberries with make it taste complete!</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
