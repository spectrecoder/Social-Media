import React,{useState, useEffect} from 'react'
import { deleteDoc, doc, db, collection, addDoc } from '../firebase'

export default function Friend({pic, last, name, uid, friendsList}) {
    const [added, setAdded] = useState(false)
    const [id, setId] = useState('')

    useEffect(()=>{
        friendsList.forEach(friend=>{
            if(friend.friendName === name){
                setAdded(true)
                setId(friend.friendId)
            }
        })
    },[friendsList, name])

    async function addFriend(){
        const res = await addDoc(collection(db, `friends/${uid}/friend`),{
            friendAvatar: pic,
            friendName: name,
        })
        if(res){
            setAdded(true)
        }
    }

    async function removeFriend(){
        await deleteDoc(doc(db, `friends/${uid}/friend`, id))
        setAdded(false)
    }

    return (
        <div className={`friend flex justify-between items-center ${last?'mb-0':'mb-4'}`}>
            <div className="friend__name flex gap-3 items-center">
                <img src={`images/${pic}`} alt="friend" className="w-18 h-18 rounded-full object-cover border-none"/>
                <h3 className="text-xl font-semibold text-gray-500">{name}</h3>
            </div>
            {added ? 
            <div className="addFriend__button flex items-center gap-3">
                <span className="bg-red-100 text-red-500 text-xl rounded-full py-1 px-4"><i className="fas fa-check"></i> added</span>
                <i className="fas fa-times-circle text-red-500 text-2xl cursor-pointer" onClick={removeFriend}></i>
            </div>

            : <div onClick={addFriend} className="friend__button buttonUp text-red-500 text-lg font-medium cursor-pointer relative leading-none">add friend</div>}
        </div>
    )
}
