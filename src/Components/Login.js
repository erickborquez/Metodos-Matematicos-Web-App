import React, { useContext } from 'react';
import '../Styles/Buttons.css'
import '../Styles/Login.css'
import { signInWithGoogle, signOut } from '../firebase'

import { UserContext } from '../Providers/UserProvider';

const Login = ({ className }) => {
    const user = useContext(UserContext);
    console.log(user);
    return user ? (
        <div className={className + " login_container"}>
            <div onClick={() => signOut()} className="login_button button button_fill"><span>Sign Out</span></div>
        </div>
    ) : (
            <div className={className + " login_container"}>
                <div onClick={() => signInWithGoogle()} className="login_button button button_fill"><span>Sign up</span></div>
                <div onClick={() => signInWithGoogle()} className="login_button button button_outline"><span>Log in</span></div>
            </div>
        );
}

export default Login;