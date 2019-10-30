import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';

import '../Styles/UserOptions.css'
import Dropdown from './Dropdown'

const UserOptions = (props) => {
    const user = useContext(UserContext);
    return (
        <Dropdown
            className={(props.className || '') + ' user'}
            triggerer={<div className="user_container-photo"><img src={user.photoURL} alt="user_photo" className="user_photo"></img></div>}
            containerClassName='user_menu'>
            <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
            <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
            <div className="user_menu_option" onClick={props.signOut}><span>Log Out</span></div>
        </Dropdown>
    )
}

export default UserOptions;