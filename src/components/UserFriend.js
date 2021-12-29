import React from 'react'

export default function UserFriend() {
    return (
        <div className="px-6 py-3 border-0 border-b border-solid border-gray-200 flex justify-between items-center">
            <div className="friendAvatar flex gap-4 items-center">
                <img src={`images/pic1.png`} alt="user friend" className="w-16 h-16 rounded-full border-0 object-cover"/>
                <div className="friendName">
                    <h3 className="text-xl text-gray-700 font-semibold">alucard</h3>
                    <p className="text-lg text-gray-500 font-normal normal-case"><span className="font-semibold">alucard</span> is a mutule friend</p>
                </div>
            </div>
            <div className="friendIcons">
                <i className="fas fa-heart text-2xl text-gray-600 hover:text-red-600 mr-3 cursor-pointer"></i>
                <i className="fas fa-trash-alt text-2xl text-gray-600 hover:text-red-600 cursor-pointer"></i>
            </div>
        </div>
    )
}
