import React from 'react'
import Logo from './Logo'

export default function Create() {
    return (
        <div className="create h-88 bg-white rounded-lg overflow-hidden mb-8 flex">
            <div className="create__left md:w-1/4 w-1/5 h-full relative overlay">
                <img src="images/bird.png" alt="bird" className="w-full h-full object-cover border-0"/>
                <span>create</span>
            </div>
            <div className="create__right h-full w-3/4 px-5 py-8 flex flex-col justify-between">
                <Logo black/>
                <p className="text-gray-700 font-normal text-3xl md:text-xl leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem exercitationem consectetur dolorum placeat fugiat culpa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, aspernatur!</p>
                <a href="#weather" className="create__button inline-block w-full border border-solid border-red-500 text-center rounded-lg py-6 md:py-3 cursor-pointer text-2xl md:text-xl text-red-500 font-medium hover:text-white hover:bg-red-500 transition duration-500 shadow-lg">
                    create post
                </a>
            </div>
        </div>
    )
}
