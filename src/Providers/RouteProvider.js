import React, { useState, createContext } from 'react';


export const RouteContext = createContext('/');

const RouterProvider = ({ children }) => {

    const [baseURL, setURL] = useState('/')
    let repoURL = '/Metodos-Matematicos-Web-App/'
    if (window.location.href.match(repoURL) && baseURL !== repoURL) {
        setURL(repoURL);
    }
    return (
        <RouteContext.Provider value={baseURL}>
            {children}
        </RouteContext.Provider>
    )
}
export default RouterProvider
