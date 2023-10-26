import React from "react";
import ContactForm from "../component/contactForm/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex w-full my-4 p-4 bg-accent">
      <div className="flex justify-center w-full">
        <section className="flex flex-col justify-center items-center my-4 w-4/5">
          <div className="w-full">
            <h1 className="text-4xl text-neutral text-start font-extralight">
              CONTACT <span className="font-bold">US</span>
            </h1>
          </div>
          <p className="my-4 text-sm">
            Thank you for your interest. Our mission is to provide support to
            the community of Lancaster County. Let us know a little more about
            you, or feel free to browse our website to learn more about what we
            do, and how you might be able to join the outreach!
          </p>
          <select className="select select-bordered select-sm w-full text-neutral font-light bg-white">
            <option className="font-light">Select one...</option>
            <option className="font-light">General Information</option>
            <option className="font-light">Project/Partnership</option>
            <option className="font-light">Volunteer</option>
            <option className="font-light">Donations</option>
          </select>
          <p className="my-4 text-sm">
            Not finding what you’re looking for on our website? Please complete
            the form below. We carefully review all submissions, although we may
            not be able to provide an immediate response. We kindly request your
            patience as we aim to personally address each one.
          </p>
          <ContactForm />
        </section>
      </div>
      <div className="grid grid-cols-2 gap-2 w-1/2">
        <div className="grid gap-2">
          <Image
            src="/contactW2.jpg"
            alt="Food donations on table"
            width={500}
            height={500}
            className=""
          />
          <Image
            src="/contactL2.jpg"
            alt="Food donations on table"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="grid gap-2">
          <Image
            src="/contactL1.jpg"
            alt="Food donations on table"
            width={500}
            height={500}
            className=""
          />
          <Image
            src="/contactW1.jpg"
            alt="Donation items on table"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
