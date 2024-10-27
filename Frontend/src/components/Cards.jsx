import React from 'react'

const Cards = ({item}) => {
    // console.log(item);
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
    </div>
    </div>
    </>
  )
}

export default Cards
