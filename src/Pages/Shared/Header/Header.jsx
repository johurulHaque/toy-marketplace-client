import React, { useContext } from "react";
import logo from "../../../assets/toy.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, allSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = () => {
    allSignOut()
      .then(() => {
        navigate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link  to="/usertoy">
                    My Toys
                  </Link>
                </li>
                <li>
                  <Link  to="/addtoy">
                    Add Toy
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
            <Link  to="/blog"> Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-24" />
          </Link>
          <h3 className="text-3xl">
            {" "}
            <span className="text-[#09ccd0]">Toys</span>
            <span className="text-[#ff6f69]">Home</span>
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="link-a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-a" to="/alltoys">
              All Toys
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link className="link-a" to="/usertoy">
                  My Toys
                </Link>
              </li>
              <li>
                <Link className="link-a" to="/addtoy">
                  Add Toy
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
          <li>
            <Link className="link-a" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL && (
          <Link>
            <img
              src={user?.photoURL}
              title={user?.displayName ? user?.displayName : ""}
              className="w-8 h-8 rounded-lg"
            />
          </Link>
        )}
        {user ? (
          <button onClick={handleLogout}>
            <span className="flex link-a items-center ">
              Logout <FaSignOutAlt />
            </span>
          </button>
        ) : (
          <Link to="/login">
            <button>
              <span className="flex link-a items-center ">
                <FaSignInAlt /> Login
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
