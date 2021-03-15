import {dataFirebase} from '../firebaseConnect';
import firebase from 'firebase';

var redux = require('redux');


const postInitialState = {
    title: 'test',
    isEdit: false,
    editPost:{}
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
        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store;