import React from 'react'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <>
    <div>
      <h1 className='text-center text-3xl font-bold text-black dark:text-white'>OUR <span className='text-pink-500'>CONTENTS</span></h1>
      <main className="main-content1 text-black dark:text-black ">
         
            <section class="card1">
                 <Link to={"/research"}><h2 className='font-bold text-xl text-center'>RESEARCH</h2></Link>
            </section>
          
            <section class="card1">
                <Link to={"/startup"}><h2 className='font-bold text-xl text-center'>START-UPs</h2></Link>
            </section>
          
            <section class="card1">
                <Link to={"/chats"}><h2 className='font-bold text-xl text-center'>REAL-TIME-CHAT</h2></Link>
            </section>
          
            <section class="card1">
                <Link to={"/resources"}><h2 className='font-bold text-xl text-center'>RESOURCES</h2></Link>
            </section>
             
        </main>
      </div>
    </>
  )
}

export default Content
