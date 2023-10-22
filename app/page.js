import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";
import HeroCommitment from "./component/hero/HeroCommitment";
import SlidingList from "./component/slidingList/SlidingList";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <SlidingList />
      <div className="pt-4 pr-4">
        <div className="p-4 w-5/6 bg-info">
          <p className="bg-white opacity-50 text-neutral p-4 mb-2 text-4xl text-center">
            Nourishing Lives, Empowering Communities
          </p>
          <div className="flex">
            <p className="bg-white opacity-50 text-neutral p-4 mr-2 w-1/2 text-base text-center">
              Community: We are committed to building a stronger, compassionate
              community. Family: We are committed to the well-being of every
              family we serve. Faith: We are committed to faith guiding our
              values and inspiring others to join in our mission.
            </p>
            <HeroCommitment />
          </div>
        </div>
        <div className="">
          <HeroMission />
        </div>
        <div className="">
          <HeroStory />
        </div>
      </div>
    </main>
  );
}
