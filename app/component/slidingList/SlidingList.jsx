import React from "react";
import Image from "next/image";
const SlidingList = () => {
  return (
    <div className="bg-primary m-2 lg:m-4">
      <ul className="bg-white opacity-50 text-neutral text-center font-bold list-disc list-inside lg:p-2">
        <span className="text-3xl">Current Needs</span>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Diapers
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Clothing
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Toiletries
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">Toys</li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Bicycles
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Non-Perishables
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          Blankets
        </li>
        <li className="font-normal text-2xl text-start pl-2 lg:pl-4">
          School Supplies
        </li>
      </ul>
      <div className="border-2 border-white border-opacity-50 mt-4 px-1">
        <p className="my-4 text-center text-normal">
          Monetary donations can be made payable to{" "}
          <span className="font-bold">A Servant&apos;s Heart</span>.<br></br>
          We also accept gift cards!<br></br>Please mail to:
        </p>
        <p className="w-full text-xl text-center">
          PO Box 5342
          <br />
          Lancaster, PA 17606
        </p>
        <div className="flex justify-center w-full">
          <a href="https://www.paypal.com/">
            <Image
              src="/paypal.png"
              alt="Food donations on table"
              width={70}
              height={100}
              className="h-fit m-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlidingList;
