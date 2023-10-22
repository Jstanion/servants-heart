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
            <p className="flex flex-col justify-around bg-white opacity-50 text-neutral p-6 mr-2 w-1/2 text-lg">
              <span className="font-bold text-xl">Community:</span> We are committed to building a stronger, compassionate
              community.
              <br />
              <span className="font-bold text-xl">Family:</span> We are committed to the well-being of every
              family we serve.
              <br />
              <span className="font-bold text-xl">Faith:</span> We are committed to faith guiding our
              values and inspiring others to join in our mission.
            </p>
            <HeroCommitment />
          </div>
        </div>
        <div className="p-4 mt-8 w-5/6 h-2/3 bg-secondary">
          <div className="flex">
            <HeroMission />
            <div className="grid bg-white opacity-50 p-6 ml-2 w-1/3">
            <p className="self-center text-neutral text-lg text-center leading-loose">
            A Servant&apos;s Heart Community Outreach is committed to serve the needs of the community while walking in love without judgement. It is our mission to feed both the hearts and stomachs of those within our community.
            </p>
            </div>
          </div>
        </div>

        <div className="">
          <HeroStory />
        </div>
      </div>
    </main>
  );
}
