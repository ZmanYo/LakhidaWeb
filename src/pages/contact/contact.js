import React, { Component } from 'react';
import Contactform from "../../components/contactform/contactform"
import Navbar from '../../components/navbar/Navigation'
import "./contact-styles.scss"
class contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <Navbar  />
               <Contactform />
             
            </div>
        );
    }
}

export default contact;