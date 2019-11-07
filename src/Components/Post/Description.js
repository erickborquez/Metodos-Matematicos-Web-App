import React from 'react'

import '../../Styles/Post/Description.css'

const Description = ({ text }) => {
    return (
        <div className="description">
            {text}
        </div>
    )
}

export default Description;