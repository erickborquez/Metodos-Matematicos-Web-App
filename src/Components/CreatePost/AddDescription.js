import React, { useState, useEffect } from 'react'

import '../../Styles/CreatePost/AddDescription.css'

const AddDescription = ({ onSave }) => {
    const [text, setText] = useState('');

    useEffect(() => () => {
        onSave({
            type: 'description',
            value: text
        });
    }, [text, onSave])

    return (
        <div className="add-description" >
            <textarea className="add-description_textarea" value={text} onChange={e => { setText(e.target.value) }} />
        </div>
    )

}

export default AddDescription;