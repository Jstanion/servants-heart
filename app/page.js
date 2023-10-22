import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";

export default function Home() {
  return (
    <main>
      <HeroMission />
      <HeroStory />
    </main>
  );
}
