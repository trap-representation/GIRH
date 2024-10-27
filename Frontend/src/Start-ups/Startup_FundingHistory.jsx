import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Startup_FundingHistory = () => {
  // State for funding requests, search, and filters
  const [fundingRequests, setFundingRequests] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredRequests, setFilteredRequests] = useState([]);

  // Fetch funding history data
  useEffect(() => {
    fetch('/api/startup_fundingHistory')
      .then(response => response.json())
      .then(data => {
        setFundingRequests(data);
        setFilteredRequests(data); // Initially display all requests
      })
      .catch(error => console.error('Error fetching funding history:', error));
  }, []);

  // Handle search and filter logic
  const handleSearch = () => {
    const results = fundingRequests.filter(request => 
      (filter === 'All' || request.status === filter) && 
      request.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRequests(results);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-[140px] text-black pb-[20px]">
        <div className="container mx-auto bg-white p-5 shadow-md w-full max-w-3xl rounded-md">
          <h1 className="text-center text-2xl font-bold p-[1px]">START-UP FUNDING HISTORY</h1>
          <hr className='mt-[20px] pb-[20px]'/>

          {/* Search and Filter Bar */}
          <div className="mt-4 mb-4 flex justify-center items-center gap-4 flex-col md:flex-row">
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 bg-gray-100 rounded-md"
            />
            <div className='space-x-3'>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-2 bg-gray-100 rounded-sm"
            >
              <option value="All">See All</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
              <option value="Pending">Pending</option>
            </select>
            <button 
              onClick={handleSearch}
              className="bg-slate-950 hover:bg-slate-700 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
          </div>

          {/* Scrollable Funding History List */}
          <div className="mt-4 h-[400px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">Funding Requests</h2>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <div 
                  key={request.id} // Ensure unique ID for each request
                  className="flex justify-between items-center bg-gray-100 p-4 border border-gray-300 mb-2 rounded-md"
                >
                  <div className="font-bold">{request.fullname}</div>
                  <div className="text-sm flex gap-5 items-center">
                    <span className="text-gray-500">{request.date}</span>
                    <span className={`ml-2 ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No funding requests found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Startup_FundingHistory;