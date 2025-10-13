import { motion, AnimatePresence } from "framer-motion";

import Spline from "@splinetool/react-spline";


const HeroSection = () => {
  return (
    <section id="HeroSection" className="relative flex items-center justify-between h-screen px-10 mt-0 overflow-hidden bg-gradient-to-b from-red-700 to-black xl:flex-row flex-col-reserve lg:px-24">
        
        
        {/* LEFT SECTION  */}
        
        <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1 
            initial = {{opacity: 0, y: 80 }}
            animate = {{opacity: 1, y: 0 }}
            transition = {{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
            }}
            className="z-10 mb-6 text-5xl font-bold md:text-7xl lg:text-6xl">
                Building Scalable & <br/> Reliable Websites
                
            </motion.h1>

            <motion.p 
            initial = {{opacity: 0, y: 80 }}
            animate = {{opacity: 1, y: 0 }}
            transition = {{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5,
            }}
            className="max-w-2xl text-xl text-purple-200 md:text-xl lg:text-1xl"> 
                Ambitious MERN Stack Developer with a strong foundation in building reliable, responsive and efficient web applications. 
                Experienced in developing projects using HTML, CSS, JavaScript, and MySQL, with a growing expertise in the MERN stack MongoDB, Express.js, React.js, Node.js.
                Eager to apply technical proficiency, problem-solving abilities, and analytical skills to deliver impactful solutions within a dynamic and growth-focused tech environment.
                
            </motion.p>
        </div>

        
        {/* RIGHT SECTION  */}

        <Spline
        className="absolute lg:top-0 right-0 xl:right-[-28%] top-[-20%]"
        scene="https://prod.spline.design/ZYwilQdbgKlT2DIO/scene.splinecode" />

    
    </section>
    
  )
}

export default HeroSection