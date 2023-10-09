import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const { user, signUp, googleSignIn, updateUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const handleCreateAcount = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if(password.length < 6){
        return toast.error('Password should be at least 6 characters')
    }
    // if(!capitalLetter.test(password)){
        
    //     return toast.error('Password have at least a capital letter')
    // }
    console.log(name,photo);
    signUp(email, password)
    .then((result) => {
      console.log("User object:", result.user);
      toast.success("Success.");
        updateUser(name, photo)
        .then(()=> {
            navigate(location?.state ? location.state : "/")
        })
    })
    .catch((error) => {
      console.log("Error during sign up or profile update:", error);
    });
  };
  const handleSignUpWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        console.log(result._tokenResponse.isNewUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero">
        <div className="md:py-8">
          <h1 className=" text-2xl md:text-5xl text-center my-8 font-bold">
            Register Account
          </h1>
          <div className="card md:w-[400px] shadow-2xl">
            <form onSubmit={handleCreateAcount} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="Profile Photo"
                  className="input input-bordered"
                //   required
                />
              </div>
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
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-secondary font-semibold"
                    >
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider mx-8">OR</div>
            <div className="form-control mx-8 mb-8">
              <button onClick={handleSignUpWithGoogle} className="btn">
                <img
                  className="w-[37px]"
                  src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                />
                Create account with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      {user && <p>logged in</p>}
      <Toaster />
    </div>
  );
};

export default Register;
