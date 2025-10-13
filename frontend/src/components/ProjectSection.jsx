import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";


const ProjectSection = () => {

    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const titleLineRef = useRef(null)
    const triggerRef = useRef(null)
    const horizontalRef = useRef(null)


    // PROJECT IMAGES

    const projectImages = [
        {
            id: 1,
            title: "Car Rental",
            imageSrc: "/images/car_rental.png",
        },

        {
            id: 2,
            title: "Protfolio Website",
            imageSrc: "/images/self_portfolio.png",
        },

        {
            id: 3,
            title: "AI Prepration Interview",
            imageSrc: "/images/AI_Interview.png",
        }
    ]


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // TITLE REVEAL ANIMATION
        gsap.fromTo(
            titleRef.current,
            {
                y: 100,
                opacity: 0,
            },

            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        )

        // TITLE LINE ANIMATION
        gsap.fromTo(
            titleLineRef.current,
            {
                width: "0%",
                opacity: 0,
            },

            {
                width: "100%",
                // CHANGE: fixed typo 'opaccity' -> 'opacity' so the line actually fades in
                opacity: 1,
                duration: 1.5,
                ease: "power3.inOut",
                delay: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        )


        // SECTION ENTRANCE EFFECT
        gsap.fromTo(
            triggerRef.current,
            {
                y: 100,
                rotationX: 20,
                opacity: 0,
            },

            {
                y: 0,
                rotationX: 0,
                // CHANGE: fixed typo 'opactiy' -> 'opacity' so the container becomes visible
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        )


        //  PARALLEL EFFECT FOR ENTIRE SECTION
        gsap.fromTo(
            sectionRef.current,
            {
                backgroundPosition: "50% 0%"
            },

            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            }
        )


        //  HORIZONTAL ANIMATION
        const horizontalScroll = gsap.to(".panel", {
            xPercent: -100 * (projectImages.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                // CHANGE: compute end based on content width (kept) to ensure proper pin length for 3 panels
                end: () => `+=${horizontalRef.current.offsetWidth}`,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (projectImages.length - 1),
                    duration: { main: 0.2, max: 0.3 },
                    delay: 0.1,
                },

                invalidateOnRefresh: true,
            }
        })


        // ANIMATE EACH IMAGE PANEL 
        const panels = gsap.utils.toArray(".panel")
        panels.forEach((panel, i) => {
            const image = panel.querySelector(".project-image")
            const imageTitle = panel.querySelector(".project-title")


            // TIMELINE FOR EACH PANEL
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalScroll,
                    // CHANGE: fixed typo 'lft' -> 'left' to activate panel-level triggers
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })


            //  IMAGE SCALE AND OPACITY ANIMATION
            tl.fromTo(image, { scale: 0, rotate: -20, }, { scale: 1, rotate: 1, duration: 0.5, })

            // TITLE ANIMATION IF EXISTS
            if (imageTitle) {
                tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3, }, 0.2)
            }
        })
    }, [projectImages.length])


    return (
        <section
            ref={sectionRef}
            id="horizontal-section"
            className="relative py-20 overflow-hidden bg-black"
        >

            {/* SCETION TITLE  */}

            <div className="container relative z-10 px-4 mx-auto mb-16">
                <h2 ref={titleRef}
                    id="ProjectSection"
                    className="mb-4 text-4xl font-bold text-center text-white opacity-0 md:text-5xl lg:text-6xl">
                    Featured Projects
                </h2>

                <div ref={titleLineRef} className="w-0 h-1 mx-auto opacity-0 bg-gradient-to-r from-purple-500 to-pink-500">
                </div>
            </div>



            {/* HORIZONTAL SCROLL SECTION */}

            {/* CHANGE: removed initial opacity-0 blocker on wrapper so content is visible once GSAP sets opacity */}
            <div ref={triggerRef} className="overflow-hidden">
                {/* CHANGE: set width to 300% for exactly 3 panels so each panel gets a full viewport width */}
                <div ref={horizontalRef} className="flex horizontal-section md:w-[300%] w-[300%]">

                    {projectImages.map((project) => (
                        <div key={project.id}
                            // CHANGE: ensure each panel is exactly a viewport wide/tall for clean horizontal snapping
                            className="relative flex items-center justify-center panel w-[100vw] h-[100vh]"
                        >
                            {/* CHANGE: add generous responsive padding but keep enough space so images aren't clipped */}
                            <div className="relative flex flex-col items-center justify-center w-full h-full p-6 sm:p-10 md:p-12">

                                {/* CHANGE: switch to object-contain and constrain height to prevent any clipping */}
                                <img
                                    className="object-contain max-w-full max-h-[80vh] project-image rounded-2xl"
                                    src={project.imageSrc}
                                    alt="Project-img" />

                                {/* CHANGE: minor spacing and readability for titles */}
                                <h2 className="z-50 flex items-center gap-3 mt-6 text-sm text-black transition-colors duration-300 cursor-pointer project-title md:text-3xl md:font-bold text-nowrap hover:text-gray-400">
                                    {project.title} <SlShareAlt />

                                </h2>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default ProjectSection