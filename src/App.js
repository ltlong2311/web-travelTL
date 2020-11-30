import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,  
//   Link
// } from "react-router-dom";

import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';
import RouterURL from './Router/RouterURL';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,  
  // Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <RouterURL />
        {/* <div className="container">
          <div className="row mt-2">
            <News />
            <News />
            <News />
          </div>  
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
