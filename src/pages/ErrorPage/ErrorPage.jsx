import { Link } from "react-router-dom"
import Footer from "../../Shared/Footer/Footer"
import NavBar from "../../Shared/NavBar/NavBar"


const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mx-auto">
                <div className="min-h-screen">
                <h1 className="text-center text-4xl font-semibold mt-56">Error 404</h1>
                {/* <div><Link className="text-4xl font-semibold mt-56" to={"/"}><span className="text-center ">Go back to Home</span></Link></div> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ErrorPage