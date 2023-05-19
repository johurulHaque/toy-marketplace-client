import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import "./AddToy.css";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
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
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h1>Add a toy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="text-input"
          {...register("name", { required: true })}
          placeholder="Enter a toy name"
          type="text"
          //   defaultValue="Web developer"
        />
        <br />
        <input
          className="text-input"
          {...register("image")}
          type="url"
        //   placeholder="image link"
            defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
        />{" "}
        <br />
        <input
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
        <br />
        <input
          className="text-input"         
          {...register("subcategory", { required: true })}
          type="text"
          placeholder="Enter a subcategory name"
        />{" "}
        <br />
        <input
          className="text-input"         
          {...register("price", { required: true })}
          type="text"
          placeholder="Enter a price"
        />{" "}
        <br />
        <input
          className="text-input"         
          {...register("quantity", { required: true })}
          type="number"
          placeholder="Enter a quantity "
        />{" "}
        <br />


       
        <input className="submit-btn" value="Post Job" type="submit" />
      </form>
    </div>
  );
};

export default AddToy;
