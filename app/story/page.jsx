import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="flex w-full h-full my-4 p-4 bg-info">
      <div className="flex justify-center items-start w-3/5">
        <section className="flex flex-col justify-center items-center my-4 w-4/5">
          <div className="w-full">
            <h1 className="text-4xl text-start font-extralight">
              OUR <span className="font-bold">STORY</span>
            </h1>
          </div>
          <p className="my-4 text-lg">
            At the heart of our community beats a spirit of selflessness, where
            neighbors extend a helping hand without expecting anything in return
            – a true embodiment of what we fondly call a &apos;servant&apos;s
            heart.&apos; It&apos;s about coming together to uplift one another,
            driven by gratitude for the blessings we&apos;ve received. This
            essence lies at the core of A Servant&apos;s Heart, a community
            initiative crafted by two friends with a simple yet powerful
            mission: to serve Lancaster with love and understanding, leaving
            judgment at the door.
          </p>
          <p className="my-4 text-lg">
            In our close-knit community, we&apos;ve all felt the impact of unmet
            needs. Rebecca and Gina, the dynamic duo behind A Servant&apos;s
            Heart, saw an opportunity to make a difference when they learned
            about the pressing need for food within our neighborhoods. Being a
            grassroots, self-funded endeavor, they took the first steps by
            reaching out to families and local organizations that could use a
            little extra support.
          </p>
          <p className="my-4 text-lg">
            Rebecca, with the support of friends and family, kicked off
            collections of clothing, toys, and household items. Their focus was
            clear – helping out refugee families, victims of domestic violence,
            and those facing financial struggles due to unexpected challenges.
          </p>
          <p className="my-4 text-lg">
            A Servant&apos;s Heart relies on the heartwarming generosity of our
            community. Gently used and new items, along with monetary donations,
            form the lifeblood that sustains our mission to provide nourishment
            and support to fellow Lancaster residents.
          </p>
          <p className="my-4 text-lg">
            But it&apos;s not just about the tangible goods; it&apos;s about
            offering a helping hand and heartfelt prayers. If you or someone you
            know needs food or a moment of prayer, we&apos;re here with open
            arms and no judgments.
          </p>
          <p className="my-4 text-lg">
            If the spirit of community service resonates with you, we warmly
            invite you to join us. Whether through donations or volunteering
            your time, your involvement will fortify our shared commitment to
            building a stronger, more compassionate community. Together, we can
            make a difference, one act of kindness at a time.
          </p>
        </section>
      </div>
      <div className="flex flex-col justify-center items-center h-fit my-4 mr-24">
          <Image 
            src="/story1.jpg"
            alt="Food donations on table"
            width={400}
            height={400}
            className="w-fit p-1"
          />
          <div className="flex justify-between w-full my-4">
          <Image 
          src="/story2.jpg"
          alt="Food donations on table"
          width={100}
          height={400}
          className="w-fit p-1"
          />
          <Image 
          src="/story3.jpg"
          alt="Food donations on table"
          width={100}
          height={400}
          className="w-fit p-1"
          />
          <Image 
          src="/story4.jpg"
          alt="Food donations on table"
          width={100}
          height={400}
          className="w-fit p-1"
          />
          <Image 
          src="/story5.jpg"
          alt="Food donations on table"
          width={100}
          height={400}
          className="w-fit p-1"
          />
          </div>
          <Image 
            src="/story6.jpg"
            alt="Food donations on table"
            width={400}
            height={400}
            className="w-fit p-1"
          />
      </div>
    </div>
  );
};

export default OurStory;
