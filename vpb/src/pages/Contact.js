import React from 'react';
import ContactCard from '../components/Contact-card';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="container11">
      <div className="row align-items-center">
        <div className="col-lg-6">
          {/* Background Image */}
          <div className="col-lg-11 background-image">
            <div className="contact-info">
              <div className="contact-heading">
                <h2>
                  <b>Get In Touch</b>
                </h2>
                <p>
                  Our success in creating business solutions is due in large part especially to a talented and highly committed team.
                </p>
              </div>
              <ul className="contact-details">
                <li>
                  <i className="las la-map-marked"></i>
                  Kinfra Calicut - Near Calicut University, Chelambra P.O
                  Kakkancherry, Malappuram, Kerala. 673634
                </li>
                <li>
                  <i className="las la-envelope-open"></i>
                  voltixsolution@gmail.com
                </li>
                <li>
                  <i className="las la-phone-volume"></i>
                  +91 80893 25152
                  <br />
                  +91 70340 40213
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6 sm-padding">
          <div className="contact-form-wrap">
            <div className="contact-heading1">
              <h2>
                <b>Fill Up The Form</b>
              </h2>
              <p>
                Our success in creating business solutions is due in large part especially to a talented and highly committed team.
              </p>
            </div>
            <div className="clearfix">
              <section>
                {/* Include your ContactCard component here */}
                <ContactCard />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
