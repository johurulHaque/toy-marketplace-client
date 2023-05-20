import React from "react";
import { useLoaderData } from "react-router-dom";
import ironman from "../../assets/images/banner/ironman.jpg";
import './SingleToy.css'
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
const SingleToy = () => {
  const single_toy = useLoaderData();

  const {name,price,quantity,subcategory,description,rating,sellerName, sellerEmail} = single_toy;
  console.log(single_toy);
  return (
    <div className="card card-side bg-base-100 shadow-xl  w-[80%] mx-auto">
      <figure className=" w-80">
        <img
          src={ironman}
          alt="iron man" 
          className="w-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title link-a text-2xl">{name}</h2>
        <p className="p-font">
          <span className="text-[#ff6f69] font-bold"> Subcategory : </span>
          {subcategory} 
        </p>
       <p className="p-font">
          <span className="text-[#ff6f69] font-bold"> Price : </span>
          {price} $
        </p>
       <p className="p-font">
          <span className="text-[#ff6f69] font-bold"> Quantity : </span>
          {quantity} 
        </p>
       <p className="p-font">
          <span className="text-[#ff6f69] font-bold"> Description : </span>
          {description} 
        </p>
  
        <div>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          ></Rating>
          <span className="ms-1">{rating}</span>
        </div>
       <p className="p-font">seller name</p>
       <p className="p-font">seller email</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
