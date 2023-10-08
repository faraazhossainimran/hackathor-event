import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { user,googleSignIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result=> {
        console.log(result.user);
        console.log(result._tokenResponse.isNewUser);
    })
    .catch(error=> {
        console.log(error);
    })
  }
  return (
    <div>
      <div className="hero">
        <div className="py-8">
          <h1 className="text-5xl text-center my-8 font-bold">Login now!</h1>
          <p>{user&& <span>user logged in</span>}</p>
          <div className="card w-[400px] shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <button className="btn btn-primary">Login</button>
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
    </div>
  );
};

export default Login;
