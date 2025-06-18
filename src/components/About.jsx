import React from "react";
import aboutText from "../data/aboutData";

const About = () => {

  return (

    <section id="aboutme" className="relative overflow-hidden">

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <h1 className="section-title lg:mb-30">About me</h1>

        <div className="rounded-3xl p-6 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-15 lg:mb-30">
          {/* Left side */}
          <div id="test1" className="w-full md:w-1/2 flex flex-col max-sm:items-center">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col max-sm:text-center">
              <div
                className="bg-gray-500 bg-cover bg-center rounded-3xl w-32 h-32 md:w-34 md:h-34 mb-3"
                style={{ backgroundImage: 'url(./avatar.png)' }}
              ></div>
              <div>
                <h1 className="text-4xl font-bold text-purple-600 max-md:text-6xl">Jason Kaiser</h1>
                <h1 className="text-lg font-semibold text-black max-md:mb-6 max-md:text-2xl">
                  Full Stack Developer / IT Student
                </h1>
              </div>
            </div>

            <h1 className="text-xs font-medium text-gray-s00 max-md:mb-4 max-md:text-xs mt-10 ml-1"></h1>

            <div id="test2" className="flex gap-3 mt-3 max-sm:mt-0 max-sm:mb-1">
              <button className="purple-button border-1 font-bold">General</button>
              <button className="purple-button">Mission</button>
              <button className="purple-button">Flexible</button>
            </div>

            <div className="flex gap-3 mt-[-20px] max-sm:mb-5">
              <button className="purple-button">History</button>
              <button className="purple-button">Teamwork</button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full items-center md:w-1/2 text-center md:text-left flex flex-col max-sm:items-center  bg-gray-100 shadow p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
           <h1 className="text-2xs text-center font-semibold font-mono capitalize mb-21 text-purple-600 bg-purple-300/40 w-30 rounded-full border border-purple-600 py-2 relative underline-line">
              General
            </h1>
            <p className="text-gray-600">
              Short paragraph or info goes here. This block is now responsive and will wrap under
              the image on smaller screens. Fo goes here. This block is now responsive and will wrap
              under the image on smaller screens. Fo goes here. This block is now responsive and
              will wrap under the image on smaller screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
