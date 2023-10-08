import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const auth = getAuth(app)
    // signup with email, password
    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth, email,password)
    }
        
        
        
        
        
        
        
        
        
        
    
//    const obj = {img: 'ims', age: 24}
   const authInfo = {
    signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders