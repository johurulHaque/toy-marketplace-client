import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UserToyTable from "./UserToyTable";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const UserToy = () => {
  useTitle('My Toy')
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item has been deleted successfully.", "success");
              const remaing = userToys.filter((toy) => toy._id !== id);
              setUserToys(remaing);
            }
            // console.log(data)
          });
      }
    });

    // if(proced){
    //     fetch(`http://localhost:5000/toy/${id}`,{
    //         method:"DELETE"
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.deletedCount > 0){
    //             alert('delete successful')
    //             const remaing = userToys.filter(toy => toy._id !== id);
    //             setUserToys(remaing)
    //         }
    //         // console.log(data)
    //     })
    // }
    console.log(id);
  };

  const url = `http://localhost:5000/user-toy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserToys(data);
      });
  }, []);

  return (
    <div>
      <h1>User Toy</h1>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userToys.map((toy) => (
            <UserToyTable
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></UserToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserToy;
