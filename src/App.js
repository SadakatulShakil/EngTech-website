import logo from "./logo.svg";
// import "./App.css";
import Headerone from "./components/Headerone/Headerone";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProjectHeader from "./components/ProjectHeader/ProjectHeader";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
// import About from "./components/About/About";
import AboutHeader from "./components/AboutHeader/AboutHeader";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Header/Navbar";
 

function App() {
  return (
    <div className="  ">
 

      <div className="base">
      {/* <Headerone></Headerone> */}
    
      <Header></Header>
      

      
     <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/services"  element={<Services/>} /> 
        <Route path="projects" element={<ProjectHeader />} /> 
        <Route path="contact" element={<Contact />} /> 
        <Route path="about" element={<AboutHeader />} /> 
        <Route path="/*" element={<FourZeroFour />} /> 
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
   
    </div>
    </div>
  );
}

export default App;
