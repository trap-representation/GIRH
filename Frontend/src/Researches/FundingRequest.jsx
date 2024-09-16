import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import confetti from 'canvas-confetti';

const FundingRequest = () => {
  // Form state variables
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [fundingAmount, setFundingAmount] = useState('');
  const [category, setCategory] = useState('select');
  const [date, setDate] = useState('');
  const [status] = useState('Pending');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('ready'); // button state

  // Validate form on change
  useEffect(() => {
    setIsFormValid(
      fullname &&
      email &&
      phonenumber &&
      address &&
      projectTitle &&
      projectDescription &&
      fundingAmount &&
      category !== 'select' &&
      date
    );
  }, [fullname, email, phonenumber, address, projectTitle, projectDescription, fundingAmount, category, date]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const newRequest = {
      fullname,
      email,
      phonenumber,
      address,
      projectTitle,
      projectDescription,
      fundingAmount,
      category,
      date,
      status
    };

    fetch('/api/fundingHistory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest),
    })
      .then(response => response.json())
      .then(() => {
        resetForm(); // Reset the form fields
        setShowPopup(true);
        setButtonStatus('complete');
        triggerConfetti(); // Trigger confetti on success

        // Revert button back to 'Submit' after 5 seconds
        setTimeout(() => {
          setButtonStatus('ready');
          setShowPopup(false);
        }, 5000);
      })
      .catch(error => {
        console.error('Error:', error);
        setButtonStatus('ready');
      });
  };

  const resetForm = () => {
    setFullname('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setProjectTitle('');
    setProjectDescription('');
    setFundingAmount('');
    setCategory('select');
    setDate('');
  };

  const handleClosePopup = () => setShowPopup(false);

  // Confetti burst function
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-[140px] text-black pb-[20px]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Funding Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {/* Full Name Input */}
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-900">Full Name</label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Email address</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Phone Number</label>
                <input
                  type="tel"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Address Input */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Project Title Input */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Project Title</label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Project Description */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Project Description</label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600"
                  required
                />
                <p className="mt-2 text-sm text-gray-600">Provide a detailed description of your project.</p>
              </div>

              {/* Funding Amount */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Funding Amount Requested</label>
                <input
                  type="number"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>

              {/* Category Dropdown */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                >
                  <option value="select">Select a category</option>
                  <option value="education">Education</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="environmental">Environmental</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date Input */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block w-full rounded-md bg-gray-100 border-2 p-1 border-gray-600 h-8"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleSubmit}
                className={`inline-flex items-center rounded-md bg-black px-4 py-2 text-white shadow-sm transition-transform duration-300 ease-in-out ${
                  buttonStatus === 'loading' ? 'cursor-wait' : ''
                }`}
                disabled={buttonStatus === 'loading' || !isFormValid}
              >
                {buttonStatus === 'loading' ? 'Submitting...' : buttonStatus === 'complete' ? 'Submitted' : 'Submit'}
              </button>
            </div>
          </form>

          {/* Success Popup */}
          {showPopup && (
            <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="text-xl font-semibold">Funding Request Submitted!</p>
                <p className="mt-2">You will receive a confirmation email shortly.</p>
                <button
                  className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FundingRequest;

