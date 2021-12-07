import React from 'react'

export default function Birthday() {
    return (
        <div className="birthday rounded-t-lg overflow-hidden h-86 bg-gray-100 mb-8">
            <div className="birthday__header bg-purple-600 flex justify-between items-center py-3 px-4">
                <div className="birthday__left flex items-center gap-3">
                    <img src="images/hot.jpg" alt="profile" className="border-none w-16 h-16 rounded-full object-cover"/>
                    <h3 className="font-semibold text-xl text-white leading-none">22nd birthday</h3>
                </div>
                <div className="birthday__right text-center">
                    <h3 className="font-normal italic text-4xl text-white leading-none">19</h3>
                    <h4 className="font-normal text-xl text-white">september</h4>
                </div>
            </div>
            <div className="birthday__image w-full h-64 py-6">
                <img src="images/cake.svg" alt="cake" className="border-none w-full h-full object-contain"/>
            </div>
            <div className="birthday__content px-10">
                <h3 className="text-2xl text-gray-800 text-center font-semibold pb-4"> <span className="text-pink-600 text-2.5xl">Rave Dragneels</span> valentine's birthday</h3>
                <p className="font-semibold text-gray-400 text-xl text-center">leave a message with your best wishes on his profile.</p>
            </div>
        </div>
    )
}
