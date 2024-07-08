import React from "react";
import { TeamCard1 } from "../component/teamCard/TeamCard1";
import { TeamCard2 } from "../component/teamCard/TeamCard2";

const Team = () => {
  return (
    <div className="flex w-full h-full my-4 p-4 bg-secondary">
      <div className="flex justify-center items-start w-full">
        <section className="flex flex-col justify-center items-center my-4 w-full">
          <h1 className="self-start text-4xl text-base-100 font-extralight ml-24">
            MEET <span className="text-lg align-middle">THE</span>{" "}
            <span className="font-bold">TEAM</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center w-full my-4">
            <TeamCard1 />
            <TeamCard2 />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
