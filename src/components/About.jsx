import React from "react";
import aboutText from "../data/aboutData";

const About = () => {

    return (

        <section id="aboutme">

            <div className="relative flex flex-col items-center">
                    
                    <h1 className="section-title">About me</h1>
                    <div className="bg-gray-100 max-w-3xl p-12 rounded-2xl shadow-lg mb-10 text-[16px] max-sm:text-[14px] text-gray-500 text-left max-lg:mx-15 max-sm:mx-5 selection:bg-purple-600 selection:text-purple-200">
                        <h2 className="mb-2 font-mono text-gray font-bold">const age= <span className="text-purple-500">21</span></h2>
                        <p>{aboutText}</p></div>
            </div>

        </section>


    )


}

export default About 