import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h2 className="text-3xl font-bold link-a">All toys</h2>
      <div className="overflow-x-auto w-full">
        <table className="table  table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>    
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                toys?.map(toy => <ToysRow key={toy._id} toy={toy}></ToysRow>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
