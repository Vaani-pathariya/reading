import React from "react";
const BlogCard=(props)=>{
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h3>{props.subheading}</h3>
        </div>
    )
}
export default BlogCard;