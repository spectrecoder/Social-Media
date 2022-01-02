import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SuggItem from './SuggItem';
import Next from './Next';
import Prev from './Prev';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 270,
            settings: {
              slidesToShow: 1,
            }
          },
    ]
  }

export default function Suggested() {
    return (
        <div className="suggested h-25 bg-white rounded-lg overflow-hidden mb-8">

            <div className="suggested__header flex items-center gap-4  h-32 pl-8">
                <i className="fab fa-gripfire text-4xl w-16 h-16 rounded-full border-2 border-solid border-gray-700 text-gray-700 text-center leading-loose"></i>
                <div className="headerDesc">
                    <p className="text-red-600 text-xl font-semibold">suggested</p>
                    <p className="text-lg text-gray-500 font-semibold">follow similar people</p>
                </div>
            </div>

            <div className="suggested__people relative">
                <Slider {...settings}>
                    <SuggItem name="Roy Ark" image="sugg1.png" location="Dhaka, Bangladesh"/>
                    <SuggItem name="Shown Rail" image="sugg2.png" location="Stockholm, Sweden"/>
                    <SuggItem name="Laxus dreyar" image="sugg3.png" location="Rom, Italy"/>
                    <SuggItem name="Gray end" image="sugg4.png" location="NYC, America"/>
                </Slider>
            </div>

        </div>
    )
}
