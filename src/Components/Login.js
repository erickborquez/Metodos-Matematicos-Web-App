import React, { useContext } from 'react';
import { signInWithGoogle, signOut } from '../firebase'

import { UserContext } from '../Providers/UserProvider';

import UserOptions from './UserOptions';

import '../Styles/Login.css'
import '../Styles/Buttons.css'

const Login = ({ className }) => {
    const user = useContext(UserContext);
    return user.displayName ? (
        <div className={className + " login_container"}>
            <UserOptions className="login_profile" signOut={signOut} />
        </div>
    ) : (
            <div className={className + " login_container"}>
                <div onClick={() => signInWithGoogle()} className="login_button button button_fill"><span>Sign up</span></div>
                <div onClick={() => signInWithGoogle()} className="login_button button button_outline"><span>Log in</span></div>
            </div>
        );
}

export default Login;