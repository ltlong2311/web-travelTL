import {dataFirebase} from '../firebaseConnect';
import firebase from 'firebase';
import { toast } from 'react-toastify';
var redux = require('redux');


const postInitialState = {
    title: 'test',
    isEdit: false,
    editPost:{},
    showNotify: false,
    isNotify: false,
    notify: "",
    numNotify: 0,
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            var pushData = firebase.database().ref('post');
            pushData.push(action.newPost);
            console.log("connect success ");
            return state

        case "CHANGE_EDIT_POST":
            return {...state, isEdit:!state.isEdit}

        case "GET_EDIT_POST":
            return {...state, editPost:action.postEditInfo}
        
        case "EDIT_POST":
            dataFirebase.child(action.dataPostChanged.id).update({       // update vao du lieu co cung id dang sua 
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
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store;