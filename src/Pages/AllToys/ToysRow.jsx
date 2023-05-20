import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ironman from "../../assets/images/banner/ironman.jpg";
const ToysRow = ({ toy }) => {
  const { _id, name, price, quantity, subcategory } = toy;

  console.log(toy);
  return (
    <tr>
      <td>
        <img src={ironman} alt="" className="w-14 h-9" />
      </td>
      <td>{toy?.sellerName ? toy.sellerName : "no seller"}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-accent">
            <FaEye className="text-2xl"></FaEye>
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
