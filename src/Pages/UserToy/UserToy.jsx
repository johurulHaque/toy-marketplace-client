import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UserToyTable from './UserToyTable';

const UserToy = () => {
    const { user } = useContext(AuthContext);
    const [userToys,setUserToys] = useState([]);
    const handleDelete = (id)=>{
        const proced = confirm('are delete');
        if(proced){
            fetch(`http://localhost:5000/toy/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('delete successful')
                    const remaing = userToys.filter(toy => toy._id !== id);
                    setUserToys(remaing)
                }
                // console.log(data)
            })
        }
        console.log(id);
    }

    const url = `http://localhost:5000/user-toy?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUserToys(data)
        })
    },[])

    return (
        <div>
            <h1>User Toy</h1>
            <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>    
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
                userToys.map(toy => <UserToyTable key={toy._id} toy={toy} handleDelete={handleDelete}></UserToyTable>)
            }
           
          </tbody>
        </table>
            
        </div>
    );
};

export default UserToy;