import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";
import HeroCommitment from "./component/hero/HeroCommitment";
import SlidingList from "./component/slidingList/SlidingList";

export default function Home() {
  return (
    <main className="grid min-h-screen w-full">
        <SlidingList />
      <div className="m-4">
        <div className="p-4 w-3/4 bg-info">
      
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
