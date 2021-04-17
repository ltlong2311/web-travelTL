import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Body from '../Component/Home/Body/Body';
import Contacts from "../pages/ContactsPage";
import Details from "../Component/Details/NewsDetails";
import Home from "../Component/Home/Home";
import Forum from "../Component/Forum/Forum";

import DestinationPage from "../pages/DestinationPage";
import TourDetailPage from "../pages/TourDetailPage";
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
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/news/:slug.:id.html" component={Details} />
          <Route path="/tours/:slug.:id.html" component={TourDetailPage}/>
          <Route path="/destinations" component={DestinationPage}/>
        </Switch>
      </>
    );
  }
}
