import React, {Component} from "react";
import Navbar from "./components/Navbar"
import Heading from "./components/Heading";
// import "./app.css";
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';
import Source from "./Business";
import Sport from "./Sport";
import Home from "./Home";
import Footer from "./components/Footer";
import Business from "./Business";
import Signin from "./Signin";
import Signup from "./Signup";

export default class App extends Component {
  render(){
    return(
        <div className="">
          <BrowserRouter>
            <div className=" flex bg-black text-white mt-10 justify-center bg-opacity-20 shadow-xl rounded-lg mr-3 ml-3 pr-1" >
            <Navbar />
            </div>
            <div className="p-2 mt-3">
            <Routes>
            <Route path='/live-news' element={<Home />} ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/business" element={<Business />}></Route>
            <Route path="/sport" element={<Sport />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            </Routes>
            </div>
          </BrowserRouter>  
              <Footer />            
        </div>

    )
}
}