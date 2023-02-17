import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'



export const AuthCOntext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = ((email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, photoURL)
    })
    const signIn = ((email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    })
    const logOut = ((uid) => {
        setLoading(true);
        return signOut(auth, uid)
    })
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('auth state chaged', currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
    }
    return (
        <div>
            <AuthCOntext.Provider value={authInfo}>
                {children}
            </AuthCOntext.Provider>

        </div>
    );
};

export default AuthProvider