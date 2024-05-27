import React from "react";
import HeroMission from "./component/hero/HeroMission";
import HeroStory from "./component/hero/HeroStory";
import HeroCommitment from "./component/hero/HeroCommitment";
import SlidingList from "./component/slidingList/SlidingList";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <SlidingList className="object-hidden" />
      <div className="pt-4 md:pr-4">
        <div className="p-4 md:w-5/6 bg-info">
          <h1 className="text-white lg:p-4 mb-2 lg:text-4xl text-center border-2 border-white border-opacity-50">
            <span className="font-extralight">Nourishing </span>
            <span className="font-bold">Lives, </span>
            <span className="font-extralight">Empowering </span>
            <span className="font-bold">Communities</span>
          </h1>
          <div className="flex flex-col-reverse lg:flex-row">
            <p className="flex flex-col justify-around bg-white opacity-50 text-neutral p-6 lg:mr-2 lg:w-1/2 lg:text-lg">
              <span className="font-bold text-xl lg:text-5xl">Family</span> We are
              committed to the well-being of every family we serve.
              <br />
              <span className="font-bold text-xl lg:text-5xl">Community</span> We are
              committed to building a stronger, compassionate community.
              <br />
              <span className="font-bold text-xl lg:text-5xl">Faith</span> We are committed
              to faith guiding our values and inspiring others to join in our
              mission.
            </p>
            <HeroCommitment />
          </div>
        </div>

        <div className="p-4 mt-8 md:w-5/6 h-2/3 bg-secondary">
          <div className="flex flex-col lg:flex-row">
            <HeroMission />
            <div className="grid bg-white opacity-50 p-6 lg:ml-2 lg:w-1/3">
              <p className="self-center text-neutral lg:text-xl text-center leading-loose">
                A Servant&apos;s Heart Community Outreach is committed to serve
                the needs of the community while walking in love without
                judgement. It is our mission to feed both the hearts and
                stomachs of those within our community.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 my-6 md:w-5/6 h-2/3 bg-accent">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="grid bg-white opacity-50 p-6 lg:mr-2 lg:w-1/3">
              <p className="self-center text-neutral lg:text-xl text-center leading-loose">
                Support is the heart of our mission. Join us in making a
                positive impact through volunteering and donations. Together, we
                can build a stronger, more compassionate community.
              </p>
            </div>
            <HeroStory />
          </div>
        </div>
      </div>
    </main>
  );
}
