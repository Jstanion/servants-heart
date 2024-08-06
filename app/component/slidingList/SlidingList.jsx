import React from "react";
import Image from "next/image";
const SlidingList = () => {
  return (
    <div className="bg-primary m-2 lg:m-4">
      <ul className="bg-white opacity-50 text-neutral text-center font-bold list-disc list-inside lg:p-2">
        <span className="text-2xl">Current Needs</span>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">Diapers</li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          Clothing
        </li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          Toiletries
        </li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">Toys</li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          Bicycles
        </li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          Non-Perishables
        </li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          Blankets
        </li>
        <li className="font-normal text-lg text-start pl-2 lg:pl-4">
          School Supplies
        </li>
      </ul>
      <div className="border-2 border-white border-opacity-50 mt-4 px-1">
        <div className="flex justify-center w-full my-4">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="735UPRYZELUHU"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
        <p className="my-4 text-center text-normal">
          Monetary donations can be made payable to{" "}
          <span className="font-bold">A Servant&apos;s Heart</span>.<br></br>
          Please mail to:
        </p>
        <p className="my-4 w-full text-xl text-center">
          PO Box 5342
          <br />
          Lancaster, PA 17606
        </p>
        <p className="my-4 text-xl text-center text-normal">
          We also accept gift cards!
        </p>
      </div>
    </div>
  );
};

export default SlidingList;
