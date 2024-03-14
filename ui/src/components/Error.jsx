import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Its an Error page</h1>
        <button style={{ cursor: "pointer" }} onClick={()=>navigate("/")}>
          Back to home page
        </button>
      </div>
    </>
  );
};

export default Error;
