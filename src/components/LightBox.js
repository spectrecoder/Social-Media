import React,{useEffect, useRef, useState} from 'react'
import UpdatePost from './UpdatePost'
import {useSelector, useDispatch} from 'react-redux'
import {lb} from '../slices/profileSlice'
import {openBox} from '../slices/profileSlice'
import {deleteObject, storage, ref} from '../firebase'

export default function LightBox() {
    const lightBox = useSelector(lb)
    const lbRef = useRef()
    const [imgRef, setImgRef] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        const lbNode = lbRef.current
        lbNode.addEventListener('click', async e=>{
            if(e.target.classList.contains('lightBox')){
                dispatch(openBox({class: 'hidden', postData:null}))
                if(imgRef){
                    await deleteObject(ref(storage, `images/${imgRef}`))
                    setImgRef('')
                }
            }
        })

        return ()=>{
            lbNode.removeEventListener('click', async e=>{
                if(e.target.classList.contains('lightBox')){
                    dispatch(openBox({class: 'hidden', postData:null}))
                    if(imgRef){
                        await deleteObject(ref(storage, `images/${imgRef}`))
                        setImgRef('')
                    }
                }
            })
        }
    },[imgRef])

    // useEffect(()=>{
    //     async function removeNewImage(){
    //     }
    //     removeNewImage()
    // },[imgRef])

    return (
        <section ref={lbRef} className={`lightBox fixed top-0 left-0 w-full h-screen z-50 ${lightBox.class} justify-center items-center`}>
            <UpdatePost msg={lightBox.postInfo?.message} id={lightBox.postInfo?.docId} url={lightBox.postInfo?.imgUrl} imgName={lightBox.postInfo?.imgName} setImgRef={setImgRef} userImgName={lightBox.postInfo?.userImgName}/>
        </section>
    )
}
