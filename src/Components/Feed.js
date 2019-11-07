import React from 'react'

import '../Styles/Feed.css'
import Side from './Side'
import Workspace from './Workspace'
import Login from './Login'


const Feed = () => {
    return (
        <main className="feed">
            <Side />
            <Workspace />
            <Login />
        </main>
    )
}

export default Feed;