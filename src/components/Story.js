import React from 'react'

export default function Story({image, bgImg}) {
    return (
        <div className="story w-52 h-full rounded-xl overflow-hidden relative cursor-pointer">
            <img src={`images/${bgImg}`} alt="story" className="w-full h-full object-cover border-0 transition duration-500 bigImage"/>
            <div className="story__overlay bg-black opacity-20 absolute w-full h-full z-10 top-0 left-0"></div>
            <h3 className="text-xl text-black font-medium absolute left-0 w-full text-center">Harry Martinsson</h3>
            {image
                ?<img src={`images/${image}`} alt="images" className={`absolute top-5 left-6 w-18 h-18 rounded-full object-cover border-2 border-white border-solid cursor-pointer`}/> 
                :<i className="fas fa-plus plus w-16 h-16 rounded-full absolute top-5 left-6 text-white text-4xl border-2 border-solid border-white text-center leading-loose"></i>
            }
        </div>
    )
}
