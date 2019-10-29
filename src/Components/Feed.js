import React from 'react'

import Popup from './Popup';

import '../Styles/Feed.css'
import '../Styles/Buttons.css'
import '../Styles/Create.css'

const Feed = () => {
    return (
        <main className="feed">
            <h2>Aqui va a ir el contenido principal</h2>
            <Popup trigger={(
                <div className="login_button button button_fill"><span>Popup!!</span></div>
            )}>
                <div className="create_form">
                    <div><span>jeje</span></div>
                </div>
            </Popup>
        </main>
    )
}

export default Feed;