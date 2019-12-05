import React from "react";
import Navbar from "../../components/navbar/Navigation";

import ActivationForm from "../../components/activationform/activationform";
import "./activationpage-style.scss";

function Activationpage() {
  return (
    <div className="Activationpage">
      <Navbar />
      <ActivationForm />
    </div>
  );
}

export default Activationpage;
