import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const single_toy = useLoaderData();

  const {id,name,price,quantity,subcategory,description,rating,sellerName, sellerEmail} = single_toy;
  console.log(single_toy);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{subcategory}</p>
        <p>{description}</p>
        <p>{rating}</p>
        <p>seller name</p>
        <p>seller email</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
