import React from "react";
import ironman from "../../assets/images/banner/ironman.jpg";
import Rating from "react-rating";
import { FaRegStar, FaStar} from 'react-icons/fa';

const TapCard = ({ data }) => {
  const { id, name, price, quantity, rating } = data;
  // console.log(data)
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={ironman} alt="iron man" className="w-36 h-24" />
      </figure>
      <div className="card-body">
        <h2 className="card-title link-a text-2xl">{name}</h2>
        <p>
          <span className="text-[#ff6f69] font-bold"> Price : </span>
          {price} $
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
        <div className="card-actions justify-end">
          <button className="btn bg-[#09ccd0]">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TapCard;
