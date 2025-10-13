import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import ContactForm from "./ContactForm";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  const sectionRef = useRef(null)
  const circleRef = useRef(null)
  const initialTextRef = useRef(null)
  const contentWrapperRef = useRef(null)
  const contentTextRef = useRef(null)

  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Reset initial states
    gsap.set(circleRef.current, {
      scale: 1,
      opacity: 1,
      backgroundColor: "#8B5CF6",
    })

    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(contentWrapperRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      WebkitClipPath: "circle(0% at 50% 50%)",
      pointerEvents: "none"
    })
    gsap.set(contentTextRef.current, { opacity: 0 })

    // Timeline for scroll animation
    const tl = gsap.timeline()

    tl.to(initialTextRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    })
      .to(circleRef.current, {
        scale: 1.4,
        duration: 0.4,
        ease: "power2.inOut",
      }, 0)
      .to(contentWrapperRef.current, {
        clipPath: "circle(150% at 50% 50%)", // enough to cover any viewport
        WebkitClipPath: "circle(150% at 50% 50%)",
        pointerEvents: "auto",
        duration: 0.6,
        ease: "power2.inOut",
      }, 0.2)
      .to(circleRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      }, 0.6)
      .to(contentTextRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      }, 0.6)

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=150%",
      scrub: 0.2,
      pin: true,
      animation: tl,
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    
    <section
      ref={sectionRef}
      id="ContactSection"
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      {/* Circle */}
      <div
        ref={circleRef}
        className="relative z-20 flex items-center justify-center w-24 h-24 rounded-full shadow-lg shadow-violet-400/50 bg-gradient-to-r from-violet-400 to-pink-200"
      >
        <p
          ref={initialTextRef}
        //   className="text-base font-bold text-black sm:text-lg md:text-xl"
        className="text-xs font-bold leading-tight text-center text-black sm:text-sm md:text-base"
        >
          SCROLL DOWN
        </p>
      </div>

      {/* Content to reveal */}
      <div
        ref={contentWrapperRef}
        className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-red-900 to-red-500"
        
      >
        <div
          ref={contentTextRef}
          className="flex flex-col items-center justify-center text-center"
          
        >
          <h1 className="mb-5 text-3xl font-bold text-black md:text-5xl">
            Step into the Future with Luqman
          </h1>
          <p className="mb-6 text-lg text-black">
            DEVELOPER
          </p>
          <button 
            onClick={openContactForm}
            className="relative z-50 flex px-6 py-3 font-semibold text-white transition-all bg-purple-700 cursor-pointer rounded-xl hover:bg-white hover:text-black"
          >
          Contact Me         
          </button>
          
        </div>
      </div>
      <ContactForm isOpen={contactFormOpen} onClose={closeContactForm}/>
    </section>
  )
}

export default ContactSection
