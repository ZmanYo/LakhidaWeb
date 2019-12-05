import "./activationform-style.scss";
import React from "react";
import { withFormik, Form as FForm } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import {connect} from 'react-redux';
import {activation} from '../../store/Actions/userActions';



function ActivationForm({ values,  isSubmitting }) {
  return (
    <div className="activationformcontainer">
      <div className="row">
        <div className="col-lg-12">
          <FForm
            className="bg-light scale-in-center"
            style={{ borderRadius: "5%" }}
          >
            <IconContext.Provider
              value={{ color: "#0a807c", className: "global-class-name" , size:'4rem'}}
            >
              <div className="activationusericon">
                <FaUserCircle />
              </div>
            </IconContext.Provider>
            <div className="activactiongroup">


              <h6> Account activation on Lakhida Tech site  </h6>
              <p>  You're receiving this email because you need to finish activation process </p>
              <p> Please click the button below to activate and login to the site. </p>
            </div>

            <button className="btn btn-info btn-block" disabled={isSubmitting}>
              Confirm & login
            </button>
          </FForm>
        </div>
      </div>
    </div>
  );
}

const FormikActivationForm = withFormik({
  mapPropsToValues({ uid, token }) {
    return {
      uid: uid || "",
      token: token || ""

    };
  },


  handleSubmit(values, {props}) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    props.activation(values)
  }
})(ActivationForm);

export default connect (null, {activation})(FormikActivationForm);

