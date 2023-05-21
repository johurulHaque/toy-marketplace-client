import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ClientTalk = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Celebrating a Joyful Toy Marketplace!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>I couldn't
            wait to express my sheer delight and appreciation for the incredible
            experience I've had shopping on your toy marketplace. From the very
            first moment I landed on your platform, I knew I had found something
            special.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Most incredible toy places in here!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>
            Your curated selection of toys is nothing short of extraordinary.
            From the hottest brands to hidden treasures, you have carefully
            crafted a collection that sparks curiosity and wonder in children of
            all ages.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Place to choose joyful for kids!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>
            What truly sets you apart is your unwavering commitment to quality
            and safety. As a parent, it brings me immense peace of mind to know
            that each toy undergoes rigorous testing to meet the highest
            standards. I can confidently choose toys that not only bring joy but
            also prioritize the well-being of my children.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientTalk;
