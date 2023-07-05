import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
    <div className="flex justify-center">
      <form
        name="contact"
        className="flex flex-col w-50">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Contact
        </h2>
        <p className="leading-relaxed mb-5">
        On my contact page, I provide a convenient way for you to get in touch with me. Whether you have a project idea, a question, or simply want to say hello, I'm always ready to listen and collaborate. 
        Feel free to fill out the contact form with your name, email address, and message, and I'll make sure to respond promptly.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-200"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:brightness-200"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  </section>
  );
}
