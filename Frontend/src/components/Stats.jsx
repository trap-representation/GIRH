import React from 'react'

const Stats = () => {
  return (
    <>
          {/* Interactive Stats Section */}
          <section className="stats dark:bg-slate-900">
        <h2 className='md:text-2xl text-[20px] font-bold dark:text-white '>Impact In <span className='text-pink-500 font-semibold hover:text-pink-400'>Numbers</span></h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className='text-pink-500 font-semibold'>500+</h3>
            <p className='font-semibold text-slate-600'>Research Projects Funded</p>
          </div>
          <div className="stat-item">
            <h3 className='text-pink-500 font-semibold'>300+</h3>
            <p className='font-semibold text-slate-600'>Patents Filled</p>
          </div>
          <div className="stat-item">
            <h3 className='text-pink-500 font-semibold'>150+</h3>
            <p className='font-semibold text-slate-600'>Startups Supported</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats
