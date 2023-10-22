import React from "react";

const HeroCommitment = () => {
  return (
    <div className="hero min-h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full px-4 absolute object-cover"
      >
        <source src="/fists-in.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-info">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Our Commitment</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCommitment;
