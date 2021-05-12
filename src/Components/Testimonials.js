import React, {useEffect, useRef} from 'react'

import {TweenMax, Power3} from 'gsap'

import FirstPhoto from "../Components/Photocomponents/Testimonials/testimonialsFirstPhoto"
import SecondPhoto from "../Components/Photocomponents/Testimonials/tesimonialsSecondPhoto"
import ThirdPhoto from "../Components/Photocomponents/Testimonials/testimonialsThirdPhoto"
import FourthPhoto from "../Components/Photocomponents/Testimonials/testimonialsFourthPhoto"
import FifthPhoto from "../Components/Photocomponents/Testimonials/testimonialsFifthPhoto"
import SixthPhoto from "../Components/Photocomponents/Testimonials/testimonialsSixthPhoto"
import SeventhPhoto from "../Components/Photocomponents/Testimonials/testimonialsSeventhPhoto"


export default function Testimonials() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    const testimonialsDB = [
                            {
                                id:"Claudia Brueggen (Germany), 2015", 
                                text:"I feel very blessed and happy that I had a chance to find my passion for Yoga through Lana Harbers. During my Expat life in Jakarta I came closer to Yoga and then I found in Lana such a wonderful Yoga teacher who really changed my life in many ways. To learn more about my body and what my body is able to do is still a great experience and miracle to me. Yoga is a way of teaching the colors of life to me every day. It challenges me, helps to stay flexible and fit, gives me inner peace, the strong will to go on and reach more. And it transformed my body into a great looking shape. Yoga is now a very important thing in my life and I try to practice every day! Thank you Lana, Namaste:-)  ", 
                                photo: <FirstPhoto/>
                            },
                            {
                                id:"Joanna (USA), June 2013, Jakarta", 
                                text:"Dear Lana, I had some good and some bad experiences with yoga, but your classes have by far exceeded my expectations and taught me more than I imagined! Your patience and explanations helped me to be more confident and trust in myself to be able to do more difficult poses. Thank you for really TEACHING me, opening my mind, and expanding my horizons! I am SO grateful for our time together!", 
                                photo: <SecondPhoto/>
                            },                            
                            {
                                id:"Kathleen (USA), March 2013, Jakarta", 
                                text:"HANK YOU Lana for such great classes. You are a fantastic teacher and spiritual guide – you have no idea how much you have changed my life for the better.",
                                photo:  <ThirdPhoto/>
                            },
                            {
                                id:"Amanda (USA), May 2013, Jakarta",                                
                                text:"Dearest Lana, How can I ever begin to thank you for the enormous positive impact you have had on my and my husbands life here in Jakarta? When I think of you, I think of the word “peace” and ” acceptance” and it makes me smile. You have guided me through a yoga life that is very different from what I have experienced before. You have shown the importance of spirituality within yoga and this has allowed my thoughts and perspectives to change in the past two years! You have given me inspiration to live out some of my dreams that i otherwise may have passed over as “just my hobby”. Good Luck with your next adventure in life! I am sure whatever it brings, you will bring to it light and good energy.", 
                                photo:  <FourthPhoto/>
                            },
                            {
                                id:"Zdenek (Austria), May 2013, Jakarta", 
                                text:"Dear Lana, It is about 4 years since I started to visit your “Yoga classes for Men“ in Country Woods. I stepped into the unknown territory, but the way you taught us yoga was irresistible for me and I have followed with joy your lessons until today. I became passionate about yoga and included all what I had learned into my morning procedure after swimming. Yoga became my habit every morning and my life changed. Every day starts with the fresh and peaceful mind since then. I am sad that you are leaving, but I am grateful for having been your student for years! I will miss you and your lessons but you will remain in my mind and with me every morning when I am practicing yoga. Thank you for all you have taught me! This is one of the main valuable gifts I ever received!", 
                                photo:  <FifthPhoto/>
                            },
                            {
                                id:"Lori Orton (USA), September 2012, Jakarta", 
                                text:"Taking yoga from Lana is an opportunity not to be missed. She will welcome you with an open heart at any level then proceed to help you improve in ways you never thought possible. It is impossible to leave after a class with Lana without feeling renewed, energized, and confident to face whatever comes your way that day.  She is a master yoga teacher!", 
                                photo:  <SixthPhoto/>
                            },
                            {
                                id:"Peter (USA), October 2011, Jakarta", 
                                text:"Living in Jakarta can get somewhat dark spiritually, sessions with Lana have been somewhat of a bright light shining through.", 
                                photo:  <SeventhPhoto/>
                            },
                            {
                                id:"Lori Orton (USA), September 2012, Jakarta", 
                                text:"Taking yoga from Lana is an opportunity not to be missed. She will welcome you with an open heart at any level then proceed to help you improve in ways you never thought possible. It is impossible to leave after a class with Lana without feeling renewed, energized, and confident to face whatever comes your way that day.  She is a master yoga teacher! ", 
                            },
                            {
                                id:"Faten Halab, February 2013, Jakarta", 
                                text:"Dear Lana, I have been trying to get into Yoga for the last 10 years. I tried different methods, schools, teachers but I could never get myself to like it. You made me fall in love with yoga. If I miss any of my yoga classes with you, I feel lost. Thank you for being such a great teacher.", 
                            },
                            {
                                id:"Jane Macphail (Canada), June 2012, Jakarta", 
                                text:"Dear Lana, Thank you so much for all your joy and passion in teaching me. ou are my yoga guide and I will think of you always when I practice. Continue to live in the delight of this and your own glorious philosophy and spiritual awakening.", 
                            },
                            {
                                id:"Line from Norway, 22.11.2012, Jakarta", 
                                text:"Thank you Lana! One of the reasons I decided to take a break from work was that I wanted to try Yoga once again several attempts in the past. You are the 1st teacher that has inspired me to continue and whose Yoga classes I have ever left feeling Great and without horrible headaches afterwards 🙂 You are a wonderful teacher and person! I am so grateful that I came to learn with you.", 
                            },
                            {
                                id:"Kathleen (USA), June 2013, Jakarta", 
                                text:"I have to tell you Lana – I came home and practiced forearm balance and was able to get up 6 times! The last time I got up with out the wall for a very very brief few seconds 🙂 Ever since I got the Bagavad Gita it’s all started to click for some reason! Thank you for being such a supportive encouraging and challenging teacher – you’ve made me a better yogi 🙂", 
                            }
                            ]
           

    return (
        <div  className="page-container">
            <div ref={el => pageContainer = el} className="test-container">
            {testimonialsDB.map( testimonial => {
                    return(
                        <div>
                            <div className="test-box">
                            <div className="test-name">
                                <div>{testimonial.id}</div>
                                </div>
                            <div className="test-content">
                            <div>{testimonial.text}</div>
                            <br></br>
                            <div>{testimonial.photo}</div>
                            </div>

                            </div>
                        </div>
                    )
            })}
            </div>
        </div>
    )
}
