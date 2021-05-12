import React, {useEffect, useRef} from "react"

import {TweenMax, Power3} from 'gsap'

export default function Gallery() {

    let pageContainer = useRef(null)

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])

    return (
        <div className="page-container">
            <div ref={el => pageContainer = el}  className="gallery-content">
        <div className="img-link-container">
        <div className="Image-Link">
                <a href="/gallery-anti-gravity-yoga">
                    <div className="link-pic">
                    <img alt="antigravity-yoga-1-pic" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/AntiGravityYoga/11022011-FloatingYoga-w-s-1.jpg"></img>
                    </div>
                    Anti Gravity Yoga
                    </a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-international-yoga-day">
                <div className="link-pic">
                <img alt="international-day-1-pic" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/International+Yoga+Day%2C+Belgrade%2C+2017/WP_20170617_001-1024x768.jpg"></img>
                    </div>
                    International Yoga Day
                </a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-kids-yoga">
                <div className="link-pic">
                <img alt="kids-yoga-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Kids+Yoga/IMG_3521s.jpg"></img>
                    </div>
                    Kids Yoga
                </a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-partner-yoga">                
                <div className="link-pic">
                <img alt="partner-yoga-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Partner+Yoga/FenniLana-Feb26-2012_1451s1.jpg"></img>
                    </div>
                    Partner Yoga
                    </a>
            </div>

        </div>


        <div className="img-link-container">

        <div className="Image-Link">
                <a href="/gallery-yoga-classes-belgrade">
                <div className="link-pic">
                <img alt="belgrade-classes-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Yoga+in+Belgrade/IMG-small-20170527-1sm.jpg"></img>
                    </div>
                    Yoga Classes Belgrade</a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-yoga-classes-jakarta">
                <div className="link-pic">

                <img alt="classes-jakarta-1-pic" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Classes+Pondok+Indah%2C+Jakarta%2C+May+2013/DSC_0316.jpg"></img>
                </div>

                    Yoga Classes Jakarta,
                    </a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-yoga-classes-2011">
                <div className="link-pic">

                <img alt="classes-2011-img-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Classes+2011/SAM_0444s.jpg"></img>
</div>
                    Yoga Classes 2011</a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-yoga-retreats">
                <div className="link-pic">

                <img alt="retreats-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Retreats/IMG_0956s.jpg"></img>
</div>
                    Yoga Retreats</a>
            </div>
</div>


<div className="img-link-container">


<div className="Image-Link">
                <a href="/gallery-yoga-stops-trafficking">
                <div className="link-pic">

                <img alt="yoga-stops-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Yoga+Stops+Trafficking+-+108+Sun+Salutations/01Lana-1024x682.jpg"></img>
</div>
                    Yoga Stops Trafficking</a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-yoga-studio">
                <div className="link-pic">

                <img alt="yoga-studio-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Yoga+Studio/IMG_0044-2.jpg"></img>
</div>
                    Yoga Studio</a>
            </div>

            <div className="Image-Link">
                <a href="/gallery-yoga-teachers-friends">
                <div className="link-pic">

                <img alt="teachers-friends-pic-1" src="https://momswebsitereal.s3.eu-central-1.amazonaws.com/Gallery/Yoga+Teachers+%26+Friends/Ashram-LanaMapi-s.jpg"></img>
</div>
                    Yoga Teachers & Friends</a>
            </div>
</div>
</div>
        </div>
    )
}
