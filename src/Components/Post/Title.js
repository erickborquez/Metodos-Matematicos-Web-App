import React from 'react';

import '../../Styles/Post/Title.css'

const Title = ({ value }) => {
    return (
        <div className="post_title_container">
            <h4 className="post_title_text">{value}</h4>
        </div>
    )
}

export default Title;