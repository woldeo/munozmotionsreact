import React, { Component } from "react";
import EventCarousel from "./eventCarousel";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
} from "reactstrap";
import TICKETS from "../shared/tickets";



const EventCard = ({ id, name, location, price, title, addTicket }) => {
  return (
    <div id={id}>
      <div className="row">
        <div className="col-sm-9 ml-2 p-1">
          <h6>
            {name} @ {location}
          </h6>
        </div>
      </div>
      <div className="row">
        <select
          style={{
            borderRadius: 5,
            marginTop: 5,
            marginBottom: 12,
            marginLeft: 15,
          }}
          className="ticketBtn"
          title="Qty"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>{" "}
        <Button
          type="submit"
          onClick={() => addTicket({ id, name, location, price, title })}
          style={{ marginLeft: 15, marginTop: 5, marginBottom: 10 }}
          className="btn ticketBtn"
        >
          Add Tickets
        </Button>
        <div className="col" style={{ marginTop: 10 }}>
          {" "}
          ${price} each
        </div>
      </div>
    </div>
  );
};


class Events extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.lessTicket = this.lessTicket.bind(this);
    this.addTicket = this.addTicket.bind(this);

    this.state = {
      isModalOpen: false,
      tickets: TICKETS,
      cart: [],
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  clearCart() {
    this.setState({
      cart: [],
    });
  }

  addTicket(ticket) {
    const totalCart = this.state.cart;
    const ticketsInCart = totalCart.filter((t) => t.id === ticket.id);
    const ticketsNotInCart = totalCart.filter((t) => t.id !== ticket.id);

    if (ticketsInCart.length > 0) {
      const qty = {
        ...ticketsInCart[0],
        units: ticketsInCart[0].units + 1,
      };

      this.setState({
        cart: [...ticketsNotInCart, qty],
      });
    } else {
      const newTicket = ticket;
      newTicket.units = 1;
      this.setState({
        cart: [...totalCart, newTicket],
      });
    }
  }

  lessTicket(ticket) {
    const totalCart = this.state.cart;
    const ticketsInCart = totalCart.filter((t) => t.id === ticket.id);
    const ticketsNotInCart = totalCart.filter((t) => t.id !== ticket.id);

    const qty = {
      ...ticketsInCart[0],
      units: ticketsInCart[0].units - 1,
    };

    if (qty.units >= 0) {
      this.setState({
        cart: [...ticketsNotInCart, qty],
      });
    } else if ((qty.units = 0)) {
      console.log("quantity", qty.units);
    }
  }

  cartContents() {
    console.log(this.state.cart);
    const emptyCart = (
      <h4 style={{ margin: 15, fontWeight: "lighter" }}>
        Add tickets to continue with purchase.
      </h4>
    );
    const cartTickets = this.state.cart.map((t) => (
      <CardBody>
        <Row>
          <Col style={{ color: "black" }}>
            <h4 style={{ color: "black" }}>{t.name}</h4>
            <h5>{t.location}</h5>
            <p>${t.price * t.units}</p>
            <p>Qty: {t.units}</p>
          </Col>
          <Button
            className="ticketBtn"
            size="sm"
            color="secondary"
            onClick={() => this.addTicket(t)}
          >
            Add
          </Button>
          <Button
            outline
            size="sm"
            color="secondary"
            onClick={() => this.lessTicket(t)}
          >
            Delete
          </Button>
        </Row>
      </CardBody>
    ));
    if (cartTickets.length > 0) {
      return cartTickets;
    } else {
      return emptyCart;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          centered
        >
          <ModalHeader>
            <div>
              <h5 className="btn modal-close" onClick={this.toggleModal}>
                Close
              </h5>
            </div>
          </ModalHeader>
          <ModalBody>
            <Card style={{outline: 0 }}>
              <CardHeader style={{ backgroundColor: "black", color: 'white' }}>
                <h2>Purchase Tickets</h2>
              </CardHeader>
              <div>{this.cartContents()}</div>
            </Card>
          </ModalBody>
          <ModalFooter>
            <div>
              <h5 className="btn modal-close" onClick={this.clearCart}>
                Empty Cart
              </h5>
            </div>
          </ModalFooter>
        </Modal>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 pb-2">
              <h3>Current Project</h3>
              <div className="card eventCard p-3 intro">
                <p className="m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam vero modi quas vitae error harum! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptate voluptas
                  temporibus facilis facere nisi eius tenetur minus distinctio
                  assumenda iste.
                </p>
              </div>

              <h3>Upcoming Events</h3>

              <div className="card eventCard p-4 intro">
                {this.state.tickets.map((ticket) => (
                  <EventCard
                    key={ticket.id}
                    {...ticket}
                    addTicket={this.addTicket}
                  />
                ))}
                <Button
                  style={{ marginTop: 10 }}
                  className="ticketBtn"
                  onClick={this.toggleModal}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="container pt-4">
                <div className="carousel-fade gal-vid2 rounded intro">
                  <div className="carousel-inner danceCat vid-prev">
                    <EventCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
