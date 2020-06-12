import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  Row,
  Col,
  Container,
} from "reactstrap";
import CatCarousel from "./catCarousel";
import VidCarousel from "./vidCarousel";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col style={{ paddingTop: 8 }}>
              <Card
                style={{ padding: 10, fontSize: 16 }}
                className="gal-card intro"
              >
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam ipsam ducimus totam eius quis? Delectus veritatis autem
                  nihil molestiae error. Ea inventore eaque accusantium eum
                  beatae veritatis in aliquid cum! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Praesentium, doloribus. In
                  delectus, rerum dignissimos, accusamus numquam voluptate
                  quaerat nulla labore cupiditate, perspiciatis ducimus
                  veritatis minima sed. Illum labore eos ullam! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Aliquid, culpa
                  qui fugit quibusdam labore, nihil nulla exercitationem eveniet
                  voluptatem aut doloremque rem, excepturi est eligendi quis
                  doloribus quam! Ipsum, dolores!
                </p>
              </Card>
            </Col>

            <div className="col-md-5 pt-2">
              <div className="vidCar carousel-fade intro">
                <div className="carousel-inner">
                  <VidCarousel />
                </div>
              </div>
            </div>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col onClick={this.toggleModal}>
              <div className="rounded hover-shadow cat-overlay">
                <img
                  alt=""
                  className="img-prev"
                  src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                />
                <div className="middle">
                  <p className="text">
                    Cute ass cat pics? Click right here, right meow.
                  </p>
                </div>
              </div>
            </Col>
            <Col onClick={this.toggleModal}>
              <div className="rounded hover-shadow cat-overlay">
                <img
                  alt=""
                  className="img-prev"
                  src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <div className="middle">
                  <p className="text">Wait, what? Even more cute cat pics?</p>
                </div>
              </div>
            </Col>
            <Col onClick={this.toggleModal}>
              <div className="rounded hover-shadow cat-overlay">
                <img
                  alt=""
                  className="img-prev"
                  src="https://thenypost.files.wordpress.com/2019/12/cat.jpg?quality=80&strip=all"
                />
                <div className="middle">
                  <p className="text">This is getting out of hand.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
            <ModalBody>
              <CatCarousel />
            </ModalBody>
          </ModalHeader>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Gallery;
