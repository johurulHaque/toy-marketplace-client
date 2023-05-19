import React from 'react';

const TapCard = ({data}) => {
    const {id,name,price,quantity,rating} = data;
    // console.log(data)
    return (
        <div className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{rating}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
    );
};

export default TapCard;