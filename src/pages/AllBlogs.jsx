import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
const AllBlogs=()=>{
    return (
        <div>
            <Navbar/>
            <div className="search">
                <h2 className="search-h2">Find all blogs</h2>
                <BlogCard name="Name" subheading="Subheading"/>
                <div>top</div>
            </div>
            <Footer/>
        </div>
    )
}
export default AllBlogs;