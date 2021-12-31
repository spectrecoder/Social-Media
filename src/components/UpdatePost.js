import React,{useState, useEffect} from 'react'
import AvatarImg from './AvatarImg'
import FileButton from './FileButton'
import {useSelector, useDispatch} from 'react-redux'
import {profile, openBox, setMessage} from '../slices/profileSlice'
import {doc, updateDoc, db} from '../firebase'

export default function UpdatePost({msg, id, url, imgName, userImgName}) {
    const [updatePostMsg, setUpdatePostMsg] = useState('')
    const [updatedUrl, setUpdatedUrl] = useState('')
    const [updatedDisable, setUpdatedDisable] = useState(false)
    const [updatedFile, setUpdatedFile] = useState(null)
    const [uImageName, setUImageName] = useState('')
    const user = useSelector(profile)
    const dispatch = useDispatch()

    useEffect(()=>{
        setUpdatePostMsg(msg || '')
        setUpdatedUrl(url || '')
        setUpdatedFile((imgName&&{name:userImgName}) || null)
        setUImageName(imgName)
    },[msg])

    function updatePost(e){
        e.preventDefault()
        updateDoc(doc(db, "posts", id), {
            msg: updatePostMsg,
            img: updatedUrl || '',
            imgName: uImageName,
            userImageName: updatedFile?.name || '' ,
        })
        dispatch(openBox({class: 'hidden', postData:null}))
        dispatch(setMessage({color: 'green', notice: 'successfully updated', icon: 'fas fa-check', show:true}))
    }

    function deleteImage(e){
        e.preventDefault()
        setUpdatedUrl('')
        setUpdatedFile('')
        setUImageName('')
    }


    return (
        <div className="updatePost w-120 bg-white p-9 flex gap-6 rounded-lg overflow-hidden">
            <AvatarImg image={user.info.photoURL} name={`${user.info.photoURL ? '': user.info.displayName?.split(" ")[0][0]}`}/>
            <form className="updatePost__container border border-solid border-gray-300 w-full p-4 rounded-lg">
                <textarea value={updatePostMsg} onChange={(e)=>setUpdatePostMsg(e.target.value)} className="w-full h-28 resize-none text-xl text-gray-700 placeholder-gray-400 font-medium normal-case" placeholder="your new message"></textarea>
                <div className="updatePost__icon flex justify-end items-center gap-6">
                    {updatedFile && <button className="py-2 px-8 bg-gray-100 shadow-md text-xl capitalize font-semibold text-blue-500 rounded-full border border-solid border-gray-300 cursor-default relative">{updatedFile.name} <i className="fas fa-times-circle text-lg absolute top-0 right-2 cursor-pointer" onClick={deleteImage}></i></button>}
                    {updatedDisable && <i className="fas fa-circle-notch text-2xl text-blue-500"></i>}
                    <FileButton setImageName={setUImageName} setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-music" disable={updatedDisable} fileInfo={updatedFile}/>
                    <FileButton setImageName={setUImageName} setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="far fa-image" disable={updatedDisable} fileInfo={updatedFile}/>
                    <FileButton setImageName={setUImageName} setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-video" disable={updatedDisable} fileInfo={updatedFile}/>
                    <FileButton setImageName={setUImageName} setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-camera" disable={updatedDisable} fileInfo={updatedFile}/>
                    <input onClick={updatePost} disabled={updatedDisable || (!updatePostMsg && !updatedUrl)} type="submit" value="update" className={`postButton px-8 py-2 ${updatedDisable || (!updatePostMsg && !updatedUrl)?'bg-blue-300':'bg-blue-400 hover:bg-red-500 cursor-pointer'} rounded-lg text-white font-medium text-xl transition duration-500`}/>
                </div>
            </form>
        </div>
    )
}
