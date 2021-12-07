import React,{useRef} from 'react'
import LeftHeader from './LeftHeader'

export default function Video() {
    const buttonRef = useRef()
    const videoRef = useRef()

    function videoClick(){
        if(videoRef.current.classList.contains('playing')){
            buttonRef.current.style.display = 'block'
            videoRef.current.pause()
            videoRef.current.classList.remove('playing')
        }else{
            return
        }
    }

    function handleClick(){
        videoRef.current.play()
        videoRef.current.classList.add('playing')
        buttonRef.current.style.display = 'none'
    }

    return (
        <div className="video overflow-hidden rounded-t-lg h-80 bg-white mb-8">
            <LeftHeader text="hot flame works"/>
            <div className="video__vid h-60 relative flex items-center justify-center">
                <video ref={videoRef} className="absolute top-0 left-0 right-0 bottom-0" onClick={videoClick}><source src="images/vid-1.mp4" type="video/mp4"/></video>
                <div ref={buttonRef} className="video__button cursor-pointer w-16 h-16 rounded-full bg-red-500 text-center leading-loose relative z-10" onClick={handleClick}>
                    <i className="fas fa-play text-white text-lg"></i>
                </div>
            </div>
        </div>
    )
}
