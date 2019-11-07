import React from 'react';
import '../Styles/Workspace.css'
import CreatePost from './CreatePost';

import Post from './Post/Post';

import photoURL from '../assets/perfil.png'

const POSTS = [
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "Title",
                text: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "Todo",
                data: [
                    {
                        text: "Ir y recoger basura",
                        completed: false
                    },
                    {
                        text: "Ir y recoger basura",
                        completed: true
                    }
                ]

            },
            {
                type: "Ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        key: 1
    },
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "Title",
                text: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "Todo",
                data: [
                    {
                        text: "Ir y recoger basura",
                        completed: false
                    },
                    {
                        text: "Ir y recoger basura",
                        completed: true
                    }
                ]

            },
            {
                type: "Ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        key: 1
    },
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "Title",
                text: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "Todo",
                data: [
                    {
                        text: "Ir y recoger basura",
                        completed: false
                    },
                    {
                        text: "Ir y recoger basura",
                        completed: true
                    }
                ]

            },
            {
                type: "Ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        key: 1
    }
]

const Workspace = () => {
    console.log(photoURL);
    return (
        <div className="work-space">
            <CreatePost />
            {POSTS.map(post => {
                return <Post {...post} key={post.key} ></Post>
            })}
        </div>
    );
}

export default Workspace;