import React from "react";
import ProfilePic from "../Assets/eben.png-modified-modified.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">These are some of the comments, recommendation and rating.</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>This app has been the best food ordering app ever. My whole family use it and its been so helpfull in our everyday life.</p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Ojo Ebenezer</h2>
        </div>
    </div>
  )
}

export default Testimonial;