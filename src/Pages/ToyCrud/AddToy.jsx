import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import "./AddToy.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Add Toy");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/add-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Item  added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/usertoy");
        }
      });
  };
  return (
    <div>
      <h1 className="link-a">Add a toy</h1>
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
              placeholder="Enter a toy name"
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("image", { required: true })}
              type="url"
              placeholder="Enter image link"             
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("subcategory", { required: true })}
              type="text"
              placeholder="Enter a subcategory"
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("price", { required: true })}
              type="text"
              placeholder="Enter price"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("quantity", { required: true })}
              type="number"
            />
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("description", { required: true })}
              type="text"
              placeholder="Enter description"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input className="submit-btn" value="Add toy" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
