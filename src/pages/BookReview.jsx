import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/the_alchemist.jpg"
const BookReview =()=>{
    return(
        <div>
            <Navbar/>
            <div className="review">
                <div className="text">
                    <div className="heading">
                        <h1>Name</h1>
                        <h2>Date</h2>
                    </div>
                    <h2>Final thoughts in one line</h2>
                    <h3 className="bold">Review</h3>
                    <h3 className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, animi nemo nulla fugiat explicabo cum est totam eum iure beatae quidem numquam officiis illo ipsum hic molestiae deserunt ad. Unde.</h3>
                    {/*start with a summary (without spoilers) introduce concept , conflict  and main characters
                    Support you points with actual evidence ,Be respectful to the author*/}
                    <h3 className="bold">Final thoughts</h3>
                    {/*evaluate the book - were the characters detailed , area of the book that was under developed , was the plot well placed , was it predictable , authors writing style , is the book heavy on action . Was the end satisfying , was it well edited . */}
                    <h3 className="bold">Would recommend to:</h3>
                    <h3 className="bold">Similar books:</h3>
                    <h3 className="bold">Star Rating:</h3>
                </div>
                <div className="review-img">
                    <img src={img}></img>
                    <h2>Author :</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default BookReview;