"use client";

import React, { useState } from "react";

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dropdownSelection, setDropdownSelection] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "af4c5bf1-7b35-48ad-a872-8ce8d3802deb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Your email was sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
      setDropdownSelection("");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="form-control w-full"
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col mb-4 w-2/5">
          <label htmlFor="name" className="label">
            <span className="label-text text-neutral font-light">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            placeholder="Name"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light mr-2"
          />
        </div>
        <div className="flex flex-col mb-4 w-2/5">
          <label htmlFor="email" className="label">
            <span className="label-text text-neutral font-light">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="example@domain.com"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="subject" className="label">
          <span className="label-text text-neutral font-light">Subject</span>
        </label>
        <select
          value={dropdownSelection}
          onChange={(e) => setDropdownSelection(e.target.value)}
          className="select select-bordered select-sm w-full text-neutral font-light bg-white"
        >
          <option className="font-light">Select one...</option>
          <option className="font-light">General Information</option>
          <option className="font-light">Sponsor a Family</option>
          <option className="font-light">Volunteer Opportunities</option>
          <option className="font-light">Donations</option>
        </select>
        <input
          type="hidden"
          name="subject"
          value={`New form submission from A Servant's Heart Website: ${dropdownSelection}`}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="label">
          <span className="label-text text-neutral font-light">
            Comment or Message
          </span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
          placeholder="Type your message"
          className="textarea textarea-bordered h-24 bg-white text-neutral font-light"
        ></textarea>
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline hover:bg-opacity-40 w-1/3"
      />
    </form>
  );
}
