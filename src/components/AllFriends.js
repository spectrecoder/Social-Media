import React,{useEffect, useState} from 'react'
import UserFriend from './UserFriend'
import { db, collection, onSnapshot, query, orderBy } from '../firebase'

export default function AllFriends({open, uid, spanRef, sec__spanRef}) {
    const [lists, setLists] = useState([])

    useEffect(()=>{
        const unSub = onSnapshot(query(collection(db, `friends/${uid}/friend`), orderBy('timestamp', 'desc')), snapshot=>{
            setLists(snapshot.docs.map(doc=>({friendUid: doc.id, ...doc.data()})))
        })
        return ()=>unSub()
    },[uid])

    useEffect(()=>{
        spanRef.current.innerText = lists.length
        sec__spanRef.current.innerText = lists.length
    },[lists, spanRef])

    return (
        <div className={`friendList trans absolute top-112 md:top-110 left-0 lg:top-105 lg:left-46 bg-white w-full sm:w-89 shadow-xl border border-gray-200 border-solid max-h-89 ${open?'friendList__show':'friendList__hide'} overflow-y-scroll myScroll`}>
            <h3 className="friendsCount px-5 py-3 border-0 border-b border-gray-200 border-solid text-xl font-semibold text-gray-700">{lists.length} new friends</h3>
            {lists.map(elm=>(<UserFriend key={elm.friendUid} friendAvatar={elm.friendAvatar} friendName={elm.friendName} uid={uid} fId={elm.friendUid}/>))}
        </div>
    )
}
