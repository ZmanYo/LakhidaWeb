import React from "react";
import { withFormik, Form as FForm, Field } from "formik";
import * as Yup from "yup";
import "./signup-styles.scss";
import {connect} from 'react-redux';
import {registerUser} from '../../store/Actions/userActions';

function SignUpForm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="signupformcontainer">
      <div className="row">
        <div className="col-lg-12">
          <FForm
            className="bg-light scale-in-center"
            style={{ borderRadius: "5%" }}
          >

             <div className="form-group">
              {touched.username && errors.username && (
                <p>{errors.username}</p>
              )}
              <Field
                type="text"
                name="username"
                placeholder="username*"
                className="form-control"
              />
            </div>



            <div className="form-group">
              {touched.first_name && errors.first_name && (
                <p>{errors.first_name}</p>
              )}
              <Field
                type="text"
                name="first_name"
                placeholder="First Name*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
              <Field
                type="text"
                name="last_name"
                placeholder="Last Name*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {touched.email && errors.email && <p>{errors.email}</p>}
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {touched.password && errors.password && <p>{errors.password}</p>}
              <Field
                type="password"
                name="password"
                placeholder="Password*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              {touched.re_password && errors.re_password && (
                <p>{errors.re_password}</p>
              )}
              <Field
                type="password"
                name="re_password"
                placeholder="Confirm Password*"
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

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, email, password, re_password, first_name, last_name }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      re_password: re_password || "",
      first_name: first_name || "",
      last_name: last_name || ""
    };
  },

  validationSchema: Yup.object().shape({
     username: Yup.string()
      .min(2, "username Too Short!")
      .max(50, "username Too Long!")
      .required("username Required"),
    first_name: Yup.string()
      .min(2, "First Name Too Short!")
      .max(50, "First Name Too Long!")
      .required("First Name Required"),
    last_name: Yup.string()
      .min(2, "Last Name Too Short!")
      .max(50, "Last Name Too Long!")
      .required("Last Name Required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    re_password: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
     )
   })
  }),

  handleSubmit(values, {props}) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    props.registerUser(values)
  }
})(SignUpForm);

// export default FormikSignUpForm;
export default connect (null, {registerUser})(FormikSignUpForm);
