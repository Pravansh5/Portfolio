import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpeg";
const About = () => {
const handleDownload = (e) => {
  e.preventDefault();

  // 1️⃣ Open preview in new tab
  window.open(
    "https://drive.google.com/file/d/1CQy2Dc0ouLsBeWgqOXrR7utyUjXMSrUv/view",
    "_blank",
    "noopener,noreferrer"
  );

  // 2️⃣ Trigger download
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1CQy2Dc0ouLsBeWgqOXrR7utyUjXMSrUv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      id="about"
      className="py-2 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto font-sans mt-8 md:mt-12 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting  */}
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi , I am
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Pravansh Patel
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#c7f837] leading-tight">
            <span className="text-white">I am a </span>

            <Typewriter
              words={[
                " FullStack Developer",
                " Software Developer",
                " Web Developer",
                " Coder",
                " Problem Solver",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              cursorRenderer={(cursor) => (
                <span className="text-[#c7f837]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-sm
  sm:text-base
  md:text-lg
  text-gray-600
  md:text-gray-400
  mt-6
  mb-8
  leading-relaxed
  px-4
  sm:px-0">
            I am a full-stack developer with hands on experience in building
            scalable web applications. Skilled in both front-end and back-end
            development, I am specialized in MERN stack and other mordern
            technologies to create seamless user experience and efficent
            solutions.
          </p>

          {/* resume button */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-block text-black py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "#c7f837",
              boxShadow: "0 0 40px #c7f837",
            }}
          >
            Download Resume
          </button>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#c7f837] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Pravansh Patel"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_0_10px_rgba(199,248,55,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
