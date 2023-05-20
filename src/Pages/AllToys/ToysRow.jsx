import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ironman from "../../assets/images/banner/ironman.jpg";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
const ToysRow = ({ toy }) => {
  const { _id, name, price, quantity, subcategory,image } = toy;
  const {user} = useContext(AuthContext);

  const handleToast = ()=>{
    if(!user){
      toast.error("You have to log in first to view details")
    }
  }
  console.log(toy);
  return (
    <tr>
      <td>
      <img src={image} alt="" className="w-16 h-20" />
      </td>
      <td>{toy?.sellerName ? toy.sellerName : "no seller"}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-accent">
            <FaEye className="text-2xl" onClick={handleToast}></FaEye>
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
