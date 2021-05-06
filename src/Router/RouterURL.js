import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Body from '../Component/Home/Body/Body';
import ContactsPage from "../pages/ContactsPage";
import Details from "../Component/Details/NewsDetails";
import HomePage from "../Component/Home/Home";
import ForumPage from "../Component/Forum/Forum";

import DestinationPage from "../pages/DestinationPage";
import TourDetailPage from "../pages/TourDetailPage";
// import News from '../Component/Home/News/News';

export default class RouterURL extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/forum">
            <ForumPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/news/:slug.:id.html" component={Details} />
          <Route path="/tours/:slug.:id.html" component={TourDetailPage}/>
          <Route path="/destinations" component={DestinationPage}/>
        </Switch>
      </>
    );
  }
}
