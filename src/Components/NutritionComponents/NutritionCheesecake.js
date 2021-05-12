import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionCheesecake() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Raw Vegan Blueberry Cheesecake
                </h3>
                <h4 className="recipe-underHeader">
                (Gluten Free, Sugar Free)
                </h4>
                <img alt="cheesecake-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/cheese.jpg" className="recipe-picture"></img>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients for the crust:</li>
                    <li className="recipe-list-item">½ cup raw pecans</li>
                    <li className="recipe-list-item">½ cup almond flour or almonds</li>
                    <li className="recipe-list-item">5-6 soft pitted dates</li>
                    <li className="recipe-list-item">2 tablespoons coconut oil</li>
                    <li className="recipe-list-item">3 tablespoons water</li>
                    <li className="recipe-list-item">¼ teaspoon sea salt</li>
                    <li className="recipe-list-item">Cinnamon (optional)</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients for the cheese layer:</li>
                    <li className="recipe-list-item">1 or 2 cups raw cashews soaked in cold water for an hour or better overnight</li>
                    <li className="recipe-list-item">4 tablespoons melted and cooled coconut oil (use refined coconut oil if you want no coconut flavor)</li>
                    <li className="recipe-list-item">Squeezed juice of 1 lemon</li>
                    <li className="recipe-list-item">Grated zest of 1 lemon</li>
                    <li className="recipe-list-item">1 ripe banana (optional)</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">You can prepare the Blueberry or Lemon Layer on top.</li>
                    <li className="list-header">For the blueberry layer:</li>
                    <li className="recipe-list-item">1 cup fresh or frozen blueberries thawed, if frozen</li>
                    <li className="recipe-list-item">1 tablespoon fresh lemon juice</li>
                    <li className="recipe-list-item">1 tablespoon chia seeds</li>
                    <li className="list-header">For the Lemon Layer:</li>
                    <li className="recipe-list-item">2 cups cashews</li>
                    <li className="recipe-list-item">⅓ cup coconut butter</li>
                    <li className="recipe-list-item">grated zest of 2 lemons</li>
                    <li className="recipe-list-item">squeezed juice of one lemon</li>
                    <li className="recipe-list-item">4 tbsp Agave syrup (optional)</li>
                    <li className="recipe-list-item">½ tsp turmeric</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                    Add the pecans, almonds or almond flour, pitted dates, coconut oil, cinnamon and salt to a food processor or high-powered blender and pulverize until it comes together into a sort of sticky dough, with small pecan bits remaining. Don’t over process, or it’ll turn into nut butter! Press the pecan date dough evenly along the bottom of the prepared pan.
                    </li>
                    <li className="recipe-instructions">
                    In the same food processor or high-powered blender (no need to wash between), combine all of the filling ingredients except for the blueberries and blend until the mixture is silky smooth and creamy. Scrape down the sides as necessary. You may need to add a bit more coconut milk or lemon juice to get it to blend smoothly. Once it’s smooth, taste the mixture and adjust the sweetness/tartness levels by adding some maple syrup, vanilla, or lemon juice, if desired.                    </li>
                    <li className="recipe-instructions">
                    Pour the filling into the prepared pan over the pecan crust. Smooth out the top and tap the pan hard against the counter a few times to release any air bubbles. Place in the freezer.                    </li>
                    <li className="recipe-instructions">
                    Rinse out the blender, and add the fresh blueberries, lemon juice and chia seeds to it. Blend until smooth, and then pour over the other layers.
Place in the freezer to set for at least 3 hours or until completely firm before slicing and serving. Keep your knife under hot water to warm it up before cutting the cheesecake with the still-hot (dried) knife.                    </li>
                    <li className="recipe-instructions">
                    Serve frozen or let them thaw at room temperature for 10-15 minutes before serving. Store in the freezer for up to 2 weeks.                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
