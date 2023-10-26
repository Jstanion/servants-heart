import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center w-full">
      <section className="flex flex-col justify-center items-center w-4/5 h-full">
        <div className="w-full">
          <h1 className="text-4xl text-neutral text-start font-extralight">
            CONTACT <span className="font-bold">US</span>
          </h1>
        </div>
        <p className="my-8 text-sm">
          Thank you for your interest. Our mission is to provide support to the community of Lancaster County. Let us know a little more about you, or feel free to browse our
          website to learn more about what we do, and how you might be able to
          join the outreach!
        </p>
        <select className="select select-bordered select-sm w-full text-neutral bg-white">
          <option>Select one...</option>
          <option>General Information</option>
          <option>Project/Partnership</option>
          <option>Volunteer</option>
          <option>Donations</option>
        </select>
        <p className="my-8 text-sm">
        Not finding what you’re looking for on our website? Please complete the form below. We carefully review all submissions, although we may not be able to provide an immediate response. We kindly request your patience as we aim to personally address each one.
        </p>
      </section>
    </div>
  );
};

export default ContactForm;
