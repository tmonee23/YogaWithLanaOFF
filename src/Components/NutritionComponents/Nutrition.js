import React, {useEffect, useRef} from 'react'
import {TweenMax, Power3 } from "gsap"

export default function Nutrition() {
    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div   className="page-container">
            <div ref={el => pageContainer = el} className="nutrition-container">

            <img className="nutrition-headerPic" alt="nutrition-header" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/1.jpg"></img>

            <div className="nutrition-textContainer">
            <p className="nutrition-mainText">Creativity is a very important component in our life. Go to the kitchen and simply add some new dishes to your weekly Menu. Delight yourself and your beloved ones by combining new and known ingredients.</p>
            <p className="nutrition-mainText">Boost the sense of pleasure with a variety of new tastes that, inevitably, will positively affect the quality of your life!</p>
            <p className="nutrition-mainText">Here are some of my favorites for the season.</p>
            <p className="nutrition-mainText">Hope You Get Inspired!</p>
            </div>
            <div className="nutrition-linkContainer">
                <div className="nutrition-linkRow">
                    <a href="/nutrition-guac" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/3.jpg"></img>
                        <p>Guacomole</p>
                    </a>
                    <a href="/nutrition-lentils" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition2" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/4.jpg"></img>
                        <p>Red Lentils with Coconut Curry</p>
                    </a>
                    <a href="/nutrition-crackers" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition3" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/5.jpg"></img>
                        <p>Raw Vegan Crackers</p>
                    </a>
                </div>
                <div className="nutrition-linkRow">
                    <a href="/nutrition-rice" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition4" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/8.jpg"></img>
                        <p>Vegan Lunch with Red Rice</p>
                    </a>
                    <a href="/nutrition-curry" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition5" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/9.jpg"></img>
                        <p>Green Pea-Cashew Coconut Curry with Sambal</p>
                    </a>
                    <a href="/nutrition-soup" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition6" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/10.jpg"></img>
                        <p>Light Summer Soup</p>
                    </a>
                </div>
                <div className="nutrition-linkRow">
                    <a href="/nutrition-gado" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition7" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/11.jpg"></img>
                        <p>Gado-Gado</p>
                    </a>
                    <a href="/nutrition-cheesecake" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition8" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/cheese.jpg"></img>
                        <p>Raw Vegan Blueberry Cheesecake</p>
                    </a>
                    <a href="/nutrition-bites" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition9" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/mini_bite.jpg"></img>
                        <p>Mini Power Bites</p>
                    </a>
                </div>
                <div className="nutrition-linkRow">
                    <a href="/nutrition-springrolls" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/spring.jpg"></img>
                        <p>Raw Vegan Spring Rolls</p>
                    </a>
            {/*               
            <a href="" className="nutrition-link">
                        <img className="nutrition-linkImage" alt="nutrition1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Nutrition/cheese+(1).jpg"></img>
                        <p>Almond Cheese</p>
                    </a>
                    */}       
                </div>
            </div>
            </div>

        </div>

    )
}
