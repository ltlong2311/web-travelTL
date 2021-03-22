import "./App.css";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/Nav/Nav";
import RouterURL from "./Router/RouterURL";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import {connect} from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from "./Component/ScrollTop/ScrollTop";



function App(props) {
 
  // useEffect(() => {
  //   toast.success(props.notify);
  // }, [props.numNotify]);

  // const notify = () =>{
  //   if(props.isNotify===true){
  //    toast.success(props.notify);
  //   }
  // }
  return (
    <Router>
      <div className="main-page">
        <ScrollTop />
        <Nav />
        <RouterURL />
        <Footer />
      </div>
      {/* {notify()} */}
      <ToastContainer position="top-right" autoClose={3000} newestOnTop closeOnClick />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
  }
}

export default connect(mapStateToProps)(App)

