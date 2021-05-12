import React, {useEffect, useRef}  from 'react'
import {TweenMax, Power3 } from "gsap"


export default function NutritionCurry() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="recipe-container">
                <h3 className="recipe-header">
                Cashew-Green Pea Coconut Curry with Coconut Sambal
                </h3>
                <img alt="curry-recipe" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/9.jpg" className="recipe-picture"></img>
                <h3 className="recipe-header">
                Cashew-Green Pea Coconut Curry
                </h3>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">150g unsalted cashew nuts</li>
                    <li className="recipe-list-item">100g frozen green peas</li>
                    <li className="recipe-list-item">1 large onion, finely sliced</li>
                    <li className="recipe-list-item">1 cinnamon stick</li>
                    <li className="recipe-list-item">1 tsp fennel seeds, pounded</li>
                    <li className="recipe-list-item">3 garlic cloves, chopped</li>
                    <li className="recipe-list-item">1 green chili, sliced</li>
                    <li className="recipe-list-item">1 tsp red chili powder</li>
                    <li className="recipe-list-item">½ tsp turmeric powder</li>
                    <li className="recipe-list-item">1 tsp cumin powder</li>
                    <li className="recipe-list-item">2 tsp coriander powder</li>
                    <li className="recipe-list-item">1 tsp garam masala (optional)</li>
                    <li className="recipe-list-item">A tin of coconut milk</li>
                    <li className="recipe-list-item">Salt to taste</li>
                    <li className="recipe-list-item">2 Tbs vegetable oil</li>

                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                    Soak the cashew nuts for up to 2 hours to return them back to a refreshed state. Using a skillet or a deep frying pan heat the oil over a medium temperature and slip in the pounded fennel seeds followed by the cinnamon stick, stir for a minute then add the garlic, green chili and onion and cook until the onion has turned a toffee color at the edges and the garlic is yielding its aroma. Turn the heat down to low, spoon in the cashew nuts and toss around the pan coating them with the onion and aromatics for a couple of minutes. Tip in the chili powder, turmeric, cumin and coriander powder and season with salt and sauté for 2 minutes. Pour in the coconut milk and garam masala and simmer for 10 minutes, stirring regularly and you’ll notice the mix will turn a warm yellow ochre, now add the frozen peas and cook for a further 5 minutes making sure the peas remain bright perky and jewel like
                    </li>
                </ul>
                <h3 className="recipe-header">
                Coconut Sambal
                </h3>
                <ul className="recipe-list">
                    <li className="list-header">Ingredients:</li>
                    <li className="recipe-list-item">2 shallots, chopped</li>
                    <li className="recipe-list-item">2 cloves of garlic, chopped</li>
                    <li className="recipe-list-item">3 large red chilies, seeds removed, chopped</li>
                    <li className="recipe-list-item">1×3 cm ginger, finely chopped</li>
                    <li className="recipe-list-item">3 lime leaves, shredded</li>
                    <li className="recipe-list-item">2 tbsp lime juice</li>
                    <li className="recipe-list-item">1 pinch of Curcuma (optional)</li>
                    <li className="recipe-list-item">2 tbsp vegetable oil</li>
                    <li className="recipe-list-item">1 tsp salt</li>
                    <li className="recipe-list-item">150 g desiccated coconut, or grated coconut</li>
                </ul>
                <ul className="recipe-list">
                    <li className="list-header">Instructions:</li>
                    <li className="recipe-instructions">
                    For the sambal, place the shallots, garlic, chilies, ginger, curcuma, lime leaves and lime juice in a food processor. Add the oil and salt and blend until smooth.
Transfer the mixture to a saucepan and cook for 6 minutes, over a medium heat, stirring occasionally.
Stir in the coconut together with 120ml of cold water and continue cooking until most of the liquid has been absorbed, but the sambal is still quite moist.                    </li>
                </ul>
                <a className="backButton" href="/nutrition">Back</a>
            </div>
        </div>
    )
}
