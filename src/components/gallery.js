import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  Row,
  Col,
  Container,
} from "reactstrap";

class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-around">
            <Col style={{ paddingTop: 0 }}>
              <Card
                style={{ padding: 10, marginBottom: 25, fontSize: 14 }}
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

            <div className="col-md-5 vid-car-container pt-2">
              <div
                id="vidCar"
                className="carousel slide carousel-fade intro"
                data-ride="carousel"
                data-interval="false"
              ></div>
            </div>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="rounded hover-shadow cat-overlay">
                <img
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
            <Col>
              <div className="rounded hover-shadow cat-overlay">
                <img
                  className="img-prev"
                  src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <div className="middle">
                  <p className="text">Wait, what? Even more cute cat pics?</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="rounded hover-shadow cat-overlay">
                <img
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
        <Modal>
          <ModalHeader>
            <div>
              <h5></h5>
              <Button />
            </div>
            <ModalBody>
              <Carousel></Carousel>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Gallery;
