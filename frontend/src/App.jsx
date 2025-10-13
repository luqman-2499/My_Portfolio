import { useEffect } from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"


import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
import SkillSection from "./components/SkillSection"


export default function App() {


  useEffect(() => {

    // REGISTER SCROLL TRIGGER PLUGIN 
    gsap.registerPlugin(ScrollTrigger)

    // REFRESH SCROLLTRIGGER WHEN PAGE IS FULLY LOADED 
    ScrollTrigger.refresh()

    // CLEAN UP SCROLLTRIGGER ON COMPONENT UNMOUNT 
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ()) 
    }

  }, [])


  return (
    <>

      <Header/>
      <HeroSection/>
      <CustomCursor/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
      <ProgressBar/>

    </>
  )
}