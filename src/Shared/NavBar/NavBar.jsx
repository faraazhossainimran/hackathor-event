import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSignOut = () => {
    logOut()
    .then(() => {
        navigate('/')
    })
    .catch(error => {
        console.log(error);
    })
  }
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/prizes"}>Prizes</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/hackathons"}>Hackathons</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="normal-case text-2xl font-bold" to={"/"}>
              Hackathon Event
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-xl" to={"/prizes"}>
                Prizes
              </Link>
            </li>
            <li>
              <Link className="text-xl" to={"/about"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-xl" to={"/hackathons"}>
                Hackathons
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
            <div className="navbar bg-base-100">
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52"
                  >
                    <li>
                      <button onClick={handleSignOut}>
                        <Link className="text-white text-lg font-semibold" to={"/register"}>
                          Logout
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
          )}

          {/* <button className="">Login</button> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
