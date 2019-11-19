import React, { useEffect, useState } from 'react';
import '../Styles/Workspace.css'
import CreatePost from './CreatePost/CreatePost';

import Post from './Post/Post';

import photoURL from '../assets/perfil.png'

import trash from '../assets/background-3.jpg'
import { firestore } from '../firebase';
import { colletIdsAndDocs } from '../utilities';


const POSTS = [
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "title",
                value: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "description",
                value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "subtitle",
                value: "Hacer estas cosas"
            },
            {
                type: "todo",
                title: "Hacer estas cosas.",
                value: "Lorem ipsum",
                completed: true

            },
            {
                type: "ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "image",
                src: trash,
                alt: "This is an image"
            },
            {
                type: "description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        comments: [
            {
                user: {
                    displayName: "Erick Borquez",
                    photoURL: photoURL
                },
                date: "11/17/2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            {
                user: {
                    displayName: "Erick Borquez",
                    photoURL: photoURL
                },
                date: "11/17/2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
        ],
        key: 1
    }
]

const Workspace = () => {

    const [posts, setPosts] = useState(POSTS);

    useEffect(() => {
        const fetchData = async () => {
            const result = await firestore.collection('posts').get()
            const postsFetched = result.docs.map(colletIdsAndDocs);
            const newPosts = [...postsFetched, ...posts];
            console.log('object', newPosts);

            setPosts(newPosts);
        }
        fetchData();
    }, [posts])

    return (
        <div className="work-space">
            <CreatePost />
            {posts.map(post => {
                return <Post {...post} key={post.key} ></Post>
            })}
        </div>
    );
}

export default Workspace;