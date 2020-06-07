import React, { Component } from "react";
import Header from "./components/header";
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Events from './components/events';
import Contact from './components/contact';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Contact /> */}
        {/* <Events /> */}
        <Gallery />
        {/* <Home />
        <About /> */}
      </React.Fragment>
    );
  }
}

export default App;
