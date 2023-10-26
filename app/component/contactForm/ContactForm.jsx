import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white opacity-50 w-full">
      <section>
        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            Small
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </section>
    </div>
  );
};

export default ContactForm;
