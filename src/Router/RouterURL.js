import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,  
    // Link
} from "react-router-dom";
// import Body from '../Component/Home/Body/Body';
import Contacts from '../Component/Contacts/Contacts';
import Details from '../Component/Details/Details';
import Home from '../Component/Home/Home';


export default class RouterURL extends Component {
    render() {
        return (
                <div>
                    
                    <Switch>
                        <Route exact path="/">
                                <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        {/* <Route exact path="/news">
                            <News />
                        </Route> */}
                        <Route path="/details/:slug.:id.html">
                            <Details />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                    </Switch>
                    
                </div>
                )
    }
}
