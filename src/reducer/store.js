// import data from '../firebaseConnect'

var redux = require('redux');


const postInitialState = {
    title: 'test'
}
const allReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("connect success");
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;