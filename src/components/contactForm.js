import React from 'react';
import { Button } from 'reactstrap';
import { Form } from 'react-bootstrap';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
      };
      
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.persist();
    const input = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [input]: value });
  }

  handleSubmit = event => {
    event.persist();
    event.preventDefault();
  };

  render() {
    return (
      <div className="form-container">
        <Form id="form" onSubmit={this.handleSubmit}>
          <h1 style={{marginBottom: 10}}>Contact Form</h1>
          <Form.Group>
            <Form.Label> First Name </Form.Label>
            <Form.Control
              rows="1"
              type="textarea"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Last Name </Form.Label>
            <Form.Control
              rows="1"
              type="textarea"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Email </Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="Form.ControlTextArea">
            <Form.Label> Message </Form.Label>
            <Form.Control
              rows="7"
              as="textarea"
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button className="ticketBtn"type="submit" value="SUBMIT FORM" >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;