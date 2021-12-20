import React,{useState} from 'react'
import AvatarImg from './AvatarImg'
import FileButton from './FileButton'

export default function UpdatePost() {
    const [updatePostMsg, setUpdatePostMsg] = useState('')
    const [updatedUrl, setUpdatedUrl] = useState('')
    const [updatedDisable, setUpdatedDisable] = useState(false)
    const [updatedFile, setUpdatedFile] = useState(null)

    return (
        <div className="updatePost w-120 bg-white p-9 flex gap-6 rounded-lg overflow-hidden">
            <AvatarImg image="hot.jpg"/>
            <form className="updatePost__container border border-solid border-gray-300 w-full p-4 rounded-lg">
                <textarea value={updatePostMsg} onChange={(e)=>setUpdatePostMsg(e.target.value)} className="w-full h-28 resize-none text-xl text-gray-700 placeholder-gray-400 font-medium normal-case" placeholder="your new message"></textarea>
                <div className="updatePost__icon flex justify-end items-center gap-6">
                    <FileButton setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-music"/>
                    <FileButton setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="far fa-image"/>
                    <FileButton setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-video"/>
                    <FileButton setFile={setUpdatedFile} setUrl={setUpdatedUrl} setDisable={setUpdatedDisable} iconName="fas fa-camera"/>
                    <input disabled={updatedDisable || (!updatePostMsg && !updatedUrl)} type="submit" value="update" className={`postButton px-8 py-2 ${updatedDisable || (!updatePostMsg && !updatedUrl)?'bg-blue-300':'bg-blue-400 hover:bg-red-500 cursor-pointer'} rounded-lg text-white font-medium text-xl transition duration-500`}/>
                </div>
            </form>
        </div>
    )
}
