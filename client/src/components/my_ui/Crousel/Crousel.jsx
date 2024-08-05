import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Card/Card';

export default function Crousel({elements}) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };
  return (
    <Slider {...settings}>
        {
            elements.map((item)=>{
                return (<Card/>)
            })
        }
    </Slider>
  )
}
