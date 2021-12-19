import React,{useState, useEffect} from 'react'
import AvatarImg from './AvatarImg'
import PostMsg from './PostMsg'
import SideItem from './SideItem'
import ToggleIcon from './ToggleIcon'
import { deleteDoc, doc, db, collection, onSnapshot, query, orderBy, addDoc, serverTimestamp, deleteObject, ref, storage } from '../firebase'
import FlipMove from 'react-flip-move'

export default function SentPost({image,msg,id,imgName}) {
    const [openMsg, setOpenMsg] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(()=>{
        const unSub = onSnapshot(query(collection(db, `posts/${id}/comments`), orderBy('time', 'desc')), snapshot=>{
            setComments(snapshot.docs.map(doc=>({comId: doc.id, ...doc.data()})))
        })
        return ()=>unSub()
    },[id])

    async function submitComment(e){
        e.preventDefault()
        const res = await addDoc(collection(db, `posts/${id}/comments`),{
            username: 'Sunny',
            comment,
            avatar: 'pic1.png',
            time: serverTimestamp()
        })
        if (res){
            setComment('')
        }
    }

    function removeDoc(){
        deleteDoc(doc(db, 'posts', id))
        imgName && deleteObject(ref(storage, `images/${imgName}`))
    }

    return (
        <div className={`sentPost p-7 bg-white rounded-xl overflow-hidden mb-8`}>

            <div className={`sentPost__header flex justify-between ${image&&'mb-7'} relative`}>
                <div className="imageContent flex gap-6 items-center">
                    <AvatarImg noBorder image="pic1.png"/>
                    <div className="content">
                        <h3 className="text-xl text-red-500 font-semibold">Digital Market</h3>
                        <p className="text-lg text-gray-400 font-semibold">sponsored <i className="fas fa-globe-americas"></i></p>
                    </div>
                </div>
                <i className="fas fa-ellipsis-h text-xl text-gray-600 cursor-pointer" onClick={()=>setShowBtn(state=>!state)}></i>
                <div className={`operations absolute top-1/3 right-0 shadow-lg rounded-lg z-10 border border-solid border-gray-300 ${showBtn?'opacity-100':'opacity-0'}`}>
                    <button onClick={removeDoc} className={`deleteBtn py-2 px-8 bg-white text-gray-700 font-semibold text-lg block w-full border-0 border-b border-solid border-gray-300 hover:text-white hover:bg-red-500 transition duration-700`}>Delete</button>
                    <button onClick={removeDoc} className={`editBtn py-2 px-8 bg-white text-gray-700 font-semibold text-lg block w-full hover:text-white hover:bg-red-500 transition duration-500`}>Edit</button>
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

            {msg&&<p className="sentPost__comment py-8 text-xl text-gray-400 font-semibold border-0 border-b border-gray-300 border-solid">
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
                    <div className="newPeople flex justify-center">
                        <SideItem avatar="pic1.png"/>
                        <SideItem avatar="pic2.png" margin="4"/>
                        <SideItem avatar="pic3.png" margin="4"/>
                        <SideItem avatar="pic4.png" margin="4"/>
                        <SideItem avatar="hot.jpg" margin="4"/>
                    </div>
                    <p className="text-lg text-gray-700 font-semibold mt-3">You, Rahul and <span className="text-red-500">39+ more</span> liked</p>
                </div>
            </div>

            <div className={`sentPost__messages pt-5 overflow-hidden ${openMsg?"block":"hidden"}`}>
                <div className="messageContainer overflow-scroll max-h-82 myScroll">
                    <FlipMove>
                        {comments.map(data=><PostMsg key={data.comId} image={data.avatar} comment={data.comment} name={data.username} time={data.time} comId={data.comId} id={id}/>)}
                    </FlipMove>
                </div>
                <div className="sendComment flex gap-4">
                    <img src={`images/pic1.png`} alt="images" className={` w-16 h-16 rounded-full object-cover border-0 cursor-pointer`}/>
                    <form className="w-full">
                        <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full h-32 resize-none rounded-lg bg-gray-200 px-4 py-5 text-gray-600 text-lg normal-case" placeholder="send a message"></textarea>
                        <input disabled={!comment} onClick={submitComment} type="submit" value="send" className={`py-2 px-8 rounded-lg text-white ${comment?'bg-blue-500 cursor-pointer hover:bg-red-500':'bg-blue-300'} font-medium text-xl uppercase transition duration-500`}/>
                    </form>
                </div>
            </div>

        </div>
    )
}
