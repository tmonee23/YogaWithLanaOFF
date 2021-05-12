import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionSpringrolls() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Raw Vegan Spring Rolls
                </h3>
                <h4 className="recipe-underHeader">
                with Peanut Source
                </h4>
                <img alt="springrolls-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/spring.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-instructions">You can choose your vegetables. I’ve taken spinach, red bell peppers, cucumber, carrots and red cabbage for an extra crunch. Other options might include avocado, red onions, herbs, lettuce, kale, flat green beans, etc. Feel free to add some mushrooms, tempeh or tofu for extra protein or chili pepper for extra spiciness.</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                    Thinly slice whatever veggies you are using before you start assembling the rolls. Soak the rice paper wrappers in hot water or according to instructions on the package until they are soft but still slightly firm.
Put your first wrapper on a cutting board and place a small portion of your vegetable slices very tightly on the bottom lower third of the wrapper. Roll everything tightly.
Enjoy the fresh spring rolls with delicious Peanut or Soy Sauce!
                    </li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients for the peanut sauce:</li>
                    <li className="recipe-list-item">1 cm fresh ginger</li>
                    <li className="recipe-list-item">1 small clove, garlic</li>
                    <li className="recipe-list-item">½ cup crushed peanuts or peanut butter</li>
                    <li className="recipe-list-item">2 tbs soy sauce</li>
                    <li className="recipe-list-item">1 tbs lime juice</li>
                    <li className="recipe-list-item">1 – 2 tsp organic agave syrup or brown sugar</li>
                    <li className="recipe-list-item">½ tsp crushed red pepper flakes</li>
                    <li className="recipe-list-item">A bit of almond or coconut milk</li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
