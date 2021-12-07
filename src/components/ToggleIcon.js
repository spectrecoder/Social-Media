import React from 'react'

export default function ToggleIcon({iconName, amount, setOpenMsg}) {

    function handleClick() {
        if(setOpenMsg) {
            setOpenMsg(state=>!state)
        }else{
            return
        }
    }

    return (
        <div className="toggleIcon relative cursor-pointer mr-12" onClick={handleClick}>
            <i className={`${iconName} text-2xl text-gray-400`}></i>
            <span className="text-lg text-gray-400 absolute -top-4 left-6">{amount}</span>
        </div>
    )
}
