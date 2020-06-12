import React, { Component } from "react";
import linkedIn from '../images/linkedIn.svg';
import fb from '../images/fb.svg';
import twit from '../images/twit.svg';
import insta from '../images/insta.svg';
import pp from '../images/pp.svg';

class Contact extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container card eventCard p-2 intro">
          <div className="row">
            <div className="col-12 contact-info">
              <h3>Mu&#241;oz Motions</h3>
              <h4>Seattle, WA</h4>
              <div className="info-links pb-2">
                <a href="https://www.facebook.com/" target="_blank">
                  <img className="svg" src={fb}/>
                  </a>
                <a href="https://twitter.com/explore" target="_blank">
                <img className="svg" src={twit}/>
                </a>
                <a href="https://linkedin.com" target="_blank">
                <img className="svg" src={linkedIn}/>
                </a>
                <a href="https://instagram.com" target="_blank">
                <img className="svg" src={insta}/>
                </a>
                <br />
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
                <img style={{width: 100}}className="svg" src={pp} />
                </a>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Contact;