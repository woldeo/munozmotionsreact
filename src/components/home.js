import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container vid-con">
          <div>
            <div className="embed-responsive embed-responsive-16by9 intro">
              <iframe
                title="home vid"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/rmQ_8KyXQpc"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
          <h4 class="sigLine">- Mu&#241;oz Motions</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
