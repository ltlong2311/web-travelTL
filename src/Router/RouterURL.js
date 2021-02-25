import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Body from '../Component/Home/Body/Body';
import Contacts from "../Component/Contacts/Contacts";
import Details from "../Component/Details/Details";
import Home from "../Component/Home/Home";
import Image from "../Component/Image/Image";
// import News from '../Component/Home/News/News';

export default class RouterURL extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:slug-:id.html">
            <Details />
          </Route>
          <Route path="/images">
            <Image />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </>
    );
  }
}
