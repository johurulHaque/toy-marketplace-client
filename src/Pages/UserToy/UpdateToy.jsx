import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
// import "./AddToy.css";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const loadData = useLoaderData();
  const { _id, name, image, price, quantity, subcategory } = loadData;
  console.log(loadData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/update-toy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
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

        {/* <input
          className="text-input"
          {...register("sellerName", { required: true })}
          type="text"
          value={user?.displayName}
        />{" "}
        <br />
        <input
          className="text-input"
          value={user?.email}
          {...register("email", { required: true })}
          type="email"
        />{" "}
        <br /> */}

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
        {/* <input
          className="text-input"
          {...register("name", { required: true })}
          type="text"
          defaultValue={name}
        />
        <br />
        <input
          className="text-input"
          {...register("image")}
          type="url"
          //   placeholder="image link"
          defaultValue={image}
        />{" "}
        <br /> */}

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

        {/* <input
          className="text-input"
          {...register("subcategory", { required: true })}
          type="text"
          defaultValue={subcategory}
        />{" "}
        <br />
        <input
          className="text-input"
          {...register("price", { required: true })}
          type="text"
          defaultValue={price}
        />{" "}
        <br /> */}
        {/* <input
          className="text-input"
          {...register("quantity", { required: true })}
          type="number"
          defaultValue={quantity}
          />{" "}
        <br /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
          <div className="form-control">
            <input
              className="input input-bordered"
              {...register("quantity", { required: true })}
              type="number"
              defaultValue={quantity}
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

export default UpdateToy;
