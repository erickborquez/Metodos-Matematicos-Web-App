import React from 'react'

import '../../Styles/Post/Commentary.css'

const Commentary = ({ user, date, content }) => {
    return (
        <div className="commentary">
            <img alt={`${user.displayName}`} src={user.photoURL} className="commentary_photo" />
            <div className="commentary_data">
                <div className="commentary_data_user-container">
                    <span className="commentary_data_user-name">{user.displayName}</span>
                    <span className="commentary_data_date">{date}</span>
                </div>
            </div>
            <div className="commentary_content">{content}</div>
        </div>
    )
}

export default Commentary;