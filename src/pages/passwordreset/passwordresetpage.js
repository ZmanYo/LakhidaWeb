import React from "react";
import Navbar from "../../components/navbar/Navigation";

import PasswordresetForm from "../../components/passwordreset/passwordresetform";
import "./passwordresetpage-styles.scss";


function Passwordresetpage() {
  return (
    <div className="Passwordresetpage">
      <Navbar />
      <PasswordresetForm />
    </div>
  );
}

export default Passwordresetpage;
