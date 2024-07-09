import React from "react";
import Image from "next/image";

const Donate = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full my-4 p-4 bg-primary">
      <div className="flex justify-center items-start lg:w-3/5">
        <section className="flex flex-col justify-center items-center my-4 lg:w-4/5">
          <div className="w-full">
            <h1 className="text-4xl text-start font-extralight">
              YOUR <span className="font-bold">DONATIONS</span>
            </h1>
          </div>
          <p className="my-4 text-lg">
            When you choose to contribute to A Servant&apos;s Heart, your
            donation becomes a catalyst for positive change within our beloved
            community. Every dollar you generously offer plays a crucial role in
            supporting our mission to provide essential assistance to those in
            need throughout Lancaster county.
          </p>
          <p className="my-4 text-lg">
            Your financial contribution directly fuels our efforts to ensure
            every home has food on their table. The funds are strategically
            allocated to sourcing nutritious food items and addressing immediate
            needs in collaboration with local partners. Additionally, your
            generosity empowers us to extend a helping hand to families facing
            unforeseen circumstances, offering them a lifeline during
            challenging times.
          </p>
          <p className="my-4 text-lg">
            Moreover, your donations are instrumental in expanding our outreach
            initiatives. Whether it&apos;s reaching out to refugee families,
            supporting victims of domestic violence, or assisting those
            navigating financial hardships, your support enables us to broaden
            our impact and make a meaningful difference in the lives of our
            neighbors.
          </p>
          <p className="my-4 text-lg">
            Transparency is paramount to us, and we are committed to providing
            detailed insights into how your donations are utilized. Our
            financial accountability ensures that your contribution goes
            directly to the heart of the community, fostering a culture of
            compassion, unity, and shared responsibility.
          </p>
          <p className="my-4 text-lg">
            By choosing to donate to A Servant&apos;s Heart, you become an
            integral part of a community-driven movement, contributing to the
            well-being of those who need it most. Your generosity transforms
            lives, one donation at a time, creating a ripple effect of positive
            change throughout Lancaster county. Together, we can build a
            stronger, more resilient community for everyone to thrive.
          </p>
        </section>
      </div>
      <div className="flex justify-center lg:w-3/5 h-fit lg:my-4">
        <div className="flex justify-center lg:justify-evenly items-center flex-wrap lg:w-4/5 p-1 border-white border-2">
          <a href="https://www.paypal.com/">
            <Image
              src="/paypal.png"
              alt="Food donations on table"
              width={100}
              height={200}
              className="h-fit m-4"
            />
          </a>
          <a href="https://www.stripe.com/">
            <Image
              src="/stripe.png"
              alt="Food donations on table"
              width={100}
              height={200}
              className="h-fit m-4"
            />
          </a>
          <a href="https://www.square.com/">
            <Image
              src="/square.png"
              alt="Food donations on table"
              width={100}
              height={200}
              className="h-fit m-4"
            />
          </a>
          <p className="my-4 text-center text-lg">
            Donations by check can be made payable to <span className="font-bold">A Servant&apos;s Heart</span> and
            mailed to:
          </p>
          <p className="w-full text-3xl text-center">
            PO Box 5342
            <br />
            Lancaster, PA 17606
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
