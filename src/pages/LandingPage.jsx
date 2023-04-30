import React from "react";
import Sidebar from "../components/Sidebar";
import Display from "../components/Display";
import "./landingpage.css"
const LandingPage=()=>{
    return(
        <div className="LandingPage">
            <Sidebar/>
            <Display/>
        </div>
    )
}
export default LandingPage;