import React from 'react'

export default function Ad() {
    return (
        <div className="ad h-64 bg-white rounded-lg overflow-hidden mb-8 relative overlay">
            <img src="images/mount.png" alt="mountain" className="w-full h-full object-cover border-0"/>
            <h3 className="absolute top-10 left-8 text-2xl text-white font-medium leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae asperiores quam nulla modi.</h3>
            <div className="goal absolute bottom-8 right-10 text-white sm:flex gap-3 items-center cursor-pointer bg-red-500 py-2 px-3 rounded-full border-2 border-red-500 border-solid hover:border-red-500 hover:bg-white group transition duration-300 hidden">
                <span className="inline-block w-12 h-12 rounded-full bg-white text-center leading-extraLoose text-gray-400 text-xl group-hover:bg-red-500 group-hover:text-white"><i className="fas fa-edit"></i></span>
                <h3 className="font-medium text-xl text-white group-hover:text-red-500"> choose a goal</h3>
            </div>
        </div>
    )
}
