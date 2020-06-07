import React, { Component } from "react";

class Events extends Component {
  render() {
    return (
      <React.Fragment>
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
                <div className="row">
                  <div className="col-sm-9 ml-2 p-1">
                    <h6>
                      - Modern Cats Round 1 @
                      <a href="https://spectrumdance.org/" target="_blank">
                        {" "}
                        Shake Your Booty Place
                      </a>
                    </h6>
                  </div>
                  <div className="col">
                    <a
                      className="btn btn-sm ticketBtn rounded-pill"
                      href="https://www.brownpapertickets.com/browse.html"
                      target="_blank"
                    >
                      Tickets
                    </a>
                  </div>
                  <div className="col-sm-9 ml-2 p-1">
                    <h6>
                      - Modern Cats Round 2 @
                      <a href="http://velocitydancecenter.org/" target="_blank">
                        {" "}
                        Shake Your Face Place
                      </a>
                    </h6>
                  </div>
                  <div className="col">
                    <a
                      className="btn btn-sm ticketBtn rounded-pill"
                      href="https://www.brownpapertickets.com/browse.html"
                      target="_blank"
                    >
                      Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="container pt-4">
                <div
                  className="carousel slide carousel-fade gal-vid rounded intro"
                  id="project-carousel"
                  data-ride="carousel"
                >
                  <div className="carousel-inner danceCat vid-prev">
                    <div className="carousel-item active">
                      <img
                        className="img-fluid"
                        src="https://i.kym-cdn.com/photos/images/original/001/000/072/6cd.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://static.boredpanda.com/blog/wp-content/uploads/2018/11/funny-dancing-cats-11-5be421492f1ca__700.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://static.boredpanda.com/blog/wp-content/uploads/2018/11/funny-dancing-cats-17-5be4246f5e16f__700.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://i.forfun.com/jjjrbdl6.jpeg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://interlude-cdn-blob-prod.azureedge.net/interlude-blob-storage-prod/2018/09/dancing-cat.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://i.pinimg.com/originals/77/12/a3/7712a3e1c365f06077a854f3252dba5a.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="https://i.imgflip.com/1r86cg.jpg"
                      />
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#project-carousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#project-carousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
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