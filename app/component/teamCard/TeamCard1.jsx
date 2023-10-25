import Image from "next/image";
import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export const TeamCard1 = () => {
  return (
    <div className="card card-compact w-1/3 bg-base-100 shadow-2xl">
      <figure className="w-full h-72 bg-accent relative overflow-visible">
        <Image
          className="absolute inset bottom-0"
          src="/sample-hs1.png"
          alt="Picture of the Founder"
          width={250}
          height={200}
        />
      </figure>
      <div className="card-body text-secondary">
        <h2 className="card-title">Gina Perry</h2>
        <p>Founder</p>
        <div className="flex justify-between w-1/5">
          <a href="mailto:gina@aservantsheartco.com">
            <AiOutlineMail className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/gina-perry-951768245/">
            <AiOutlineLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
