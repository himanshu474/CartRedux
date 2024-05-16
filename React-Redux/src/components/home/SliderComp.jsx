import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-6 bg-gray-100 p-6 px-4">
      <Slider {...settings}>
        <div className="!flex items-center justify-center px-4">
          <div>
            <h1 className="text-4xl font-bold py-8">The Best Quality Shoes Are Here</h1>
            <p>
            The Puma logo is among the most iconic symbols in the world of sports apparel and footwear.
                     From a simple design to its current outstanding design, the logo has lured audiences and helped the
                     brand establish a solid footprint in the global market. 
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">Review</button>
          </div>
          <img
            src="https://productimages.hepsiburada.net/s/253/550/110000235647723.jpg/format:webp"
            alt=""
          />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">The Best Quality Shoes Are Here</h1>
            <p>
            The Puma logo is among the most iconic symbols in the world of sports apparel and footwear.
                     From a simple design to its current outstanding design, the logo has lured audiences and helped the
                     brand establish a solid footprint in the global market. 
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">Review</button>

          </div>
          <img
            src="https://productimages.hepsiburada.net/s/118/550/110000067634684.jpg/format:webp"
            alt=""
          />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">The Best Quality Shoes Are Here</h1>
            <p>
            The Puma logo is among the most iconic symbols in the world of sports apparel and footwear.
                     From a simple design to its current outstanding design, the logo has lured audiences and helped the
                     brand establish a solid footprint in the global market. 
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">Review</button>

          </div>
          <img
            src="https://productimages.hepsiburada.net/s/431/550/110000463260211.jpg/format:webp"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;