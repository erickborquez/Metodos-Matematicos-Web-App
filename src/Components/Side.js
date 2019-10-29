import React, { useContext } from 'react';
import '../Styles/SideBar.css'

import { UserContext } from '../Providers/UserProvider';

const SideBar = () => {
    const user = useContext(UserContext);
    return (
        <nav className="side">
            <h3 className="side_user_name">{user.displayName || "Not Logged In"}</h3>
        </nav>
    )
};

export default SideBar;