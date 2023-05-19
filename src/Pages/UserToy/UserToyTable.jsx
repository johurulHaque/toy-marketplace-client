import React from 'react';
import { Link } from 'react-router-dom';

const UserToyTable = ({toy,handleDelete}) => {
    const {_id,name,price,quantity,subcategory} = toy;
    console.log(toy)

   
    return (
        <tr>      
        <td>{toy?.sellerName ? toy.sellerName :"no seller"}</td>
        <td>{name}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/updatetoy/${_id}`}>
          <button className="btn btn-ghost btn-xs" >Update</button>          
          </Link>
          <button onClick={()=>handleDelete(_id)}>Delete</button>
        </th>
      </tr>
    );
};

export default UserToyTable;