import React,{useState, useEffect} from 'react'
import Friend from './Friend'
import LeftHeader from './LeftHeader'
import {useSelector} from 'react-redux'
import {profile} from '../slices/profileSlice'
import { db, collection, onSnapshot, query, orderBy } from '../firebase'

export default function Followers() {
    const [friendsList, setFriendsList] = useState([])
    const {info} = useSelector(profile)

    useEffect(()=>{
        const unSub = onSnapshot(query(collection(db, `friends/${info.uid}/friend`), orderBy('timestamp', 'desc')), snapshot=>{
            setFriendsList(snapshot.docs.map(doc=>({friendId: doc.id, ...doc.data()})))
        })
        return ()=>unSub()
    },[info.uid])

    return (
        <div className="followers mb-8 rounded-lg overflow-hidden h-88 bg-white">
            <LeftHeader text="who is following"/>
            <div className="followers__friends p-5 overflow-y-scroll myScroll h-83">
                <Friend friendsList={friendsList} uid={info.uid} name="red riot" pic="pic1.png"/>
                <Friend friendsList={friendsList} uid={info.uid} name="laxus bix" pic="pic2.png"/>
                <Friend friendsList={friendsList} uid={info.uid} name="alucard" pic="pic3.png"/>
                <Friend friendsList={friendsList} uid={info.uid} name="rose neil" pic="pic4.png"/>
                <Friend friendsList={friendsList} uid={info.uid} name="violet ark" pic="hot.jpg"/>
                <Friend friendsList={friendsList} uid={info.uid} name="gray rail" pic="pic1.png"/>
                <Friend friendsList={friendsList} uid={info.uid} name="erza xius" pic="pic2.png" last/>
            </div>
        </div>
    )
}
