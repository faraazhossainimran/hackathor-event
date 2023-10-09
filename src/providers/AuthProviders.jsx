import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    // signup with email, password
    const signUp = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email,password)
    }
    // signin with email and password 
    const signIn = (email,password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }
    // signin with google
    const googleSignIn =() =>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }
    // logout user 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    // profile info update and add
    // const ProfileInfo = () => {
    //     updateProfile(auth.currentUser, {
    //         displayName: "Jane Q. User"
    //     })
    // }
    // observe user activity
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
    
        return () => {
            setLoading(false);
            return unsubscribe();
        }
    }, [])
    // profile update
    const updateUser = ( displayName, photoURL) => {
       return updateProfile(auth.currentUser, {displayName, photoURL})
        
      };
   const authInfo = {
    user,
    loading,
    signUp,
    updateUser,
    signIn,
    logOut,
    googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders