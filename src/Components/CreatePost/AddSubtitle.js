import React, { useState, useEffect } from 'react'

import '../../Styles/CreatePost/AddSubtitle.css'



const AddSubtitle = ({ onSave, configuration }) => {
    const [text, setText] = useState('Escribe tu titulo');

    useEffect(() => () => {
        onSave({
            type: 'description',
            value: text
        });
    }, [text, onSave])

    return (
        <div className="add-subtitle" >
            <textarea className="add-subtitle_text-area" value={text} onChange={e => setText(e.target.value)} maxLength={configuration.MAXIMUN_CHARACTERS} />
        </div>
    )

}

export default AddSubtitle;