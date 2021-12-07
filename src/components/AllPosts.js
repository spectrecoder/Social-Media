import React,{useEffect, useState} from 'react'
import SentPost from './SentPost'
import { collection, onSnapshot, db, query, orderBy } from '../firebase'

export default function AllPosts() {
    const collectionRef = collection(db, 'posts')
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const unSub = onSnapshot(query(collectionRef, orderBy('timestamp', 'desc')), (snap)=>{
            setPosts(snap.docs.map(doc=>({id: doc.id, ...doc.data()})))
        })
        return ()=>unSub()
    },[])

    return (
        <div className="allPosts">
            {posts.map(post=><SentPost key={post.id} image={post.img} msg={post.msg} id={post.id} imgName={post.imgName}/>)}
        </div>
    )
}
