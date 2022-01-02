import React,{useState, useEffect} from 'react'
import AvatarImg from './AvatarImg'
import PostMsg from './PostMsg'
import SideItem from './SideItem'
import ToggleIcon from './ToggleIcon'
import { deleteDoc, doc, db, collection, onSnapshot, query, orderBy, addDoc, serverTimestamp, deleteObject, ref, storage, getDocs } from '../firebase'
import FlipMove from 'react-flip-move'
import {useSelector, useDispatch} from 'react-redux'
import {profile, openBox} from '../slices/profileSlice'

export default function SentPost({image,msg,id,imgName,name,userId,userImg, userImgName}) {
    const [openMsg, setOpenMsg] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const user = useSelector(profile)
    const dispatch = useDispatch()

    useEffect(()=>{
        const unSub = onSnapshot(query(collection(db, `posts/${id}/comments`), orderBy('time', 'desc')), snapshot=>{
            setComments(snapshot.docs.map(doc=>({comId: doc.id, ...doc.data()})))
        })
        return ()=>unSub()
    },[id])

    async function submitComment(e){
        e.preventDefault()
        const res = await addDoc(collection(db, `posts/${id}/comments`),{
            username: user.info.displayName?.split(" ")[0],
            comment,
            avatar: user.info.photoURL || user.info.displayName?.split(" ")[0][0],
            time: serverTimestamp(),
            userId: user.info.uid
        })
        if (res){
            setComment('')
        }
    }

    async function removeDoc(){
        if(userId === user.info.uid){
            deleteDoc(doc(db, 'posts', id))
            imgName && deleteObject(ref(storage, `images/${imgName}`))
            const allCommentDocs = await getDocs(collection(db, `posts/${id}/comments`))
            allCommentDocs.forEach(document=>{
                deleteDoc(doc(db, `posts/${id}/comments`, document.id))
            })
        }else{
            return
        }
    }

    function editDoc(){
        if(userId === user.info.uid){
            setShowBtn(false)
            dispatch(openBox({class: 'flex', postData:{message: msg, docId: id, imgUrl: image, imgName, userImgName}}))
        }else{
            return
        }
    }

    return (
        <div className={`sentPost p-7 bg-white rounded-xl overflow-hidden mb-8`}>

            <div className={`sentPost__header flex justify-between ${image&&'mb-7'} relative`}>
                <div className="imageContent flex gap-6 items-center">
                    <AvatarImg image={`${userImg.length === 1? '' : userImg}`} name={`${userImg.length === 1? userImg : ''}`}/>
                    <div className="content">
                        <h3 className="text-xl text-red-500 font-semibold">{name}</h3>
                        <p className="text-lg text-gray-400 font-semibold">sponsored <i className="fas fa-globe-americas"></i></p>
                    </div>
                </div>
                <i className="fas fa-ellipsis-h text-xl text-gray-600 cursor-pointer" onClick={()=>setShowBtn(state=>!state)}></i>
                <div className={`operations absolute top-1/3 right-0 shadow-lg rounded-lg z-10 border border-solid border-gray-300 ${showBtn?'block':'hidden'} rounded-lg overflow-hidden`}>
                    <button onClick={removeDoc} className={`select-none deleteBtn py-2 px-8 bg-white font-semibold text-lg block w-full border-0 border-b border-solid border-gray-300 ${userId === user.info.uid ? 'hover:text-white text-gray-700 hover:bg-red-500 transition duration-500' : 'text-gray-500 cursor-not-allowed'}`}>Delete</button>
                    <button onClick={editDoc} className={`select-none editBtn py-2 px-8 bg-white font-semibold text-lg block w-full ${userId === user.info.uid ? 'hover:text-white text-gray-700 hover:bg-red-500 transition duration-500' : 'text-gray-500 cursor-not-allowed'}`}>Edit</button>
                </div>
            </div>

            {image && <div className="sentPost__image h-81 relative">
                <img src={image} alt="post__image" className="border-0 object-cover h-full w-full"/>
                <div className="iconsContainer absolute -bottom-6 left-1/2 flex gap-4">
                    <i className="fas fa-thumbtack icon__style bg-purple-600"></i>
                    <i className="far fa-thumbs-up icon__style bg-blue-500"></i>
                    <i className="far fa-thumbs-down icon__style bg-red-600"></i>
                </div>
            </div>}

            {msg&&<p className="sentPost__comment py-8 text-xl text-gray-400 font-semibold border-0 border-b border-gray-300 border-solid normal-case">
                {msg}
            </p>}

            <div className="sentPost__icons pt-7 flex justify-between items-center">
                <div className="iconsToggle flex">
                    <ToggleIcon iconName="fas fa-eye" amount="29"/>
                    <ToggleIcon iconName="fas fa-heart" amount="2k"/>
                    <ToggleIcon iconName="far fa-comment-dots" amount={comments.length || 0} setOpenMsg={setOpenMsg}/>
                    <ToggleIcon iconName="fas fa-share-alt" amount="23k"/>
                </div>
                <div className="rmd">
                    <div className="newPeople sm:flex justify-center hidden">
                        <SideItem avatar="pic1.png"/>
                        <SideItem avatar="pic2.png" margin="4"/>
                        <SideItem avatar="pic3.png" margin="4"/>
                        <SideItem avatar="pic4.png" margin="4"/>
                        <SideItem avatar="hot.jpg" margin="4"/>
                    </div>
                    <p className="text-lg text-gray-700 font-semibold mt-3 hidden sm:block">You, Rahul and <span className="text-red-500">39+ more</span> liked</p>
                </div>
            </div>

            <div className={`sentPost__messages pt-5 overflow-hidden ${openMsg?"block":"hidden"}`}>
                <div className="messageContainer overflow-scroll max-h-82 myScroll">
                    <FlipMove>
                        {comments.map(data=><PostMsg key={data.comId} image={data.avatar} comment={data.comment} name={data.username} time={data.time} comId={data.comId} id={id} userId={data.userId} ownerId={userId}/>)}
                    </FlipMove>
                </div>
                <div className="sendComment flex gap-4">
                    {user.info.photoURL ? <img src={user.info.photoURL} alt="images" className={` w-16 h-16 rounded-full object-cover border-0 cursor-pointer`}/> : <i className={`w-14 h-14 rounded-full border-0 cursor-pointer bg-blue-500 text-white text-3xl font-semibold flex items-center justify-center not-italic overflow-hidden normal-case`}>{user.info.displayName?.split(" ")[0][0]}</i>}
                    <form className="w-full">
                        <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full h-32 resize-none rounded-lg bg-gray-200 px-4 py-5 text-gray-600 text-lg normal-case" placeholder="send a message"></textarea>
                        <input disabled={!comment} onClick={submitComment} type="submit" value="send" className={`py-2 px-8 rounded-lg text-white ${comment?'bg-blue-500 cursor-pointer hover:bg-red-500':'bg-blue-300'} font-medium text-xl uppercase transition duration-500`}/>
                    </form>
                </div>
            </div>

        </div>
    )
}
