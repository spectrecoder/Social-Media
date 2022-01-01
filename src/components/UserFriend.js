import React from 'react'
import { deleteDoc, doc, db } from '../firebase'

export default function UserFriend({friendName, friendAvatar, uid, fId}) {
    function rmvFriend(){
        deleteDoc(doc(db, `friends/${uid}/friend`, fId))
    }

    return (
        <div className="sm:px-6 px-2 py-3 border-0 border-b border-solid border-gray-200 flex justify-between items-center">
            <div className="friend__Avatar flex gap-4 items-center">
                <img src={`images/${friendAvatar}`} alt="user friend" className="w-16 h-16 rounded-full border-0 object-cover"/>
                <div className="friendName">
                    <h3 className="text-xl text-gray-700 font-semibold">{friendName}</h3>
                    <p className="text-lg text-gray-500 font-normal normal-case"><span className="font-semibold">{friendName}</span> is a mutule friend</p>
                </div>
            </div>
            <div className="friendIcons">
                <i className="fas fa-heart text-2xl text-gray-600 hover:text-red-600 mr-3 cursor-pointer hidden sm:inline-block"></i>
                <i onClick={rmvFriend} className="fas fa-trash-alt text-2xl text-gray-600 hover:text-red-600 cursor-pointer"></i>
            </div>
        </div>
    )
}
