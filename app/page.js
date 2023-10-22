import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";
import HeroCommitment from "./component/hero/HeroCommitment";
import SlidingList from "./component/slidingList/SlidingList";

export default function Home() {
  return (
    <main>
      <SlidingList />
      {/* <HeroCommitment />
      <HeroMission />
      <HeroStory /> */}
    </main>
  );
}
