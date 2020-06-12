import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import logo from "../images/logo.PNG";
import nav from "../images/nav.svg";
import { Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: 0,
      },
    };

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    this.setState({ style: { height: "100%" } });
  }

  closeNav() {
    this.setState({ style: { height: 0 } });
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref="navigation"
          className="overlay"
          style={this.state.style}
          onClick={() => this.closeNav()}
        >
          <div className="overlay-content">
            <div>
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
              <Link className="nav-link" to="/events">
                Events
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Jumbotron>
          <Container fluid>
            <Row>
              <Link to="/home">
                <img className="img-fluid logo" src={logo} alt="Logo" />
              </Link>
              <div className="col mr-auto pt-4 ">
                <h2>Mu&#241;oz Motions</h2>
                <h5>{this.state.title}</h5>
              </div>
              <div className="col-1 pt-4">
                <img
                  className="navButton btn"
                  src={nav}
                  alt="Nav"
                  onClick={() => this.openNav()}
                />
              </div>
            </Row>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
