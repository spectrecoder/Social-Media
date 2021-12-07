import React from 'react'
import LeftHeader from './LeftHeader'

export default function Recent() {
    return (
        <div className="recent h-86 bg-white rounded-lg overflow-hidden sticky top-7 left-0">
            <LeftHeader text="recent links" extra/>
            <div className="recent__content p-8 flex flex-col justify-between h-81">
                <div className="recent-1 flex gap-4">
                    <img src="images/recent-1.png" alt="recent" className="w-36 h-24 object-cover border-0"/>
                    <div className="desc">
                        <p className="font-normal text-xl text-gray-600">Lorem ipsum dolor sit amet conse ctetur elit.</p>
                        <p className="font-normal text-md text-gray-400">10 days ago</p>
                    </div>
                </div>

                <div className="recent-2 flex gap-4">
                    <img src="images/recent-2.png" alt="recent" className="w-36 h-24 object-cover border-0"/>
                    <div className="desc">
                        <p className="font-normal text-xl text-gray-600">Lorem ipsum dolor sit amet conse ctetur elit elit.</p>
                        <p className="font-normal text-md text-gray-400">10 days ago</p>
                    </div>
                </div>

                <div className="recent-3 flex gap-4">
                    <img src="images/recent-3.png" alt="recent" className="w-36 h-24 object-cover border-0"/>
                    <div className="desc">
                        <p className="font-normal text-xl text-gray-600">Lorem ipsum dolor sit amet conse</p>
                        <p className="font-normal text-md text-gray-400">10 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
