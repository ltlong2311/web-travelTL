import {dataFirebase} from '../firebaseConnect';
// import firebase from 'firebase/app';
// import 'firebase/database';
import { toast } from 'react-toastify';
var redux = require('redux');


const postInitialState = {
    title: 'test',
    isEdit: false,
    editPost:{},
    notify: "",
    searchPost:"",
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            // var pushData = firebase.database().ref('post');
            var pushData = dataFirebase;
            pushData.push(action.newPost);
            console.log("connect success ");
            return state

        case "CHANGE_EDIT_POST":
            return {...state, isEdit:!state.isEdit}

        case "GET_EDIT_POST":
            return {...state, editPost:action.postEditInfo}
        
        case "EDIT_POST":
            dataFirebase.child(action.dataPostChanged.id).update({       
                title: action.dataPostChanged.title,
                category: action.dataPostChanged.category,
                content: action.dataPostChanged.content
            })
            console.log("dữ liệu thay đổi" + JSON.stringify(action.dataPostChanged));
            return {...state, editPost:{}}

        case "DELETE_POST":
            dataFirebase.child(action.idPostDelete).remove();
            console.log("id" + action.idPostDelete);
            return {...state, editPost:{}}
        case "NOTIFY_SUCCESS":
            toast.success(action.notify);
            return {...state, notify:action.notify}
        case "NOTIFY_ERROR":
            toast.error(action.notify);
            return {...state, notify:action.notifyEdit}
            // return {...state,isNotify:!state.isNotify, notify:action.notifyEdit}       
        case "SEARCH":
            console.log(action.searchText);
            return {...state, searchPost:action.searchText}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store;