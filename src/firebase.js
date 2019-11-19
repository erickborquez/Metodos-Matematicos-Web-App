import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAZ9pVpUy4RIqoAL_SEiiZOb8Ox2MwcfKo",
    authDomain: "tests-analisis-numericos.firebaseapp.com",
    databaseURL: "https://tests-analisis-numericos.firebaseio.com",
    projectId: "tests-analisis-numericos",
    storageBucket: "tests-analisis-numericos.appspot.com",
    messagingSenderId: "460905807473",
    appId: "1:460905807473:web:808a15562e02dd5a2865d0",
    measurementId: "G-BMYJNMJPXP"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();

export const publishPost = async (user, post) => {
    const data = {
        auth: user,
        date: "12 de marzo 13: 23",
        content: post.content,
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        comments: [],
        key: Date.now()
    }
    console.log(await firestore.collection('posts').add(data));

}

export const createUserProfileDocument = async (user, aditionalData) => {
    if (!user) return;

    //Get a reference to the place in the database where a user profile might be
    const userRef = firestore.doc(`users/${user.uid}`);

    // Go and fetch the documentfrom that location 
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                photoURL,
                email,
                ...aditionalData
            })

        } catch (err) {
            console.error('Error creating user', err.mesage);
        }
    }
    return getUserDocument(user.uid)
}


export const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return { uid, ...userDocument.data() };
    } catch (err) {
        console.error('Error feching user', err.mesage);
    }
}