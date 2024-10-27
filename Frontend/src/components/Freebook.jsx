import React, { useRef } from "react";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
const Freebook = () => {
    const filterData = list.filter((data)=>data.category==="Photo")

    let sliderRef = useRef(null);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
  return (
    <>
    <div className='md:max-w-screen-lg max-w-[320px] container mx-auto md:px-20 px-4 '>  
    <div>
    <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {filterData.map((item) => (
            <Cards item={item} key={item.id}/>
        )
        )}

      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook


