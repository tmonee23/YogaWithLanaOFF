import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from "gsap"


export default function Reikiworkshops() {

    let pageContainer = useRef(null);

    useEffect(() => {
        TweenMax.from(pageContainer, 1, {opacity:0, ease:Power3.easeInOut})
    }, [])
    
    return (
        <div className="page-container">
            <div ref={el => pageContainer = el} className="reiki-workshop-content">
                <p className="workshop-header">
                    Reiki I Degree (Traditional Dr Usui system).
                    </p>
                    <p className="workshop-text">
                    The participants are introduced into the Energy system of a Human Body, such as the Grounding Cord, Energy Vessels -Nadis or Meridians, Energy Centers or Chakras, Energy Field or the Aura). The participants receive a traditional initiation into the Reiki Practice that activates their Energy Body and practice the techniques of Reiki Channeling through hands on.
                    </p>
                    <p className="workshop-header">
                    Reiki II Degree (Traditional Dr Usui system).
                    </p>
                    <p className="workshop-text">
                    This Level is recommended to be taken 3-6 months after the Reiki I Degree initiation. This Level of Initiation will further increase the flow of the Astral Light through the practitioner who acts as a channel of the Divine Light and Love. This in turn stimulates the further activation of the pineal and pituitary glands, that promotes the unfolding of the extrasensory perception gifts. The participants learn the traditional ways of transmitting Reiki on Distance, heal the blockages of the Past, promote the consciousness of “Here and Now” and the tools of co-creating the future.
                    </p>
                    <p className="workshop-text">
                    Rainbow Reiki: Working with The Body of Light (Developed by Toa Toa Walter Luebeck, Grandmaster & Lineage bearer of Rainbow Reiki – Spiritual Energy Work for Aquarians)
                    </p>
                    <p className="workshop-text">
                    Possible only after the initiation into the Reiki II degree. This powerful seminar will further activate the Body of Light, give additional keys for the deep integration of the Soul into Matter and bring more Light and Understanding on the Multidimensional Self interactions on the Astral Level.                    
                    </p>
                    <p className="workshop-header">
                    Reiki IIIA, Teacher’s Level (Traditional Dr Usui system).
                    </p>
                    <p className="workshop-text">
                    This level is traditionally recommended 3-4 years after the Reiki II degree initiation. The sacred teachings of initiations into Reiki levels I and II are transferred to the Reiki practitioner.                    </p>
                    <p className="workshop-header">
                    Reiki IIIB, Master-Teacher’s Level (Traditional Dr Usui system).
</p>
                    <p className="workshop-text">
                    REIKI practice is one of the most efficient and gentle ways towards enlightenment. It incorporates the ancient sacred teachings and techniques towards awakening of the Body of Light, the most subtle body (or the Astral Bridge) available to the human race awareness at the moment, that is synchronized with the Spiritual Heart Center opening. The practice takes its roots in Lemurian civilization, shamanism and esoteric Buddhism. Dr Usui had fulfilled his life’s mission by rediscovering the practice. Many contemporary spiritual Masters contributed their knowledge to the Sacred River of Reiki.                    </p>
                    <a className="backToReikiButton" href="/Reiki">Back</a>
                    

            </div>
        </div>
    )
}
