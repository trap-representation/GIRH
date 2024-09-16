import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PatentList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('/api/patentLists')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = () => {
    const results = users.filter(user => 
      (filter === 'All' || user.status === filter) &&
      (user.fullname?.toLowerCase().includes(search.toLowerCase()) || '')
    );
    setFilteredUsers(results);
  };

  return (
    <><Navbar/>
      <div className='min-h-screen flex items-center justify-center bg-[url("/img1.png")] bg-cover md:bg-center bg-[right] bg-fixed  top-0 left-0 w-full h-full z-0 dark:bg-[url("/img2.png")] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-[140px] pb-[20px]'>
        
        <div className="container mx-auto bg-white p-5 shadow-md w-full max-w-3xl rounded-md">
          <h1 className='text-center text-2xl font-bold p-[1px] text-black'>PATENT-LISTS</h1>
          <hr className='mt-[20px] pb-[20px]'/>
          <div className="mt-4 mb-4 flex justify-center items-center gap-4 flex-col md:flex-row">
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 bg-gray-100 rounded-md text-black"
            />
            <div className='space-x-3'>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-2 bg-gray-100 rounded-sm text-black"
            >
              <option value="All">See All</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
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

          {/* Scrollable User List */}
          <div className='mt-4 h-[400px] overflow-y-auto text-black'>
            <h2 className="text-xl font-bold mb-2 text-black">User List</h2>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div 
                  key={user.id} // Use unique identifier from user data
                  className="flex justify-between items-center bg-gray-100 p-4 border border-gray-300 mb-2 rounded-md text-black"
                >
                  <div className="font-bold">{user.fullname}</div>
                  <div className="text-sm flex gap-5 items-center">
                    <span className="text-gray-500">{user.date}</span>
                    <span className={`ml-2 ${user.status.toLowerCase()}`}>{user.status}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No users found</p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default PatentList;



