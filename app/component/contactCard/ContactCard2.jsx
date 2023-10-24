import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export const ContactCard2 = () => {
  return (
    <div className="card w-1/4 h-1/4 bg-base-100 shadow-2xl">
      <figure className="w-full h-80 relative overflow-visible bg-primary">
        <Image
          className="absolute inset bottom-0"
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
