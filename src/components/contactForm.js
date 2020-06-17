import React from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input } from "reactstrap";


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agree: false,
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        message: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(firstName, lastName, email, message) {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    if (this.state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters.";
      } else if (firstName.length > 15) {
        errors.firstName = "First name must be shorter than 15 characters.";
      }
    }
    if (this.state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters.";
      } else if (lastName.length > 15) {
        errors.lastName = "Last name must be 15 or less characters.";
      }
    }

    if (this.state.touched.message) {
      if (message.length < 50) {
        errors.message =
          "Please write a brief message about why you are contacting us.";
      }
    }

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
        touched: {...this.state.touched, [field]: true}
    });
}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {

    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.message, this.state.email);

    return (
      <div className="form-container">
        <Form style={{ marginLeft: 12 }} id="form" onSubmit={this.handleSubmit}>
          <h1 style={{ marginBottom: 10 }}>Contact </h1>
          <FormGroup>
            <Label htmlFor="firstName"> First Name </Label>
            <Input
              rows="1"
              type="text"
              id="firstName"
              name="firstName"
              invalid={errors.firstName}
              onBlur={this.handleBlur('firstName')}
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.firstName}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName"> Last Name </Label>
            <Input
              rows="1"
              type="text"
              id="lastName"
              name="lastName"
              invalid={errors.lastName}
              onBlur={this.handleBlur('lastName')}
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.lastName}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email"> Email </Label>
            <Input
              type="email"
              id="email"
              name="email"
              invalid={errors.email}
              onBlur={this.handleBlur('email')}
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message"> Message </Label>
            <Input
              rows="7"
              type="textarea"
              id="message"
              name="message"
              invalid={errors.message}
              onBlur={this.handleBlur('message')}
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.message}</FormFeedback>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="agree"
                checked={this.state.agree}
                onChange={this.handleInputChange}
              />{" "}
              <strong>May we contact you?</strong>
            </Label>
          </FormGroup>
        </Form>
        <button
          style={{ marginTop: 15 }}
          className="btn modal-close"
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ContactForm;
