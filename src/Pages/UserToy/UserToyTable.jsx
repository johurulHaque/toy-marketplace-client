import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserToyTable = ({ toy, handleDelete }) => {
  const { _id, name, price, quantity, subcategory,image } = toy;
  // console.log(toy);


  return (
    <tr>
       <td>
        <img src={image} alt="" className="w-16 h-20" />
      </td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th className="flex gap-3">
        <Link to={`/updatetoy/${_id}`}>
          <FaEdit className="text-2xl text-[#09ccd0]"></FaEdit>
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <FaTrashAlt className="text-2xl text-[#ff6f69] "></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default UserToyTable;
