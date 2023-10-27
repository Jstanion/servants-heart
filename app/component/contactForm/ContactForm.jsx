"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="form-control w-full">
      <div className="flex flex-col mb-4">
        <label className="label">
          <span className="label-text text-neutral font-light">Name</span>
        </label>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="First"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light mr-2"
          />
          <input
            type="text"
            placeholder="Last"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light ml-2"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label className="label">
          <span className="label-text text-neutral font-light">Email</span>
        </label>
        <input
          type="text"
          placeholder=""
          className="input input-bordered input-sm w-full bg-white text-neutral font-light"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="label">
          <span className="label-text text-neutral font-light">
            Comment or Message
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24 bg-white text-neutral font-light"
          placeholder=""
        ></textarea>
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline hover:bg-opacity-40 w-1/3"
      />
    </div>
  );
};

export default ContactForm;
