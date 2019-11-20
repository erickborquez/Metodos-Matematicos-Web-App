import React, { useState } from 'react';
import Popup from '../Popup';

import AddElement from './AddElement';

import '../../Styles/CreatePost/CreatePost.css'


const CreatePost = () => {
    const TextArea = () => <textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area" />
    const [content, setContent] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = e => {
        setContent(e.target.value);
    }


    return (
        <Popup trigger={TextArea()} isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} >
            <div className="create-post_popup-container">
                <AddElement closePopup={() => setIsOpen(false)} />
            </div>
        </Popup>
    )
}

export default CreatePost;