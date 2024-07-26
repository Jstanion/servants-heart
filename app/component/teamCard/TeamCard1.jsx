import Image from "next/image";
import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export const TeamCard1 = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-2xl m-10">
      <figure className="h-72 p-36 relative overflow-visible bg-accent">
        <Image
          className="absolute inset bottom-0 rounded-t-xl"
          src="/gina.jpeg"
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
