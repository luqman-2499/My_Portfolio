import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-8 py-10 text-white bg-black">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">

                {/* LOGO AND DESCRIPTION  */}
                <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text">                   
                    LUQMAN KHAN USMAN 
                </h1>
                
                {/* SCROLL LINKS  */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-purple-200 ">
                        CONNECT 
                    </h3>
                    <div className="flex space-x-4">
                        <a className="text-gray-700 transition-colors hover:text-violet-400"
                        href="https://github.com/luqman-2499"
                        target="_blank"
                        rel="noopener noreferrer">
                            
                        <FiGithub className="w-5 h-5"/>                       
                        </a>

                        <a className="text-gray-700 transition-colors hover:text-violet-400"
                        href="https://www.linkedin.com/in/luqman-khan-usman-68533731b/"
                        target="_blank"
                        rel="noopener noreferrer">
                            
                        <FiLinkedin className="w-5 h-5"/>                       
                        </a>

                        <a className="text-gray-700 transition-colors hover:text-violet-400"
                        href="https://www.instagram.com/_luqman2499/"
                        target="_blank"
                        rel="noopener noreferrer">
                            
                        <FiInstagram className="w-5 h-5"/>                       
                        </a>
                        
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-between pt-8 mt-0 border-t border-gray-700 md:flex-row">
                <p className="text-sm text-gray-500">
                    Luqman Khan. All rights reserved.
                </p>

                <div className="flex mt-2 space-x-6 md:mt-0">
                    <a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">
                        Privacy Policy
                    </a>
                </div>

                <div className="flex mt-4 space-x-6 md:mt-0">
                    <a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">
                        Terms of Service
                    </a>
                </div>

                <div className="flex mt-4 space-x-6 md:mt-0">
                    <a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">
                        Cookie Policy
                    </a>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer