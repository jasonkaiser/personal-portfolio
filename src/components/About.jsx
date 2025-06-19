import React, { useState, useEffect } from "react";
import aboutData from "../data/aboutData";
import AnimatedContent from "./Animation";

const About = () => {
  
  const [aboutItem, setAboutItem] = useState("General");
  const [displayItem, setDisplayItem] = useState(aboutItem);
  const [fade, setFade] = useState(true); 

  const selectAboutItem = aboutData.find(item => item.id === displayItem) || aboutData[0];

  const topButtons = aboutData.slice(0, 3);
  const bottomButtons = aboutData.slice(3);


  useEffect(() => {
    if (aboutItem === displayItem) return; 

    setFade(false); 

    const timeout = setTimeout(() => {
      setDisplayItem(aboutItem);
      setFade(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [aboutItem, displayItem]);


  return (

    <section id="aboutme" className="relative overflow-hidden">


      <div className="relative z-10 flex flex-col items-center pt-10">

        <h1 className="section-title lg:mb-30">About me</h1>

          <div className="overflow-x-hidden">
<AnimatedContent
                        distance={240}
                        direction="horizontal"
                        reverse={true}
                        duration={0.7}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={0.7}
                        threshold={0.1}
                        delay={0.3}
                        >
        <div className="rounded-3xl p-6 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-15 lg:mb-30">

          {/* Left side */}
          <div id="test1" className="w-full md:w-1/2 flex flex-col max-sm:items-center">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col max-sm:text-center">
              <div
                className="bg-gray-500 bg-cover bg-bottom rounded-3xl w-32 h-32 md:w-34 md:h-34 mb-3"
                style={{ backgroundImage: "url(./avatar2.jpeg)" }}

              ></div>
              <div>
                <h1 className="text-4xl font-bold text-purple-600 max-md:text-6xl">
                              Jason Kaiser</h1>
                <h1 className="text-lg font-semibold text-black max-md:mb-6 max-md:text-2x">
                               Full Stack Developer / IT Student</h1>
                               
              </div>
            </div>

            {/* Top Buttons */}
            <div className="flex gap-3 mt-3 max-sm:mt-0 max-sm:mb-1">

              {topButtons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAboutItem(item.id)}
                  className={

                     `purple-button font-bold transition-all duration-300 ease-in-out ${
                      aboutItem === item.id
                      ? "border border-purple-600 bg-purple-200 text-purple-700"
                      : "border-transparent bg-purple-100 text-purple-500 hover:bg-purple-200 hover:text-[15px] hover:text-white"
                  }`}>

                  {item.title}
                </button>

              ))}
            </div>
            
            {/* Bottom Buttons */}
            <div className="flex gap-3 mt-[-20px] max-sm:mb-5">
              {bottomButtons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAboutItem(item.id)}
                  className={
                    
                      `purple-button font-bold transition-all duration-300 ease-in-out ${
                      aboutItem === item.id
                      ? "border border-purple-600 bg-purple-200 text-purple-700"
                      : "border-transparent bg-purple-100 text-purple-500 hover:bg-purple-200 hover:text-[15px] hover:text-white"
                  }`}>

                  {item.title}
                </button>

              ))}
            </div>
          </div>

          {/* Right side */}

                              
          <div className="h-90 w-full md:w-1/2 flex flex-col items-center text-center max-sm:items-center
                        bg-gray-100 shadow p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 max-sm:h-110">

          <h1 className="text-2xs font-semibold font-mono capitalize mb-20 bg-purple-300/40 w-30 rounded-full border 
                       text-purple-600 border-purple-600 py-2 relative underline-line">
            <span
                className={`transition-opacity duration-500 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"}`}>

              {selectAboutItem.title}
            </span>
          </h1>

            <p className={`text-gray-600 transition-opacity duration-200 ease-in-out ${ fade ? "opacity-100" : "opacity-0"}`}>
              
              {selectAboutItem.text}
            </p>
          </div>


        </div>
        </AnimatedContent>


          </div>
      </div>
      
    </section>
  );
};

export default About;
