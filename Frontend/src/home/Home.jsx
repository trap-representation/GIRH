import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Updates from '../components/Updates';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // IntersectionObserver logic inside useEffect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Adds the 'show' class when the element is visible
        } else {
          entry.target.classList.remove('show'); // Removes the 'show' class when not visible
        }
      });
    });

    // Selecting all hidden-section elements AFTER the component renders
    const hiddenElements = document.querySelectorAll('.hidden-section , .hidden-section1');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <>
<div className='relative min-h-screen'>

  <div className='bg-[url("/img1.png")] bg-cover md:bg-center bg-[right]  bg-fixed absolute top-0 left-0 w-full h-full z-0 dark:bg-[url("/img2.png")] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed'></div>

  <div className='absolute top-0 left-0 w-full h-full z-10 bg-white dark:bg-slate-900 md:opacity-50 opacity-30'></div>

  <div className='relative z-20'>
    <Navbar />
    <section className='md:pb-[210px] pb-[280px] mb:[100px]'><Banner /></section>
    <div className='hidden-section md:pb-[50px] md:pt:[120px]'><Updates/></div>
    <section className='hidden-section1 pb-[160px] pt-[45px]'><Content /></section>
    <div className='hidden-section mt-[90px]'><Testimonials/></div>
    <Stats />
    <Footer />
  </div>
</div>

    </>
  );
};

export default Home;

