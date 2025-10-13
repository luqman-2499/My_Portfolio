import {useEffect, useRef} from "react"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ProgressBar = () => {

    const progressBarRef = useRef(null)
    const progressFillRef = useRef(null)


    useEffect (() => {
        gsap.registerPlugin(ScrollTrigger)


        // Create a GSAP animation that can update the width of progress bar based on scroll position

        gsap.to(progressFillRef.current, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
                onUpdate: (self) => {
                    
                    // Optional: Youn can add additional effects based on progress
                    const progress = self.progress.toFixed(2)

                    // Chnage Color based on Progress 
                    if (progress > 0.75 ) {
                        gsap.to(progressFillRef.current, {backgroundColor: "#7E22CE", duration: 0.5 })
                    } 
                    else if (progress > 0.5 ) {
                        gsap.to(progressFillRef.current, {backgroundColor: "#A855F7", duration: 0.5 })
                    }
                    else if(progress > 0.10 ) {
                        gsap.to(progressFillRef.current, {backgroundColor: "#B53389", duration: 0.5 })
                    }
                    else {
                        gsap.to(progressFillRef.current, {backgroundColor: "#C54BBC", duration: 0.5 })
                    }
                }
            }
        })
        

        return () => {

            // CLEAN UP SCROLL TRIGGER
            ScrollTrigger.getAll().forEach((trigger) => {
                if(trigger.vars.trigger === document.body) {
                    trigger.kill()
                }
            })
        }
    })

  return (
    <div ref={progressBarRef} className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50">
    
    <div
    ref={progressFillRef}
    className="w-0 h-full bg-[#A1045a] transition-colors duration-300"
    style={{width: "0%"}}
    />
    </div>
  )
}

export default ProgressBar