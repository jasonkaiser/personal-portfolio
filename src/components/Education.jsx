import React  from "react"; 
import educationData from "../data/educationData";
import AnimatedContent from "./Animation";

const Education = () => {


    return (

        <section id='education' className="relative flex flex-col items-center">

            <h1 className="section-title mb-20">Education</h1>
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-10 lg:px-25"> 

                <ol className="relative space-y-8 before:absolute before:ml-[10px] before:mt-[19px] before:h-full before:w-[0.3px] before:rounded-full before:bg-purple-600">
                
                       {educationData.map((item => (

                <div className="overflow-x-hidden">
                    <AnimatedContent
                        distance={240}
                        direction="horizontal"
                        reverse={false}
                        duration={0.7}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={0.8}
                        threshold={0.1}
                        delay={0.2}
                        >
                     
                     <li key={item.id} className="group relative -ms-1.5 flex items-start gap-4">
                                <span className="size-8 shrink-0 rounded-full bg-purple-100 border border-purple-600/50 flex items-center 
                                                 justify-center group-hover:bg-purple-200 group-hover:border-purple-600 transition-all duration-300">
                                    
                                    <span className="size-2 shrink-0 rounded-full bg-purple-600/40 group-hover:bg-purple-600 transition-all duration-300 group-hover:size-3"></span>

                                </span>

                                <div className="-mt-2 bg-gray-100 rounded-2xl p-7 mb-13 border-r-purple-600/1 border-r-3 shadow-lg 
                                               group-hover:border-purple-600 group-hover:shadow-2xl transition-all duration-300 max-sm:flex max-sm:flex-col max-sm:gap-3">
                                    
                                    <h3 className="text-3xl font-bold text-purple-600/70 group-hover:text-purple-600 transition-colors duration-300 max-sm:text-2xl">
                                        
                                        {item.title}</h3>

                                    <p className=" mb-5 text-4xs font-mono text-purple-700/50 max-sm:text-3xs">
                                        
                                        {item.subtitle} </p>

                                    <p className="mt-0.5 text-sm text-gray-700">
                                        
                                        {item.description}</p>

                                    <div className="flex justify-end">
                                        <time className="text-xs font-mono font-bold text-purple-600 bg-purple-300/40 py-2 px-3 rounded-full mt-3 border border-purple-500 ">
                                           
                                        {item.date}</time>
                                        
                                    </div>
                                </div>                  
                              </li>

                            </AnimatedContent>
                    </div>
            
                           )      
                       ))}        
                </ol>
            </div>
        </section>

    )



}

export default Education; 