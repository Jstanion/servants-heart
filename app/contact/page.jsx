import React from "react";
import ContactForm from "../component/contactForm/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex w-full h-full my-4 p-4 bg-accent">
      <div className="flex justify-center items-start w-3/5">
        <section className="flex flex-col justify-center items-center my-4 w-4/5">
          <div className="w-full">
            <h1 className="text-4xl text-start font-extralight">
              CONTACT <span className="font-bold">US</span>
            </h1>
          </div>
          <p className="my-4 text-sm">
            Thank you for your interest. Our mission is to provide support to
            the community of Lancaster County. Let us know a little more about
            you, or feel free to browse our website to learn more about what we
            do, and how you might be able to join the outreach!
          </p>
          <p className="my-4 text-sm">
            Not finding what you&apos;re looking for on our website? Please
            complete the form below. We carefully review all submissions,
            although we may not be able to provide an immediate response. We
            kindly request your patience as we aim to personally address each
            one.
          </p>
          <ContactForm />
        </section>
      </div>
      <div className="flex flex-wrap justify-center items-start w-2/5 h-fit mt-4">
        <div className="flex flex-col flex-wrap">
          <Image
            src="/contactW2.jpg"
            alt="Food donations on table"
            width={250}
            height={250}
            className="h-fit p-1"
          />
          <Image
            src="/contactL2.jpg"
            alt="Food donations on table"
            width={250}
            height={250}
            className="p-1"
          />
        </div>
        <div className="flex flex-col flex-wrap">
          <Image
            src="/contactL1.jpg"
            alt="Food donations on table"
            width={250}
            height={250}
            className="p-1"
            priority
          />
          <Image
            src="/contactW1.jpg"
            alt="Donation items on table"
            width={250}
            height={250}
            className="h-fit p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
