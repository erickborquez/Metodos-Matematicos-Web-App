import React, { createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {


    const [user, setUser] = useState({})

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const erick = await createUserProfileDocument(userAuth);
            setUser(erick);

        })
        return unsubscribeFromAuth;
    }, []);
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider