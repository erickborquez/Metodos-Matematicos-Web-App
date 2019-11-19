import React from 'react'
import '../../Styles/Post/PostImage.css'

const PostImage = ({ src, alt }) => {
    return (
        <div className="post_post-image">
            <img className="post_post-image_image" src={src} alt={alt}></img>
        </div>
    )
}

export default PostImage;