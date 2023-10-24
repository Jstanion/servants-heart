import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export const ContactCard1 = () => {
  return (
    <div className="card w-1/3 bg-base-100 shadow-xl">
      <figure className="overflow-visible bg-accent inset-5">
        <Image
          className=""
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
