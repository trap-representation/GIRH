import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Buttons/SubmitButton.css'; 
import confetti from 'canvas-confetti';

const Startup_PatentApplication = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [inventionTitle, setInventionTitle] = useState('');
  const [inventionDetails, setInventionDetails] = useState('');
  const [category, setCategory] = useState('select');
  const [patentType, setPatentType] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Pending');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      setIsFormValid(
        fullname &&
        email &&
        phonenumber &&
        address &&
        inventionTitle &&
        inventionDetails &&
        category !== 'select' &&
        patentType &&
        date
      );
    };

    checkFormValidity();
  }, [fullname, email, phonenumber, address, inventionTitle, inventionDetails, category, patentType, date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { 
      fullname, 
      email, 
      phonenumber, 
      address, 
      inventionTitle, 
      inventionDetails, 
      category, 
      patentType, 
      date, 
      status 
    };

    fetch('/api/startup_PatentLists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(() => {
      setFullname('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
      setInventionTitle('');
      setInventionDetails('');
      setCategory('select');
      setPatentType('');
      setDate('');
      setStatus('Pending');
      setTimeout(() => setShowPopup(true), 5000);
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [buttonStatus, setButtonStatus] = useState('ready'); // 'ready', 'loading', 'complete'

  const clickButton = async () => {
    if (buttonStatus === 'ready') {
      setButtonStatus('loading');

      // Simulate form submission or API call
      setTimeout(() => {
        setButtonStatus('complete');
        triggerConfetti(); // Trigger confetti on successful form submission

        // After showing "Success" for 5 seconds, revert to "Submit"
        setTimeout(() => {
          setButtonStatus('ready');
        }, 5000); // Revert to 'ready' after 5 seconds
      }, 2000); // Simulate 2 second API call
    }
  };

  // Function to trigger confetti burst
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }, // Adjust confetti's burst location
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixedpt-[140px] text-black pb-[20px] pt-[140px]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">START-UP PATENT APPLICATION</h2>
          <hr className='mt-[20px] pb-[20px]'/>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Applicant Information */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div className="mt-2">
                  <input 
                    type="text" 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-2">
                  <input 
                    type="tel" 
                    value={phonenumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Invention Title</label>
                <div className="mt-2">
                  <input 
                    type="text" 
                    value={inventionTitle} 
                    onChange={(e) => setInventionTitle(e.target.value)} 
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Invention Details</label>
                <div className="mt-2">
                  <textarea
                    value={inventionDetails} 
                    onChange={(e) => setInventionDetails(e.target.value)}
                    rows={3}
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your invention.</p>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Category of Invention</label>
                <div className="mt-2">
                  <select
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="select">Select a category</option>
                    <option value="technology">Technology</option>
                    <option value="biomedical">Biomedical</option>
                    <option value="engineering">Engineering</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Type of Patent</label>
                <div className="mt-2">
                  <div className="space-y-2">
                    <div>
                      <input 
                        type="radio" 
                        id="utility" 
                        name="patentType" 
                        value="utility" 
                        checked={patentType === 'utility'} 
                        onChange={(e) => setPatentType(e.target.value)}
                      />
                      <label htmlFor="utility" className="ml-2 text-sm font-medium leading-6 text-gray-900">Utility Patent</label>
                    </div>
                    <div>
                      <input 
                        type="radio" 
                        id="design" 
                        name="patentType" 
                        value="design" 
                        checked={patentType === 'design'} 
                        onChange={(e) => setPatentType(e.target.value)}
                      />
                      <label htmlFor="design" className="ml-2 text-sm font-medium leading-6 text-gray-900">Design Patent</label>
                    </div>
                    <div>
                      <input 
                        type="radio" 
                        id="plant" 
                        name="patentType" 
                        value="plant" 
                        checked={patentType === 'plant'} 
                        onChange={(e) => setPatentType(e.target.value)}
                      />
                      <label htmlFor="plant" className="ml-2 text-sm font-medium leading-6 text-gray-900">Plant Patent</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Date of Application</label>
                <div className="mt-2">
                  <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-center">
              <div className="flex items-center justify-center w-full max-w-md">
              <button 
                type="submit" 
                id="button"
                disabled={!isFormValid} 
                onClick={clickButton}
                className={buttonStatus} // Add dynamic class based on buttonStatus
              >
                  <span className="submitMessage">Submit</span>
                  <span className="loadingMessage"></span>
                  <span className="successMessage">
                    <span className="checkMark">&#x2713;</span> Success!
                  </span>
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">Success</h3>
            <p>Your application has been submitted successfully!</p>
            <button onClick={handleClosePopup} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Startup_PatentApplication;