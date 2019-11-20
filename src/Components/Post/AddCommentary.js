import React, { useState } from 'react'

import '../../Styles/Post/AddCommentary.css'


const AddCommentary = ({ user, onAddCommentary }) => {
    const [text, setText] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onAddCommentary(text);
            e.preventDefault();
            setText('');
        }
    }

    return (
        <div className="add-commentary">
            <img className="add-commentary_photo" alt={user.displayName} src={user.photoURL} />
            <textarea className="add-commentary_textarea" value={text} onKeyPress={e => handleKeyPress(e)} onChange={e => setText(e.target.value)} />
        </div>
    )
}

export default AddCommentary;
