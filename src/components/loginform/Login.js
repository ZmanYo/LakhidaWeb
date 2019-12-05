import "./login-styles.scss";
import React from "react";
import { withFormik, Form as FForm, Field } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import {connect} from 'react-redux';
import {login} from '../../store/Actions/userActions';
import { Redirect } from "react-router-dom";


function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="loginformcontainer">
      <div className="row">
        <div className="col-lg-12">
          <FForm
            className="bg-light scale-in-center"
            style={{ borderRadius: "5%" }}
          >
            <IconContext.Provider
              value={{ color: "#0a807c", className: "global-class-name" , size:'4rem'}}
            >
              <div className="loginusericon">
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
            <div className="form-group">
              {touched.password && errors.password && <p>{errors.password}</p>}
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div>
              {" "}
              <a href="http://localhost:3000/Passwordresetform"> Forget Password?</a>{" "}
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

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, {props}) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
   props.login(values)
     return  <Redirect to = "/" />

  }
})(LoginForm);

// export default FormikLoginForm;
export default connect (null, {login})(FormikLoginForm);

