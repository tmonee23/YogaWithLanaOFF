import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import YogaFriend1 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends1"
import YogaFriend2 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends2"
import YogaFriend3 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends3"
import YogaFriend4 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends4"
import YogaFriend5 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends5"
import YogaFriend6 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends6"
import YogaFriend7 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends7"
import YogaFriend8 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends8"
import YogaFriend9 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends9"
import YogaFriend10 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends10"
import YogaFriend11 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends11"
import YogaFriend12 from "../Photocomponents/Gallery/Yoga Teachers & Friends/TeachersFriends12"


export default function YogaTeachersFriends() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
                        <div ref={el => pageContainer = el} className="Gallery-Page-Container">
                <div className="Gallery-Page-Row">
                        <YogaFriend1></YogaFriend1>
                        <YogaFriend2></YogaFriend2>
                        <YogaFriend3/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaFriend4></YogaFriend4>
                        <YogaFriend5></YogaFriend5>
                        <YogaFriend6/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaFriend7></YogaFriend7>
                        <YogaFriend8></YogaFriend8>
                        <YogaFriend9/>
                </div>
                <div className="Gallery-Page-Row">
                        <YogaFriend10></YogaFriend10>
                        <YogaFriend11></YogaFriend11>
                        <YogaFriend12/>
                </div>
                <div className="Gallery-Page-Row">
                <a className="backButton" href="/Gallery">Back</a>     
                </div>
            </div>
        </div>
    )
}
