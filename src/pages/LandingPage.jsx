import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const LandingPage=()=>{
    return(
        <>
        <Navbar/>
        <div className="landing_page">
            <h1>Your bestie who reads books</h1>
        </div>
        <Footer/>
        </>
    )
}
export default LandingPage;