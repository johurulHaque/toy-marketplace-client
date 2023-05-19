import React from 'react';
import { Link } from 'react-router-dom';

const UserToyTable = ({toy}) => {
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
          <Link to={`/toy/${_id}`}>
          <button className="btn btn-ghost btn-xs" >view details</button>
          
          </Link>
        </th>
      </tr>
    );
};

export default UserToyTable;