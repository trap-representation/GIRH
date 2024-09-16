import React from "react";
import Freebook from "./Freebook";
function Banner() {

  const handleScroll = () => {
    let scrollPosition = 1000; // Default 

    if (window.innerWidth <= 768) {
      // For tablets and smaller screens
      scrollPosition = 1200;
    }
    if (window.innerWidth <= 480) {
      // For mobile screens
      scrollPosition = 1400;
    }

    window.scrollTo({
      top: scrollPosition, 
      behavior: "smooth", 
    });
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 pb-5">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="md:space-y-8 space-y-4">
            <h1 className="text-[20px] md:text-4xl text-black dark:text-white font-bold animate-fadeIn">
              Hello, welcome to our{" "}
              <span className="text-pink-500">GIRH page....!!!</span>
            </h1>
            <p className="text-[12px] md:text-xl animate-slideIn text-black dark:text-white">
            Welcome to the Gujarat Research and Innovation-Hub, where cutting-edge research meets transformative innovation. We unite researchers, innovators, and industry leaders to create impactful solutions and tackle global challenges. Join us in driving progress and shaping the future with groundbreaking ideas and practical applications.
            </p>
          </div>
          <button className="btn mt-6 btn-secondary text-black  dark:text-white" onClick={handleScroll}>Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          {/* <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          /> */}
          <Freebook/>
        </div>
      </div>
            {/* Keyframe Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-slideIn {
          animation: slideIn 1s ease-in-out;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
}

export default Banner;
