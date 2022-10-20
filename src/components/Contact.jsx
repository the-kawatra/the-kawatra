import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen px-4 sm:px-8 pt-20">
      {/* Container */}
      <div className="max-w-[600px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-4xl inline border-b-4 border-pink-600">Contact</p>
        </div>
        <form
          action="https://formsubmit.co/thekawatra@gmail.com"
          method="POST"
          className="flex flex-col text-gray-800"
        >
          <input
            className="p-2 sm:p-4 border border-gray-300 outline-none rounded bg-gray-200 dark:text-white dark:bg-[#103364] dark:border-[#103364]"
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 sm:p-4 border border-gray-300 outline-none rounded bg-gray-200 dark:text-white dark:bg-[#103364] dark:border-[#103364]"
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
          />
          <textarea
            className="p-2 sm:p-4 border border-gray-300 outline-none rounded bg-gray-200 dark:text-white dark:bg-[#103364] dark:border-[#103364]"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="dark:text-white border-2 border-gray-800 dark:border-white hover:bg-[#ffccac] hover:border-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600 px-4 py-2 my-8 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
