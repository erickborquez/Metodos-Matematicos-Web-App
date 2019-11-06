import React from 'react'
import '../Styles/TeamCard.css'

const TeamCard = ({ src, alt, title, subtitle }) => {
    return (
        <div className="side_team-card team-card">
            <img alt={alt} src={src} className="team-card_image" />
            <div className="team-card_text">
                <span className="team-card_title">{title}</span>
                <span className="team-card_subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default TeamCard;
