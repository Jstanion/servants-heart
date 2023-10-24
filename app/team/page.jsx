import React from "react";
import { ContactCard1 } from "../component/contactCard/ContactCard1";
import { ContactCard2 } from "../component/contactCard/ContactCard2";


const Team = () => {
  return (
    // <div className="flex flex-col items-center bg-secondary my-4">
      <div className="bg-secondary w-full my-4">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-4xl text-base-100 mt-8 text-end ml-8">Our Team</h1>
        <div className="flex flex-wrap justify-evenly w-full my-4">
          <ContactCard1 />
          <ContactCard2 />
        </div>
        </div>
      </div>
    // </div>
  );
};

export default Team;
