import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./contactform-styles.scss";
import { withFormik, Form as FForm, Field, FieldProps } from "formik";
import * as Yup from "yup";
import {connect} from 'react-redux';
import {customerContact} from '../../store/Actions/contactActions';
import  Select from 'react-select';



function ContactForm({  values, errors, touched, isSubmitting, handleChange }) {



  return (

    <Form tag={FForm} className="contactform bg-light scale-in-center">
      <div className="contactintro">
        <p className="font-weight-bold text-lg">What can we build for you?</p>
        <div className="text-center font-weight-bold font-italic">
          contact@lakhidatech.com
        </div>
        <div className="text-center font-weight-bold font-italic">
          571-000-00000
        </div>
      </div>
      <FormGroup row>
        <Label for="customername" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Input
            tag={Field}
            type="text"
            name="name"
            id="customername"
            placeholder="name"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="customeremail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Input
            tag={Field}
            type="email"
            name="email"
            id="customeremail"
            placeholder="email"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="company" sm={2}>
          Company
        </Label>
        <Col sm={10}>
          {touched.company && errors.company && <p>{errors.company}</p>}
          <Input
            tag={Field}
            type="text"
            name="company"
            id="company"
            placeholder="Company/Organization"
          />
        </Col>
      </FormGroup>

       <FormGroup row>
        <Label for="phone" sm={2}>
          Phone
        </Label>
        <Col sm={10}>
          {touched.phone && errors.phone && <p>{errors.phone}</p>}
          <Input
            tag={Field}
            type="number"
            name="phone"
            id="phone"
            placeholder="phone"
          />
        </Col>
      </FormGroup>

        <FormGroup row >
        <Label for="about" sm={2}>
          About
        </Label>
        <Col sm={10} >
          {touched.about && errors.about && <p>{errors.about}</p>}

          <select

            // tag={Field}

             type="input"
             name="about"
             value={values.about}
             onChange={handleChange}
             id="about"
             placeholder="about"
            >
             <option value="" label="Select... " />
             <option value="Automation Anywhere" label="Automation Anywhere" />
             <option value="Database Adminstration" label="Database Adminstartion" />
             <option value="Dot.Net" label="Dot.Net" />
             <option value="Full Stack" label="Full Stack" />
             <option value="Java development" label="Java development" />
             <option value="MuleSoft" label="MuleSoft" />
             <option value="Python/Django" label="Python/Django" />
             <option value="SalesForce" label="SalesForce" />
             <option value="SharePoint" label="SharePoint" />
             <option value="Training" label="Training" />

          </select>
        </Col>
      </FormGroup>


      <FormGroup row>
        <Label for="message" sm={2}>
          Message
        </Label>
        <Col sm={10}>
          {touched.message && errors.message && <p>{errors.message}</p>}
          <Input
              tag={Field}
              type="textarea"
              name="message"
              id="message"
              placeholder="message"
          />
        </Col>
      </FormGroup>
      <Button className="btn btn-info ">Submit</Button>
    </Form>
  );
}
//FGE: Note you can also wrap the JSX in Formik tag as it is the context provider

const FormikContactForm = withFormik({
    mapPropsToValues: function ({name,  email, phone, about, company, message}) {

        return {
            email: email || "",
            name: name || "",
            phone: phone || "",
            company: company || "",
            about: about || "",
            message: message || ""
        };

    },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    name: Yup.string()
      .min(2, "Name must be 2 characters or longer")
      .required("Name is required"),
    company: Yup.string()
      .min(2, "Company must be 2 characters or longer")
      .required("company is required"),
    message: Yup.string()
      .min(20, "Message must be 20 characters or longer")
      .required("Company is required")
      .max(1000, "Number of characters too long" )
  }),


  handleSubmit(values, {props}) {
    console.log(props);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    //   props.onChange('about', values)
      props.customerContact(values)

      // props.about(values)

      // const payload = {
      // ...values,
      // topics: values.about.map(t => t.value),
  }



})(ContactForm);

export default connect (null, {customerContact})(FormikContactForm);