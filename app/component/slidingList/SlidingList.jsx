import React from "react";

const SlidingList = () => {
  return (
    <div className="sticky top-0 bottom-0">
      <div className="absolute bg-primary right-0 w-1/6 my-4">
        <div className="bg-primary m-2 lg:m-4">
          <ul className="bg-white opacity-50 text-neutral text-center font-bold list-disc list-inside lg:p-2">
            <span className="text-lg lg:text-xl">Current Needs</span>
            <li className="font-normal text-start pl-2 lg:pl-4">Diapers</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Clothing</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Toiletries</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Toys</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Bicycles</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Non-Perishables</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Feminine Products</li>
            <li className="font-normal text-start pl-2 lg:pl-4">Blankets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlidingList;
