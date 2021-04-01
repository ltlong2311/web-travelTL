import "./App.css";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/Nav/Nav";
import RouterURL from "./router/RouterURL";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import {connect} from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from "./Component/ScrollTop/ScrollTop";
import Image from "./Component/ShowImage/Image";
import FormLogin from "./Component/Login/FormLogin";



function App(props) {
 
  // useEffect(() => {
  //   toast.success(props.notify);
  // }, [props.numNotify]);

  // const notify = () =>{
  //   if(props.isNotify===true){
  //    toast.success(props.notify);
  //   }
  // }
   const showImageReview  = () => {
        if(props.showImageDes){
          return <Image />
        }
    }
    const showFormLogin  = () => {
      if(props.showFormLogin){
        return <FormLogin />
      }
  }
  return (
    <Router>
      <div className="main-page">
        <ScrollTop />
        <Nav />
        <RouterURL />
        <Footer />
      </div>
      {/* {notify()} */}
      {showImageReview()}
      {showFormLogin()}
      <ToastContainer position="top-right" autoClose={3000} newestOnTop closeOnClick />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
    showImageDes: state.showImageDes,
    showFormLogin: state.showFormLogin
  }
}

export default connect(mapStateToProps)(App)

