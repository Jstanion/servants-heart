import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export const ContactCard1 = () => {
  return (
    <div className="card w-1/4 h-1/4 bg-base-100 shadow-2xl">
      <figure className="w-full h-80 bg-accent relative overflow-visible">
        <Image
          className="absolute inset bottom-0"
          src="/sample-hs1.png"
          alt="Picture of the Founder"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body text-secondary">
        <h2 className="card-title">Gina Perry</h2>
        <p>Founder</p>
        <a href="mailto:gina@aservantsheartco.com">
          <AiOutlineMail className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
