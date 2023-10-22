import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";
import HeroCommitment from "./component/hero/HeroCommitment";
import SlidingList from "./component/slidingList/SlidingList";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <SlidingList />
      <div className="p-4">
        <div className="p-4 w-3/4 bg-info">
          <p className="bg-white opacity-50 text-neutral p-4 mb-2 text-4xl text-center">
            Nourishing Lives, Empowering Communities
          </p>
          <HeroCommitment />
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
