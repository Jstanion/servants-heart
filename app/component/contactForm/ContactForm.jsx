"use client";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "4e413620-682a-4b6a-9949-d049c67ce596");

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
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-control w-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-col mb-4 w-2/5">
          <label htmlFor="name" className="label">
            <span className="label-text text-neutral font-light">Name</span>
          </label>
          <input
            type="text"
            name="name"
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
            placeholder="example@domain.com"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="label">
          <span className="label-text text-neutral font-light">
            Comment or Message
          </span>
        </label>
        <textarea
          name="message"
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
// import React from "react";
// import { useForm } from "react-hook-form";
// import { sendEmail } from "../../utils/sendEmail";

// const formData = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   message: "",
// };

// export default function ContactForm() {
//   const { register, handleSubmit, errors } = useForm(formData);

//   function onSubmit(formData) {
//     sendEmail(formData);
//     console.log(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full">
//       <div className="flex flex-col mb-4">
//         <label htmlFor="firstName" className="label">
//           <span className="label-text text-neutral font-light">Name</span>
//         </label>
//         <div className="flex justify-between">
//           <input
//             type="text"
//             placeholder="First"
//             className="input input-bordered input-sm w-full bg-white text-neutral font-light mr-2"
//             {...register("firstName", { required: true })}
//           />
//           <label htmlFor="lastName" className="label"></label>
//           <input
//             type="text"
//             placeholder="Last"
//             className="input input-bordered input-sm w-full bg-white text-neutral font-light ml-2"
//             {...register("lastName", { required: true })}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col mb-4">
//         <label htmlFor="email" className="label">
//           <span className="label-text text-neutral font-light">Email</span>
//         </label>
//         <input
//           type="email"
//           placeholder="example@domain.com"
//           className="input input-bordered input-sm w-full bg-white text-neutral font-light"
//           {...register("email", { required: true })}
//         />
//       </div>
//       <div className="flex flex-col mb-4">
//         <label htmlFor="message" className="label">
//           <span className="label-text text-neutral font-light">
//             Comment or Message
//           </span>
//         </label>
//         <textarea
//           placeholder="Type your message"
//           className="textarea textarea-bordered h-24 bg-white text-neutral font-light"
//           {...register("message", { required: true })}
//         ></textarea>
//       </div>
//       <input
//         type="submit"
//         value="Submit"
//         className="btn btn-outline hover:bg-opacity-40 w-1/3"
//       />
//     </form>
//   );
// }
