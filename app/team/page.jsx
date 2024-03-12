import React from "react";
import { TeamCard1 } from "../component/teamCard/TeamCard1";
import { TeamCard2 } from "../component/teamCard/TeamCard2";

const Team = () => {
  return (
    <div className="flex w-full h-full my-4 p-4 bg-secondary">
      <div className="flex justify-center items-start w-3/5">
        <section className="flex flex-col justify-center items-center my-4 w-4/5">
          <div className="w-full">
            <h1 className="text-4xl text-base-100 font-extralight">
              MEET <span className="text-lg align-middle">THE</span> <span className="font-bold">TEAM</span>
            </h1>
            <div className="w-full h-full">
              <div className="flex flex-wrap justify-evenly items-center w-full h-full my-4">
                <TeamCard1 />
                <TeamCard2 />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
