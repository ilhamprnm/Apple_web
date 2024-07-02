import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState, useEffect } from "react"
import { heroVideo, smallHeroVideo } from "../utils"


const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else { 
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=> {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    }
    )
  }, [])


  return (
    <section className=" mt-14 w-full h-[100vh] bg-black relative"> 
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted  key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero