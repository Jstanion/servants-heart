import Image from "next/image";
import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export const TeamCard2 = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-2xl m-10">
      <figure className="h-72 p-36 relative overflow-visible bg-primary">
        <Image
          className="absolute inset bottom-0 rounded-t-xl"
          src="/rebecca.png"
          alt="Picture of the CEO / Founder"
          width={250}
          height={200}
        />
      </figure>
      <div className="card-body text-secondary">
        <h2 className="card-title">Rebecca Stanion</h2>
        <p>Founder / CEO</p>
        <div className="flex justify-between w-1/5">
          <a href="mailto:rebecca@aservantsheartco.com">
            <AiOutlineMail className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/rebecca-stanion-4b714b16a/">
            <AiOutlineLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
