import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSections, setOpenSections] = useState({});

  const toggleDropdown = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <>
      <div className="bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed absolute top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-10">
        <Navbar />
        <div className="flex justify-center items-center pt-[100px] ">
          <button className='text-2xl text-white font-bold bg-blue-950 cursor-text px-3 py-2 rounded-full'>
            RESEARCH
          </button>
        </div>
        <div>
          <main className="main-content">

            
            <section className="card1">
              <h2
                onClick={() => toggleDropdown('patent')}
                className="cursor-pointer flex justify-between items-center text-black font-bold text-[14px]"
              >
                Patent
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${openSections['patent'] ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </h2>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden bg-white dark:bg-slate-800  rounded-md md:text[15px] text-[10px] ${openSections['patent'] ? 'max-h-22' : 'max-h-0'}`}
              >
                <ul tabIndex={0} className="md:space-y-3 p-2">
                  <li>
                    <Link to="/patent" className="block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-black text-[7px] md:text-[10px] dark:text-white">Patent Lists</Link>
                  </li>
                  <li>
                    <Link to="/patentapplication" className="block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-black text-[7px] md:text-[10px] dark:text-white">Patent Application</Link>
                  </li>
                </ul>
              </div>
            </section>

            
              <section class="card1">
                  <Link to={"/researchprojects"}><h2 className='pb-[50px] text-black font-bold text-[14px] text-center'>Research Projects</h2></Link>
              </section>
            

            
              <section class="card1">
                  <Link to={"/intellectualproperty"}><h2 className='pb-[50px] text-black font-bold text-[14px] text-center'>Intellectual Property</h2></Link>
              </section>
            

            <section className="card1">
              <h2
                onClick={() => toggleDropdown('funding')}
                className="cursor-pointer flex justify-between items-center text-black font-bold text-[14px] "
              >
                Funding
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${openSections['funding'] ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </h2>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden bg-white dark:bg-slate-800 rounded-md  md:text[15px] ${openSections['funding'] ? 'max-h-17' : 'max-h-0'}`}
              >
                <ul tabIndex={0} className="md:space-y-3 p-2">
                  <li>
                    <Link to="/fundingrequest" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md text-[7px] md:text-[10px]  text-black dark:text-white">Funding Request</Link>
                  </li>
                  <li>
                    <Link to="/fundinghistory" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md text-[7px] md:text-[10px]  text-black dark:text-white">Funding History</Link>
                  </li>
                </ul>
              </div>
            </section>

            
              <section class="card1">
                  <Link to={"/community"}><h2 className='pb-[50px] text-black font-bold text-[14px]'>Community</h2></Link>
              </section>
            
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Research;

