import React, { useEffect, useState } from 'react';

import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';

import photoURL from '../assets/perfil.png'

import trash from '../assets/background-3.jpg'

import { firestore } from '../firebase';
import { colletIdsAndDocs, parseTimeStamp } from '../utilities';

import '../Styles/Workspace.css'

const POSTS = [];

const Workspace = () => {

    const [posts, setPosts] = useState(POSTS);

    useEffect(() => {

        const postsRef = firestore.collection('posts')
        const unsubscribeToPosts = postsRef.orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => {
                const docObj = colletIdsAndDocs(doc);
                return { ...docObj, date: parseTimeStamp(docObj.timestamp) }
            }
            ));
        });
        return unsubscribeToPosts;
    }, [])

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