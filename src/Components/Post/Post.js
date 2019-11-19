import React, { useContext } from 'react';

import { UserContext } from '../../Providers/UserProvider';


import Description from './Description'
import Title from './Title';
import Todo from './Todo'

import '../../Styles/Post/Post.css'
import Ubication from './Ubication';
import PostImage from './PostImage';
import Commentary from './Commentary';
import AddCommentary from './AddCommentary';
import Subtitle from './Subtitle';


const onAddCommentary = (event) => {
    console.log(event);
}


const Post = (props) => {
    const { auth, date, team, status, content, comments } = props;
    const user = useContext(UserContext);

    return (
        <div className="post">
            <img src={auth.photoURL} alt={`${auth.displayName}`} className="post_photo" />
            <div className="post_data">
                <h4 className="post_data_author">{auth.displayName} <span className="post_data_author--small">en</span> {team.name}</h4>
                <span className="post_data_date">{date}</span>
                <span className={`post_data_status`}>Status: <span className={`post_data_status_status post_data_status_${status.toLowerCase()}`}>{status}</span></span>
            </div>
            <div className="post_content">
                {content.map((element, i) => {
                    const key = `${element.tye}-${i}`
                    switch (element.type) {
                        case "description":
                            return (<Description {...element} key={key} />);
                        case "title":
                            return (<Title {...element} key={key} />);
                        case "subtitle":
                            return (<Subtitle {...element} key={key} />);
                        case "todo":
                            return (<Todo {...element} key={key} />);
                        case "ubication":
                            return (<Ubication {...element} key={key} />)
                        case "image":
                            return (<PostImage {...element} key={key} />)
                        default:
                            console.error("Element has no type, Post.js");
                            break;
                    }
                    return null;
                })}
                {comments[0] ? (
                    <div className="post_comments">
                        {comments.map((commentary, i) => {
                            const key = `commentary-${i}`
                            return (<Commentary {...commentary} key={key} />)
                        })}
                    </div>
                ) : null}
                {!user.isLoading && user.logged ? (<AddCommentary user={user} onAddCommentary={onAddCommentary} />) : null}

            </div>
        </div>
    )
}

export default Post;