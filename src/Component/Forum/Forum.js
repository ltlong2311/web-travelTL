import React from 'react'
import HeaderVideo from '../Header/HeaderVideo'
import PostList from './view/PostList'
import NavForum from './view/NavForum'
import CreatePost from './view/CreatePost';
import './Forum.css'

import firebase from 'firebase';

// import firebase from 'firebase/app';
// import 'firebase/database'; // If using Firebase database
// import 'firebase/storage';
// import RouterForum from "./RouterForum";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyPost from './view/MyPost';
// import AlertInfo from './view/AlertInfo';

const addData = (newPost) => {
  var connectData = firebase.database().ref('post');
  connectData.push(newPost);
}

function Forum() {
    return (  
      <Router>  
        <div className="the-new-forum">
          <HeaderVideo video="/videos/video.mp4" title="THẾ GIỚI TL" />
          
          <NavForum />

          <Switch>
            <Route exact path="/forum">
              <PostList />
            </Route>
            <Route exact path="/forum">
              <PostList />
            </Route>
            <Route path="/forum/create">
              <CreatePost getData={(newPost) => addData(newPost)}/>
            </Route>
            <Route path="/forum/my-post">
              <MyPost />
            </Route>
          </Switch>
          
        </div>
      </Router>
    )
}

export default Forum

