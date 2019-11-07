import React from 'react';
import Description from './Description'
import Title from './Title';
import Todo from './Todo'


import '../../Styles/Post/Post.css'
import Ubication from './Ubication';



const Post = (props) => {
    const { auth, date, team, status, content } = props;
    console.log(auth);
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
                        case "Description":
                            return (<Description {...element} key={key} />);
                        case "Title":
                            return (<Title {...element} key={key} />);
                        case "Todo":
                            return (<Todo {...element} key={key} />);
                        case "Ubication":
                            return (<Ubication {...element} key={key} />)
                        default:
                            console.error("Element has no type, Post.js");
                            break;
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default Post;