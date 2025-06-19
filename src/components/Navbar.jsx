import React from "react";
import {
  FaUser,
  FaTools,
  FaGraduationCap,
  FaFolderOpen,
  FaEnvelope
} from "react-icons/fa";


const Navbar = () => {

        return (

        <div className="flex justify-center">
            <nav className="fixed z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm rounded-full mt-5 w-6xl 
                            max-xl:w-4xl max-lg:w-3xl max-md:w-2xl sm:w-1xl max-sm:w-[360px] max-lg:bottom-7">

                <div className="flex items-center justify-between my-1 mx-20 max-lg:mx-10 max-md:mx-2">

                    <div className=""> 
                        <a href="#main">      

                            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-[30px] 
                                             font-sans font-extrabold sm:ml-5 max-sm:ml-6">
                                             JK
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="nav-links mx-10 w-120 flex justify-between max-xl:w-100 max-md:w-50">

                                <a href="#aboutme">About</a>
                                <a href="#skills">Skills</a>
                                <a href="#education">Education</a>
                                <a href="#projects">Projects</a>
                                <a href="">Experience</a> 

                        </div>
                    </div>

                    <div className="hidden max-[745px]:block">
                        <div className="nav-links mx-10 w-120 flex justify-between items-center max-xl:w-100 max-md:w-50">

                                <a href="#aboutme" title="About Me"><FaUser className="mobile-icon" /></a>
                                <a href="#skills" title="Skills"><FaTools className="mobile-icon" /></a>
                                <a href="#education" title="Education"><FaGraduationCap className="mobile-icon text-[22px]" /></a>
                                <a href="#projects" title="Projects"><FaFolderOpen className="mobile-icon text-[18px]" /></a>
                                <a href="#contact" title="Contact"><FaEnvelope className="mobile-icon" /></a>        

                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
        )

}

export default Navbar