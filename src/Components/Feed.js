import React from 'react'

import '../Styles/Feed.css'
import Side from './Side'
import UserOptions from './UserOptions'
import Workspace from './Workspace'


const Feed = () => {
    return (
        <main className="feed">
            <Side />
            <Workspace />
            <UserOptions />
        </main>
    )
}

export default Feed;