import React, { forwardRef } from 'react'
import { deleteDoc, doc, db } from '../firebase'
import {useSelector} from 'react-redux'
import {profile} from '../slices/profileSlice'

const PostMsg = forwardRef(({image, comment, name, time, comId, id}, ref) => {
    const user = useSelector(profile)

    function removeComment(){
        deleteDoc(doc(db, `posts/${id}/comments`, comId))
    }

    return (
        <div ref={ref} className="postMsg flex gap-4 mb-4">
            <img src={user.info.photoURL} alt="images" className={` w-16 h-16 rounded-full object-cover cursor-pointer border-0`}/>
            <div className="content  border-0 border-b border-gray-300 border-solid w-full">
                <h3 className="text-xl text-gray-800 font-semibold">{name}</h3>
                <p className="text-xl text-gray-600 font-medium mb-2 mt-1 normal-case">{comment}</p>
                <div className="time flex gap-6 items-center pb-4">
                    <p className="text-lg text-gray-700 font-medium">{time?.toDate().toDateString()}</p>
                    <i className="far fa-trash-alt text-xl text-gray-800 cursor-pointer" onClick={removeComment}></i>
                    <p className="flex items-center gap-2 text-gray-800"><i className="fas fa-heart text-xl"></i> <span className="text-lg font-medium">20</span></p>
                </div>
            </div>
        </div>
    )
})

export default PostMsg