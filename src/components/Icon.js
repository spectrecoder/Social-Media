import React from 'react'

export default function Icon({iconName, auth, signOut}) {
    function logOut(){
        if(!auth && !signOut){
            return
        }else{
            signOut(auth).then(() => {
                console.log("Sign-out successful")
              }).catch((error) => {
                console.log(error)
              });          
        }
    }

    return (
        <div onClick={logOut} className="icon w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group">
            <i className={`${iconName} text-2xl text-gray-400 group-hover:text-gray-100`}></i>
        </div>
    )
}
