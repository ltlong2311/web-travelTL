import {dataFireBase} from '../firebaseConnect';
import firebase from 'firebase';

var redux = require('redux');


const postInitialState = {
    title: 'test'
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            var pushData = firebase.database().ref('post');
            pushData.push(action.newPost);
            console.log("connect success ");
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;