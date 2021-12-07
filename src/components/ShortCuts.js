import React from 'react'
import LeftHeader from './LeftHeader'
import ShortIcon from './ShortIcon'

export default function ShortCuts() {
    return (
        <div className="shortCuts h-103 bg-white overflow-hidden rounded-lg sticky top-7 left-0">
            <LeftHeader text="shortcuts"/>
            <div className="shortcuts__icons p-6 flex flex-col h-91 justify-between">
                <ShortIcon name="news feed" icon="fas fa-suitcase-rolling"/>
                <ShortIcon name="inbox" icon="fas fa-mouse"/>
                <ShortIcon name="my pages" icon="far fa-copy"/>
                <ShortIcon name="friends" icon="far fa-user"/>
                <ShortIcon name="images" icon="far fa-image"/>
                <ShortIcon name="videos" icon="fas fa-film"/>
                <ShortIcon name="messages" icon="far fa-comment-dots"/>
                <ShortIcon name="notifications" icon="far fa-bell"/>
                <ShortIcon name="people nearby" icon="fas fa-chart-line"/>
                <ShortIcon name="insights" icon="far fa-chart-bar"/>
                <ShortIcon name="logout" icon="fas fa-power-off"/>
            </div>
        </div>
    )
}
