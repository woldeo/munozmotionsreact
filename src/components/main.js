import React, { Component } from "react";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import Gallery from "../components/gallery";
import Events from "../components/events";
import Contact from "../components/contact";
import "../App.css";
import { Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {
  
    render() {

        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' title="Home" component={Home}/>
                    <Route path='/about' title="About" component={About}/>
                    <Route path='/gallery' title="Gallery" component={Gallery}/>
                    <Route path='/events' title="Events" component={Events}/>
                    <Route path='/contact' title="Contact" component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Main;