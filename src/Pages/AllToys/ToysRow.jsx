import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({toy}) => {

const {id,name,price,quantity,subcategory} = toy;

    console.log(toy)
  return (
    <tr>      
      <td>{toy?.seller ? seller :"no seller"}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${id}`}>
        <button className="btn btn-ghost btn-xs" >details</button>
        
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
