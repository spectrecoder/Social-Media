import React,{useRef} from 'react'
import {storage,ref,uploadBytesResumable,getDownloadURL} from '../firebase'

export default function FileButton({iconName, bg, setDisable, setUrl, setFile}) {
    const fileRef = useRef()

    function handleClick(){
        fileRef.current.click()
    }

    function selectFile(e){
        const file = e.target.files[0]
        setDisable(true)
        const storageRef = ref(storage, `images/${file.name}`)
        uploadBytesResumable(storageRef, file).then(async snapshot => {
            const downloadURL = await getDownloadURL(storageRef)
            setFile(file)
            setDisable(false)
            setUrl(downloadURL)
        })
    }

    return (
        <>
            <input ref={fileRef} type="file" className="hidden" onChange={selectFile}/>
            <i className={`${iconName} ${bg ?"text-red-500":"text-gray-500"} text-2xl cursor-pointer`} onClick={handleClick}></i>
        </>
    )
}
