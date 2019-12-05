import "./passwordresetform-styles.scss";
import React from "react";
import { withFormik, Form as FForm, Field } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import {connect} from 'react-redux';
import {passwordreset} from '../../store/Actions/userActions';


function PasswordresetForm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="passwordrestformcontainer">
      <div className="row">
        <div className="col-lg-12">
          <FForm
            className="bg-light scale-in-center"
            style={{ borderRadius: "5%" }}
          >
            <IconContext.Provider
              value={{ color: "#0a807c", className: "global-class-name" , size:'4rem'}}
            >
              <div className="passwordresetusericon">
                <FaUserCircle />
              </div>
            </IconContext.Provider>
            <div className="form-group">
              {touched.email && errors.email && <p>{errors.email}</p>}
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </div>


            <button className="btn btn-info btn-block" disabled={isSubmitting}>
              Submit
            </button>
          </FForm>
        </div>
      </div>
    </div>
  );
}

const FormikPasswordresetForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required")

  }),

  handleSubmit(values, {props}) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    props.passwordreset(values)
  }
})(PasswordresetForm);

export default connect (null, {passwordreset})(FormikPasswordresetForm);

