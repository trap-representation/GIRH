import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutPage() {
  return (
    <>
      <div className="bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed absolute top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-10">
        <Navbar />

        <div className="max-w-screen-lg mx-auto p-4 my-10 mt-[70px]">
          <h1 className="md:text-4xl text-2xl font-bold mb-4 text-center dark:text-black text-black animate-pulse" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            About Us
          </h1>
          <hr className='pt-[20px] pb-[20px] border-black'/>

          <section className="md:space-y-6 space-y-2 dark:text-black text-black md:text-[14px] text-[10px]">
            <h2 className="text-xl font-semibold animate-fadeIn">
              Our Mission
            </h2>
            <p className="text-gray-700 animate-slideIn">
              At Gujarat Research and Innovation-Hub, our mission is to foster innovation and research in Gujarat by providing a centralized platform for collaboration, resource sharing, and support for start-ups. We aim to bridge the gap between researchers, innovators, and entrepreneurs, enhancing the growth and development of groundbreaking ideas.
            </p>

            <h2 className="text-2xl font-semibold animate-fadeIn">
              Our Vision
            </h2>
            <p className="text-gray-700 animate-slideIn">
              Our vision is to be the leading hub for research and innovation in Gujarat, promoting a culture of innovation and excellence. We aspire to create a thriving ecosystem where ideas can flourish, and start-ups can thrive with the support of our comprehensive resources and network.
            </p>

            <h2 className="text-2xl font-semibold animate-fadeIn">
              Our Values
            </h2>
            <p className="text-gray-700 animate-slideIn">
              We are committed to fostering a culture of collaboration, integrity, and excellence. Our core values include transparency, inclusiveness, and a relentless pursuit of innovation. We believe in empowering individuals and organizations to achieve their full potential and contribute to the growth of Gujarat's research and innovation landscape.
            </p>
          </section>
        </div>

        <Footer />
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

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default AboutPage;

