import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Body from '../Component/Home/Body/Body';
import Contacts from "../Component/Contacts/Contacts";
import Details from "../Component/Details/NewsDetails";
import Home from "../Component/Home/Home";
import Forum from "../Component/Forum/Forum";
import TourDetailPage from "../Component/Pages/TourDetailPage";
import TourDetail from "../Component/Home/Tour/TourDetail/TourDetail";
import Destinations from "../Component/Pages/Destinations";
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
          <Route path="/tour/:slug.:id.html" component={TourDetail}/>
          <Route path="/destinations" component={Destinations}/>
          <Route path="/tour-detail.html">
            <TourDetailPage />
          </Route>
        </Switch>
      </>
    );
  }
}
