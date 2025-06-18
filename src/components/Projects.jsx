import React from "react";
import { FaFolderOpen }from 'react-icons/fa';
import projectsData from "../data/projectsData";
import GlareHover from "./Hover";
import AnimatedContent from "./Animation";


const Projects = () => {


        return (

        <section id="projects" className="relative flex flex-col items-center mt-30 bg-gray-100">
            <h1 className="section-title">Projects</h1>




            <div className="flex items-center gap-10 mb-20 mt-10 max-2xl:flex-col">

                {projectsData.map((item) => (

                    <AnimatedContent
                        distance={240}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={0.8}
                        threshold={0.1}
                        delay={0.2}
                        >
                     
                     <div className="relative rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ">
                            <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.5}
                            glareAngle={-30}
                            glareSize={200}
                            transitionDuration={1600}
                            playOnce={false}
                            borderRadius="1rem" 
                            style={{
                                background: "transparent",
                                border: "none",
                                overflow: "hidden",  
                                borderRadius: "1rem",
                            }}
                            className="rounded-2xl"
                            >
                            <div
                                key={item.id}
                                className="card flex flex-col items-start justify-start rounded-2xl max-2xl:w-220 max-xl:w-190 max-lg:w-150 max-md:w-130 max-sm:w-110 bg-white/10 overflow-hidden">
                                <div
                                className="h-[40%] bg-purple-300 border border-gray-300 w-full flex items-start justify-center p-3 bg-cover bg-center bg-no-repeat rounded-t-2xl"
                                style={{ backgroundImage: `url('./project.png')` }}>

                                <div className="gap-3 mt-2 flex justify-center bg-gray-900/20 p-2 rounded-3xl">
                                    <button className="project-button text-purple-600">Code</button>
                                    <button className="project-button">Demo</button>
                                </div>
                                </div>

                                <div className="p-5">
                                <div className="flex w-full justify-between mb-3">
                                    <div className="flex items-center">
                                    <FaFolderOpen size={60} className="p-2 rounded-xl fill-gray-900" />
                                    <p className="ml-5 text-3xl font-bold font-mono text-purple-600">{item.title}</p>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <p className="text-[13px] text-gray-400">{item.description}</p>
                                </div>

                                <div className="flex justify-end gap-2">
                                    {item.technologies.map((techno) => (
                                    <div
                                        key={techno}
                                        className="project-button border-1 text-purple-600 bg-purple-300/40">
                                        {techno}

                                    </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </GlareHover>
                        
                        </div>
                        </AnimatedContent>
                    ))}

                </div>

    
   


     

        </section>


        )


}

export default Projects;