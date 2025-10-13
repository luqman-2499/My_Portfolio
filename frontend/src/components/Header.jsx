import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import {useState} from "react"
import ContactForm from "./ContactForm";



const Header = () => {

    
    // TOGGLE MENU OPEN/CLOSE 
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    
    // State to Track if the contact form is open 
    
    const [contactFormOpen, setContactFormOpen] = useState(false);

    const openContacForm = () => setContactFormOpen(true)
    const closeContactForm = () => setContactFormOpen(false)


    
  return (
    <header className="absolute z-50 w-full transition-all duration-300 ">
        
        <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 md:h-20">
            


            {/* Logo/Name */}
            
            <motion.div
            
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.3,
                    duration: 1.2,
                    }}
                className="flex items-center ">

                <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl font-bold text-red-800 rounded-xl bg-gradient-to-r from-gray-600 to-gray-100">
                Mr
                </div>

                <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text">
                    Luqman Khan
                </span>
                
            </motion.div>




            {/* DESKTOP NAVIGATION */}
            
            <motion.nav className="hidden space-x-10 lg:flex">
          {[
            { label: "Home", href: "#HeroSection" },
            { label: "About", href: "#AboutSection" },
            { label: "Projects", href: "#ProjectSection" },
            { label: "Courses", href: "#CoursesSection" },
            { label: "Contact", href: "#ContactSection" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative transition-colors duration-300 dark:text-gray-200 group"
              href={item.href} 
            >
              <span className="inline-block font-bold text-white transition-transform duration-200 transform group-hover:scale-150 group-hover:text-red-500 dark:hover:text-red-600">
                {item.label}
              </span>

              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.nav>



                {/* SOCIAL ICONS DESKTOP */}

            <div className="items-center hidden space-x-4 text-white md:flex">
                
                <motion.a 
                initial = {{opacity:0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition= {{delay:1.3, duration: 0.8}}
                href="https://github.com/luqman-2499"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
                <FiGithub className="w-5 h-5"/>
                </motion.a>


                <motion.a 
                initial = {{opacity:0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition= {{delay:1.3, duration: 0.8}}
                href="https://www.linkedin.com/in/luqman-khan-usman-68533731b/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400" >
                <FiLinkedin className="w-5 h-5"/>
                </motion.a>


                <motion.a 
                initial = {{opacity:0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition= {{delay:1.3, duration: 0.8}}
                href="https://www.instagram.com/_luqman2499/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400" >
                <FiInstagram className="w-5 h-5"/>
                </motion.a>   
                  
            </div>



            {/* HIRE ME BUTTON */}

            <motion.button 
            onClick={openContacForm}
            initial = {{opacity:0, scale: 0.8}}
            animate = {{opacity: 1, scale: 1}}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.6, duration: 0.8 }}
            className="px-4 py-2 ml-4 font-bold text-red-700 transition-all duration-500 rounded-xl bg-gradient-to-r from-gray-600 to-gray-100 hover:from-white-700 hover:to-white-700 hover:text-white">
            HIRE ME                 
            </motion.button>
        </div>



        {/* MOBILE MENU  */}
    <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
    transition={{ duration: 0.4 }}
    className="px-6 py-6 space-y-5 overflow-hidden bg-gray-800 shadow-md md:hidden rounded-b-2xl"
    >
    {/* Navigation Links */}
    <nav className="flex flex-col space-y-4">
        {[
        { label: "Home", href: "#HeroSection" },
        { label: "About", href: "#AboutSection" },
        { label: "Project", href: "#ProjectSection" },
        { label: "Courses", href: "#CoursesSection" },
        { label: "Contact", href: "#ContactSection" },
        ].map((item) => (
        <a
            key={item.label}
            href={item.href}
            onClick={toggleMenu}
            className="py-2 font-semibold text-gray-200 transition-colors duration-300 hover:text-violet-400"
        >
            {item.label}
        </a>
        ))}
    </nav>

    {/*  Social Icons */}
    <div className="flex items-center justify-center pt-4 space-x-6 border-t border-gray-700">
        <a
        href="https://github.com/luqman-2499"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition-colors duration-300 hover:text-violet-400"
        >
        <FiGithub className="w-5 h-5" />
        </a>

        <a
        href="https://www.linkedin.com/in/luqman-khan-usman-68533731b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition-colors duration-300 hover:text-violet-400"
        >
        <FiLinkedin className="w-5 h-5" />
        </a>

        <a
        href="https://www.instagram.com/_luqman2499/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition-colors duration-300 hover:text-violet-400"
        >
        <FiInstagram className="w-5 h-5" />
        </a>
    </div>

    {/* Contact Me Button */}
    <button
        onClick={() => {
        toggleMenu();
        openContacForm();
        }}
        className="block w-full px-4 py-2 mt-5 font-bold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-violet-500"
    >
        Contact Me
    </button>
    </motion.div>

    {/* CONTACT ME FORM  */}
    <ContactForm isOpen={contactFormOpen} onClose={closeContactForm}/>
        
    </header>
  )
}

export default Header