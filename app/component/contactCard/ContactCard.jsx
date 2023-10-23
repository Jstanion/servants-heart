import Image from "next/image";
import React from "react";

export const ContactCard = () => {
  return (
    <div className="bg-secondary my-4">
      <div className="card w-96 glass">
        <figure>
          <Image
            src="/rebecca.jpg"
            alt="Picture of the CEO / Founder"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">Rebecca Stanion</h2>
          <p>CEO / Founder</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
