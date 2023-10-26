import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-neutral font-light">Name</span>
        </label>
        <div className="flex justify-between w-full">
          <input
            type="text"
            placeholder="First"
            className="input input-bordered input-sm w-full max-w-xs bg-white"
          />
          <input
            type="text"
            placeholder="Last"
            className="input input-bordered input-sm w-full max-w-xs bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
