import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import "./AddToy.css";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const loadData = useLoaderData();
  const { _id, name, image, price, quantity, subcategory,description } = loadData;
  // console.log(loadData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://toys-house-server.vercel.app/update-toy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          Swal.fire({    
            icon: 'success',
            title: 'Item  update successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/usertoy')
        }
        console.log(result);
      });
  };

  return (
    <div>
      <h1>Update toy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("sellerName", { required: true })}
              type="text"
              value={user?.displayName}
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("email", { required: true })}
              type="email"
              value={user?.email}
            />
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4   mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("image", { required: true })}
              type="url"
              defaultValue={image}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("subcategory", { required: true })}
              type="text"
              defaultValue={subcategory}
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("price", { required: true })}
              type="text"
              defaultValue={price}
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("quantity", { required: true })}
              type="number"
              defaultValue={quantity}
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("description", { required: true })}
              type="text"
              defaultValue={description}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input className="submit-btn" value="Update toy" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
