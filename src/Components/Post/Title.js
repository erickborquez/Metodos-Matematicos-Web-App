import React from 'react';

import '../../Styles/Post/Title.css'

const Title = ({ text }) => {
    return (
        <div className="post_title_container">
            <h4 className="post_title_text">{text}</h4>
        </div>
    )
}

export default Title;