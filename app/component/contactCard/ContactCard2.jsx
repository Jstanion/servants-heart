import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export const ContactCard2 = () => {
  return (
    <div className="card w-1/3 bg-base-100 shadow-xl">
      <figure className="bg-primary">
        <Image
          className=""
          src="/sample-hs2.png"
          alt="Picture of the CEO / Founder"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body text-secondary">
        <h2 className="card-title">Rebecca Stanion</h2>
        <p>Founder / CEO</p>
        <a href="mailto:rebecca@aservantsheartco.com">
          <AiOutlineMail className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
