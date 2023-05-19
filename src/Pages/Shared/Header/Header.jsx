import React, { useContext } from "react";
import logo from "../../../assets/toy.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

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
            <li>
            <Link to="/usertoy">My Toy</Link>    
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-24" />
          </Link>
          <h3>Toy Home</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="/">Home</Link>    
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="/addtoy">Add Toy</Link>            
          </li>
          <li>
          <Link to="/usertoy">My Toy</Link>        
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL && (
          <Link>
            <img
              src={user?.photoURL}
              //   style={{ width: "40px" }}
              title={user?.displayName ? user?.displayName : ""}
            />
          </Link>
        )}
        {/* <span>{user.displayName} */}
        {user ? (
          <button onClick={handleLogout}>
            Logout <FaSignOutAlt />
          </button>
        ) : (
            <Link to="/register">
              <button className="btn">
                <FaSignInAlt /> Register
              </button>
            </Link>
        )}


      </div>
    </div>
  );
};

export default Header;
