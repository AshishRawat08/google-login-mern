import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", {
        withCredentials: true,
        // console.log(response)
      });
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welocome to Your Dashboard </h1>
      </div>
    </>
  );
};

export default Dashboard;
