import { Link } from "react-router-dom";
import img1 from "../../assets/images/banner/img1.jpeg";
import img2 from "../../assets/images/banner/img2.jpeg";
import img3 from "../../assets/images/banner/img3.png";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-lg"
        />
        <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
          <div className="text-white space-y-7 w-1/2 pl-12 ">
            <h2 className="text-4xl md:text-6xl  font-bold">
            Collect the Ultimate Avengers Toy Collection!
            </h2>
            <p>
            Budget-Friendly Avengers Collectibles and Accessories.Super Savings on Avengers Toys - Shop Now and Save.
            </p>
            <div className="flex ">
              <Link to="/alltoys">
                <button className="bg-[#09ccd0] btn  mr-5">
                  Explore More
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-info">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="bg-[#09ccd0]  btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="bg-[#09ccd0] btn   btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-lg"
        />
        <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
          <div className="text-white space-y-7 w-1/2 pl-12 ">
            <h2 className="text-4xl md:text-6xl font-bold">
            Get Ready for Adventure with Avengers Toys and Accessories!
            </h2>
            <p>
            Amazing Deals on Avengers Action Figures and Memorabilia.Competitive Prices on the Widest Range of Avengers Toys.
            </p>
            <div className="flex">
              <Link to="/alltoys">
                <button className="bg-[#09ccd0] btn  mr-5">
                  Explore More
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-info">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="bg-[#09ccd0]  btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="bg-[#09ccd0]  btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-lg"
        />
        <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
          <div className="text-white space-y-7 w-1/2 pl-12 ">
            <h2 className="text-4xl md:text-6xl font-bold">
            Power Up Your Playtime with Avengers Action Figures!
            </h2>
            <p>
            Value for Money: High-Quality Avengers Toys at Great Prices.Price Drop Alert: Don't Miss Out on Avengers Toys Bargains.
            </p>
            <div className="flex ">
              <Link to="/alltoys">
                <button className="bg-[#09ccd0] btn  mr-5">
                  Explore More
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-info">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="bg-[#09ccd0]  btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="bg-[#09ccd0]  btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
