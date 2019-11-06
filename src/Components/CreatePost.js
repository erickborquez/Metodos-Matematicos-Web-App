import React, { useState } from 'react';
import Popup from './Popup';

import '../Styles/CreatePost.css'

const CreatePost = () => {
    const [content, setContent] = useState("");
    const handleChange = e => {
        setContent(e.target.value);
    }

    const TextArea = <textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area" />
    return (
        <Popup trigger={TextArea} />
    )
}

export default CreatePost;