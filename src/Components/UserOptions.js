import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';

import '../Styles/User.css'
import Dropdown from './Dropdown'

const UserOptions = (props) => {
    const user = useContext(UserContext);
    return (
        <div className="user">
            <div className="user_contact">
                <span className="user_contact_name">{user.displayName}</span>
                <span className="user_contact_mail">{user.email}</span>
            </div>
            <Dropdown
                triggerer={<div className="user_container-photo"><img src={user.photoURL} alt="user_photo" className="user_photo"></img></div>}
                containerClassName='user_menu'>
                <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
                <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
                <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
            </Dropdown>
        </div>
    )
}

export default UserOptions;