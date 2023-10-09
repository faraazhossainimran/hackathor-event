import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const { user, signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const handleSignIn = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    signIn(email,password)
    .then(result=> {
        toast.success('Login success')
        navigate(location?.state ? location.state : "/")
        return 
    })
    .catch(error=>{
        return toast.error('Email or Password is wrong')
    })
  }
  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result=> {
        toast.success('Login success')
    })
    .catch(error=> {
        toast.error('Something went wrong');
    })
  }
  return (
    <div>
      <div className="hero">
        <div className="md:py-8">
          <h1 className="text-2xl md:text-5xl text-center my-8 font-bold">Login now!</h1>
          <p>{user&& <span>user logged in</span>}</p>
          <div className="card md:w-[400px] shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="text-lg pt-2">
                    Don't have an account?{" "}
                    <Link
                      to={"/register"}
                      className="text-secondary font-semibold"
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="onSubmit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider mx-8">OR</div>
            <div className="form-control mx-8 mb-8">
              <button onClick={handleGoogleLogin} className="btn">
                <img
                  className="w-[37px]"
                  src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
