import React from "react";
import { ContactCard1 } from "../component/contactCard/ContactCard1";
import { ContactCard2 } from "../component/contactCard/ContactCard2";

const Team = () => {
  return (
    <div className="bg-secondary w-4/5 my-4 mx-auto">
      <div className="flex flex-col items-start w-full p-6">
        <h1 className="text-4xl text-base-100 text-end">Our Team</h1>
        <div className="flex flex-wrap justify-evenly w-full my-4">
          <ContactCard1 />
          <ContactCard2 />
        </div>
      </div>
    </div>
  );
};

export default Team;
