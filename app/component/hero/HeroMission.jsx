import React from "react";

const HeroMission = () => {
  return (
    <div className="hero h-fit">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover"
      >
        <source src="/heroMission.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-secondary">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Our Mission</h1>
          {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroMission;
