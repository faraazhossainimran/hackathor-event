import { Children, useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="container mx-auto h-screen flex items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
}

export default PrivateRoute