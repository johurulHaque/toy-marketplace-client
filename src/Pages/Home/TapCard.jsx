import React, { useContext } from "react";
import ironman from "../../assets/images/banner/ironman.jpg";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const TapCard = ({ data }) => {
  const {user} = useContext(AuthContext);
  const { _id, name, price, rating,image } = data;
  // console.log(data)
  const handleToast = ()=>{
    if(!user){
      toast.error("You have to log in first to view details")
    }
  }
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} alt="iron man" className="w-56 h-44 pt-4" />
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
          <Link to={`/toy/${_id}`}>
            <button className="btn bg-[#09ccd0]" onClick={handleToast}>View Details</button>
          </Link>
          {/* <button className="btn bg-[#09ccd0]">View Details</button> */}
        </div>
      </div>
    </div>
  );
};

export default TapCard;
