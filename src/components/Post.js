import React,{useState} from 'react'
import AvatarImg from './AvatarImg'
import FileButton from './FileButton'
import LeftHeader from './LeftHeader'
import MiniButton from './MiniButton'
import {collection, addDoc, db, serverTimestamp, deleteObject, storage, ref} from '../firebase'

export default function Post() {
    const [postMsg, setPostMsg] = useState('')
    const [url, setUrl] = useState('')
    const [disable, setDisable] = useState(false)
    const [file, setFile] = useState(null)

    async function makePost(e){
        e.preventDefault()
        const res = await addDoc(collection(db, 'posts'), {
            img: url,
            name: "Roy",
            msg: postMsg,
            timestamp: serverTimestamp(),
            imgName: file?.name || ""
        })
        if (res){
            setPostMsg('')
            setFile(null)
            setUrl('')
            setDisable(false)
        }
    }

    async function makeReset(e){
        e.preventDefault()
        if(!file && !postMsg){
            return
        }else{
            await file && deleteObject(ref(storage, `images/${file.name}`))
            setPostMsg('')
            setFile(null)
            setUrl('')
            setDisable(false)
        }
    }

    return (
        <div className="post h-73 bg-white rounded-lg overflow-hidden mb-8">
            <LeftHeader text="create post" noBorder/>
            <div className="post__content h-72 px-8">

                <form className="w-full h-full border-0 border-t border-solid border-gray-300 py-6 flex justify-between flex-col">
                    <div className="comment flex gap-6">
                        <AvatarImg image="hot.jpg"/>
                        <textarea value={postMsg} onChange={(e)=>setPostMsg(e.target.value)} className="w-full h-20 resize-none text-2xl text-gray-700 pt-4 placeholder-gray-400 font-medium normal-case" placeholder="post whatever you are thinking"></textarea>
                    </div>
                    <div className="post__container">
                        <div className="post__icons flex justify-between items-center">
                            <div className="icons__container flex gap-6 items-center">
                                <FileButton setFile={setFile} setUrl={setUrl} setDisable={setDisable} fileInfo={file} iconName="fas fa-map-marker-alt" bg/>
                                <FileButton setFile={setFile} setUrl={setUrl} setDisable={setDisable} fileInfo={file} iconName="fas fa-music"/>
                                <FileButton setFile={setFile} setUrl={setUrl} setDisable={setDisable} fileInfo={file} iconName="far fa-image"/>
                                <FileButton setFile={setFile} setUrl={setUrl} setDisable={setDisable} fileInfo={file} iconName="fas fa-video"/>
                                <FileButton setFile={setFile} setUrl={setUrl} setDisable={setDisable} fileInfo={file} iconName="fas fa-camera"/>
                                {file && <button className="py-2 px-8 bg-gray-100 shadow-md text-xl capitalize font-semibold text-blue-500 rounded-full border border-solid border-gray-300 cursor-default">{file.name}</button>}
                                {disable && <i className="fas fa-circle-notch text-2xl text-blue-500"></i>}
                            </div>
                            <MiniButton text="Reset" makeReset={makeReset}/>
                        </div>
                        <input disabled={disable || (!postMsg && !url)} onClick={makePost} type="submit" value="post" className={`postButton w-full text-center py-3 ${disable || (!postMsg && !url)?'bg-blue-300':'bg-blue-400 hover:bg-red-500 cursor-pointer'} rounded-lg text-white font-medium text-2xl mt-4 transition duration-500`}/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
