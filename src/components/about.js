import React, { Component } from "react";

class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container pt-4">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                alt=''
                className="img-fluid rounded intro"
                src="https://img4.goodfon.com/wallpaper/nbig/1/47/kot-koshka-siamskii-siamskaia-portret-morda-trava-svet-fon-b.jpg"
              />
            </div>
            <div className="col">
              <h3>About Mu&#241;oz Motions</h3>
              <p style={{fontSize: 18, fontWeight: "lighter"}}>
                Lectus nulla at volutpat diam ut venenatis tellus in metus.
                Convallis posuere morbi leo urna molestie at elementum eu
                facilisis. Tincidunt vitae semper quis lectus nulla. Fringilla
                est ullamcorper eget nulla. Eget mi proin sed libero enim sed
                faucibus. Cursus metus aliquam eleifend mi in nulla posuere
                sollicitudin. In nulla posuere sollicitudin aliquam ultrices
                sagittis orci a. Diam ut venenatis tellus in metus vulputate eu.
                Quam pellentesque nec nam aliquam. Laoreet non curabitur gravida
                arcu. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
                orci a. Amet massa vitae tortor condimentum. Euismod quis
                viverra nibh cras pulvinar mattis nunc. In ornare quam viverra
                orci sagittis.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
