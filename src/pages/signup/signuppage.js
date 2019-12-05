import React from "react";
import Navbar from "../../components/navbar/Navigation";

import SignUpform from "../../components/signupform/Signup";
import "./signuppage-styles.scss";
function SignUpPage() {
  return (
    <div className="signuppage">
      <Navbar/>
      <SignUpform />
    </div>
  );
}

export default SignUpPage;
