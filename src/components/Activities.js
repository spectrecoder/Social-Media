import React from 'react'
import Activity from './Activity'
import LeftHeader from './LeftHeader'

export default function Activities() {
    return (
        <div className="activities overflow-hidden rounded-lg h-84 bg-white mb-8">
            <LeftHeader text="recent activity"/>
            <div className="activities__content p-6  flex flex-col justify-between h-73">
                <Activity time="8 years ago"/>
                <Activity time="15 hours ago"/>
                <Activity time="20 days ago"/>
            </div>
        </div>
    )
}
