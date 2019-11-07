import React, { useState } from 'react';
import Popup from './Popup';

import '../Styles/CreatePost.css'


const CreateContent = ({ content, handleChange }) => {

    return (
        <div className="create-post_popup-container">
            <span className='create-post_popup-title'>Añade una descripcion</span>
            <textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area create-post_popup_text-area" />
        </div>);
}


const CreatePost = () => {
    const TextArea = () => <textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area" />
    const [content, setContent] = useState("");
    const handleChange = e => {
        setContent(e.target.value);
    }


    return (
        <Popup trigger={TextArea()} ><CreateContent content={content} handleChange={handleChange} /></Popup>
    )
}

export default CreatePost;