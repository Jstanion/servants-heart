import React from "react";
import { TeamCard1 } from "../component/teamCard/TeamCard1";
import { TeamCard2 } from "../component/teamCard/TeamCard2";

const Team = () => {
  return (
    <div className="bg-secondary w-4/5 my-4 mx-auto">
      <div className="flex flex-col items-start w-full p-6">
        <h1 className="text-4xl text-base-100 text-end font-extralight">
          Our <span className="font-bold">Team</span>
        </h1>
        <div className="flex flex-wrap justify-evenly w-full my-4">
          <TeamCard1 />
          <TeamCard2 />
        </div>
      </div>
    </div>
  );
};

export default Team;
