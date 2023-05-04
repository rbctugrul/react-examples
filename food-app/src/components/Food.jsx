import React from "react";
import { data } from "../data/data";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center" >Top Rated Menu Item</h1>

      {/** Filter Row */}
      <div className="flex flex-col  lg:flex-row justify-between">
        {/**Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div>
            <button>All</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chickens</button>
          </div>
        </div>

        {/** Filter Price */}
        <div>
          <p>Filter Price</p>
          <div>
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
