import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const defaultImage =
    "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80";
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="w-[80%]">
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
                <NavLink to={"/prizes"}>Prizes</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/hackathons"}> Hackathons</NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <NavLink
              className="flex"
              to={"/"}
            >
              <img className="w-[50px] mr-2" src={"https://i.ibb.co/MsjL0Qp/hackathon.png"}/>
              <h1 className="text-md md:text-2xl font-bold mt-2 ">Hackathon Event</h1>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="text-xl hover:bg-white mx-2" to={"/prizes"}>
                Prizes
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:bg-white mx-2" to={"/about"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:bg-white mx-2" to={"/hackathons"}>
                Hackathons
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <div className="">
                <div className="flex flex-cols">
                  {user && user.displayName ? (
                    <p className="mt-2 hidden sm:block">{user.displayName}</p>
                  ) : (
                    <p className="mt-2 hidden sm:block">UserName</p>
                  )}
                  <div className="dropdown ">
                    <label tabIndex={0} className="avatar ">
                      <div className="w-10 ml-4 rounded-full">
                        <img
                          className=""
                          src={
                             user?.photoURL || defaultImage
                          }
                        />
                      </div>
                    </label>
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
        {user && 
        <li>
        <button className="btn btn-secondary ml-2 b-0" onClick={handleSignOut}>
          <Link className="md:text-lg" to={"/register"}>
            Logout
          </Link>
        </button>
      </li>
        }
      </div>
    </div>
  );
};

export default NavBar;
