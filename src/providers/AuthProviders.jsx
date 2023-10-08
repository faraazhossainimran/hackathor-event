import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    // signup with email, password
    const signUp = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email,password)
    }
        
    // google sign in
    const googleSignIn =() =>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }
    // logout user 
    const logOut = () =>{
        return signOut(auth)
    }
    // observe user activity
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            setLoading(false);
        })
    
        return () => {
            return unsubscribe();
        }
    }, [])

   const authInfo = {
    user,
    signUp,
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