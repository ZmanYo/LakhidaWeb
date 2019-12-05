import React from "react";
import Navbar from "../../components/navbar/Navigation";

import Loginform from "../../components/loginform/Login";
import "./loginpage-styles.scss";
function Loginpage() {
  return (
    <div className="loginpage">
      <Navbar />
      <Loginform />
    </div>
  );
}

export default Loginpage;
