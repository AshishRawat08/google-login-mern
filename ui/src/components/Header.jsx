import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [userData, setUserData] = useState({});
  // console.log("userData", userData);

  
  const getUser = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", {
        withCredentials: true,
      });
      setUserData(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logout
  const userLogOut = () => {
    window.open("http://localhost:6005/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">Ashish Rawat</div>
        <div className="right">
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </NavLink>
            </li>
            {Object?.keys(userData).length > 0 ? (
              <>
                <li style={{ color: "black", fontWeight: "bolder" }}>
                  {userData?.displayName}
                </li>

                <li>
                  <NavLink
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li onClick={userLogOut}>Log out</li>
                <li>
                  <img
                    src={userData?.image}
                    alt=""
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
