import React,{useRef} from 'react'
import {storage,ref,uploadBytesResumable,getDownloadURL,deleteObject} from '../firebase'

export default function FileButton({iconName, setDisable, setUrl, setFile, fileInfo, disable}) {
    const fileRef = useRef()

    function handleClick(){
        if(fileInfo || disable){
            return
        }else{
            fileRef.current.click()
        }
    }

    function selectFile(e){
        const file = e.target.files[0]
        if(!file){
            return
        }
        setDisable(true)
        const storageRef = ref(storage, `images/${file.name}`)
        uploadBytesResumable(storageRef, file).then(async snapshot => {
            const downloadURL = await getDownloadURL(storageRef)
            setFile(file)
            setDisable(false)
            setUrl(downloadURL)
        }).catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <>
            <input ref={fileRef} type="file" className="hidden" onChange={selectFile}/>
            <i className={`${iconName} text-2xl ${fileInfo || disable? 'text-gray-400 cursor-not-allowed': 'text-gray-500 cursor-pointer'}`} onClick={handleClick}></i>
        </>
    )
}
