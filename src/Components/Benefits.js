import React from 'react'
import {useState, useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

import CentralPicture from "../Components/Photocomponents/Benefits/CentralPicture"
import FirstPose from "../Components/Photocomponents/Benefits/FirstPose"
import SecondPose from "../Components/Photocomponents/Benefits/SecondPose"
import ThirdPose from "../Components/Photocomponents/Benefits/ThirdPose"
import FourthPose from "../Components/Photocomponents/Benefits/FourthPose"
import FifthPose from "../Components/Photocomponents/Benefits/FifthPicture"
import SixthPose from "../Components/Photocomponents/Benefits/SixthPicture"
//import SeventhPose from "../Components/Photocomponents/Benefits/SeventhPose"
import EightPose from "../Components/Photocomponents/Benefits/EIghtPicture"
import NinthPose from "../Components/Photocomponents/Benefits/NinthPicture"
import TenthPose from "../Components/Photocomponents/Benefits/TenthPicture"
import EleventhPose from "../Components/Photocomponents/Benefits/EleventhPicture"
import TwelthPose from "../Components/Photocomponents/Benefits/TwelthPicture"
import ThirteenthPose from "../Components/Photocomponents/Benefits/ThirteenthPicture"
import FourteenthPose from "../Components/Photocomponents/Benefits/FourteenthPicture"

export default function Benefits() {

    let pageContainer = useRef(null)

    const [currentPose, setCurrentPose] = useState("empty")
    const picturePoses = [  {id: "one", display: <FirstPose/>}, 
                            {id: "two", display: <SecondPose/>}, 
                            {id: "empty", display: <CentralPicture/>},
                            {id: "three", display: <ThirdPose/>},
                            {id: "four", display: <FourthPose/>},
                            {id: "five", display: <FifthPose/>},
                            {id: "six", display: <SixthPose/>},
                            //{id: "seven", display: <SeventhPose/>},
                            {id: "eight", display: <EightPose/>},
                            {id: "nine", display: <NinthPose/>},
                            {id: "ten", display: <TenthPose/>},
                            {id: "eleven", display: <EleventhPose/>},
                            {id: "twelve", display: <TwelthPose/>},
                            {id: "thirteen", display: <ThirteenthPose/>},
                            {id: "fourteen", display: <FourteenthPose/>}
                        ]

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])



    return (
        <div  className="page-container">
            <div ref={el => pageContainer = el} className="benefitsContent">
                {picturePoses.map(pose => {
                    if(currentPose === "empty"){
                        if(pose.id === currentPose){
                            return(
                                <div key={pose.id} className="shownPoseContainer">
                                    {pose.display}
                                </div>
                            )
                        }else{
                            return(
                                <div key={pose.id}>
                                </div>
                            )
                        }
                    }else{
                        if(pose.id === currentPose){
                            return(
                                <div key={pose.id} className="shownPoseContainer">
                                    {pose.display}
                                    <button className="closePoseBtn" onClick={() => setCurrentPose("empty")}>Close</button>
                                </div>
                            )
                        }else{
                            return(
                                <div key={pose.id}>
                                </div>
                            )
                        }
                    }
                    
                })}
                <div className="buttonContainer">
                <button onClick={() => {onSelectPoseHandler("one")}} className="benefitsPoseButtonOne benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_144923.jpg">                
                </img>
                </button>
                <button onClick={() => {onSelectPoseHandler("two")}} className="benefitsPoseButtonTwo benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145107.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("three")}} className="benefitsPoseButtonThree benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145121.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("four")}} className="benefitsPoseButtonFour benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145154.jpg"></img>    
                </button>
                <button onClick={() => {onSelectPoseHandler("five")}} className="benefitsPoseButtonFive benefitsPoseButton">
                    <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/three.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("six")}} className="benefitsPoseButtonSix benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145237.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("eight")}} className="benefitsPoseButtonEight benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145348.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("nine")}} className="benefitsPoseButtonNine benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145312.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("ten")}} className="benefitsPoseButtonTen benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_144942.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("eleven")}} className="benefitsPoseButtonEleven benefitsPoseButton">
                                        <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/one.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("twelve")}} className="benefitsPoseButtonTwelve benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145436.jpg"></img> 
                </button>
                <button onClick={() => {onSelectPoseHandler("thirteen")}} className="benefitsPoseButtonThirteen benefitsPoseButton">
                <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/BeneftisIcons/Screenshot_20200923_145414.jpg"></img>
                </button>
                <button onClick={() => {onSelectPoseHandler("fourteen")}} className="benefitsPoseButtonFourteen benefitsPoseButton">
                    <img className="benefitsButtonIcon" alt="firstBut" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/BenefitsPictures/two.jpg"></img>

                </button>
                </div>
                
            </div>
        </div>
    )


    function onSelectPoseHandler(poseNumber){
        setCurrentPose(poseNumber);
    }
}
