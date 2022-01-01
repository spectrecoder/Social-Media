import React from 'react'

export default function Icon({iconName, auth, signOut, dispatch, setMessage, name}) {
    function logOut(){
        if(!auth && !signOut){
            return
        }else{
            signOut(auth).then(() => {
                dispatch(setMessage({color: 'green', notice: 'Signed-out successfully', icon: 'fas fa-check', show:true}))
              }).catch((error) => {
                dispatch(setMessage({color: 'red', notice: error.message, icon: 'fas fa-check', show:true}))
              });          
        }
    }

    return (
        <div onClick={logOut} className="icon pl-6 sm:pl-0 sm:w-16 h-16 w-full sm:rounded-full bg-gray-800 flex sm:justify-center gap-4 sm:gap-0 items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group">
            <i className={`${iconName} text-2xl text-gray-400 group-hover:text-gray-100`}></i>
            <h3 className="text-gray-200 text-xl font-semibold sm:hidden">{name}</h3>
        </div>
    )
}
