import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const {signUp} = useContext(AuthContext)
    const handleCreateAcount = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signUp(email,password)
        .then(result=> {
            console.log(result.user);
        })
        .catch(error=> {
            console.log(error);
        })
    }
  return (
    <div>
      <div className="hero">
        <div className="py-8">
          <h1 className="text-5xl text-center my-8 font-bold">
            Register Account
          </h1>
          <div className="card w-[400px] shadow-2xl">
            <form onSubmit={handleCreateAcount} className="card-body">
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
                    Already have an account? {" "}
                    <Link
                      to={"/login"}
                      className="text-secondary font-semibold"
                    >
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="form-control mt-2">
                <button className="btn">
                  <img
                    className="w-[37px]"
                    src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                  />
                  Create account with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
