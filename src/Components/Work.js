import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {

    const workInfoData = [
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Customers can now pick the meals of their choice"
        },
        {
            image:ChooseMeals,
            title:"Choose Now Often",
            text:"Customers can choice out of the varieties of food available on the app"
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text:"Customers can now have their choice of food delivered fast at any location within Lagos"
        }
    ];

  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">We are very fast and reliable, you get to pick your meals, choose among those available on the app and get it delivered to your door step.</p>
        </div>
        <div className="work-section-bottom">
            { workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Work;