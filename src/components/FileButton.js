import React,{useRef} from 'react'
import {storage,ref,uploadBytesResumable,getDownloadURL,deleteObject} from '../firebase'

export default function FileButton({iconName, setDisable, setUrl, setFile, fileInfo, disable, setImageName, setImgRef}) {
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
        const imgName = `${file.name}&${Date.now()}`
        const storageRef = ref(storage, `images/${imgName}`)
        uploadBytesResumable(storageRef, file).then(async snapshot => {
            const downloadURL = await getDownloadURL(storageRef)
            if(setImgRef){
                // console.log('hi')
                setImgRef(imgName)
            }
            setFile(file)
            setDisable(false)
            setUrl(downloadURL)
            setImageName(imgName)
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
