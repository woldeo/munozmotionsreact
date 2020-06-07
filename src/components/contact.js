import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container card eventCard p-2 intro">
          <div className="row">
            <div className="col-12 contact-info">
              <h3>Mu&#241oz Motions</h3>
              <h4>Seattle, WA</h4>
              <div className="info-links pb-2">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-inverse fa-2x fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com/explore" target="_blank">
                  <i className="fa fa-inverse fa-2x fa-twitter-square"></i>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa fa-2x fa-inverse fa-linkedin-square"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <i className="fa fa-2x fa-inverse fa-instagram"></i>
                </a>
                
                  <a href="mailto:dm@munozmotions.com" className="emailAdd">
                    dm@munozmotions.com
                  </a>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-4 p-4 card donate-card">
                <h3>Donations</h3>
                <h5>Did you know?</h5>
                <p>
                  The dance arts are primarily funded through grants,
                  performance admission, and donations? Support your local arts
                  and make a donation today.
                </p>
                <a href="https://paypal.com" target="_blank">
                  <i className="fa fa-2x fa-inverse fa-cc-paypal"></i>
                </a>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Contact;