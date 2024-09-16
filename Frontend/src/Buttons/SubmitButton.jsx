// import React, { useState } from 'react';
// import './SubmitButton.css';
// import confetti from 'canvas-confetti'; // Import the confetti library

// const SubmitButton = () => {
//   const [status, setStatus] = useState('ready'); // 'ready', 'loading', 'complete'

//   const clickButton = async () => {
//     if (status === 'ready') {
//       setStatus('loading');

//       // Simulate form submission or API call
//       setTimeout(() => {
//         setStatus('complete');
//         triggerConfetti(); // Trigger confetti on successful form submission

//         // After showing "Success" for 5 seconds, revert to "Submit"
//         setTimeout(() => {
//           setStatus('ready');
//         }, 5000); // Revert to 'ready' after 5 seconds
//       }, 2000); // Simulate 2 second API call
//     }
//   };

//   // Function to trigger confetti burst
//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }, // Adjust confetti's burst location
//     });
//   };

//   return (
//     <div>
//       <button
//         id="button"
//         type='submit'
//         className={status}
//         onClick={clickButton}
//         disabled={status === 'loading' || status === 'complete'}
//       >
//         {status === 'ready' && <span className="submitMessage">Submit</span>}
//         {status === 'loading' && <span className="loadingMessage"></span>}
//         {status === 'complete' && <span className="successMessage"><span className="checkMark">&#x2713;</span> Success!</span>}
//       </button>
//     </div>
//   );
// };

// export default SubmitButton;
