import { useState } from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map + Contact Info */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.65)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Woodstock+Georgia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900/95 relative rounded-xl shadow-md p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-white/80">
              <li className="flex items-center gap-2 px-1 py-1 text-white/90">
                <MapPinIcon className="h-5 w-5 shrink-0 text-indigo-400" />
                <span>Woodstock, Georgia</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
                <a
                  href="mailto:anjukaranji@gmail.com"
                  className="text-indigo-200 hover:text-indigo-400"
                >
                  anjukaranji@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <LinkIcon className="h-5 w-5 text-indigo-400" />
                <a
                  href="https://www.linkedin.com/in/anju-karanji"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-200 hover:text-indigo-400"
                >
                  linkedin.com/in/anju-karanji
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <LinkIcon className="h-5 w-5 text-indigo-400" />
                <a
                  href="https://github.com/sagi0312"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-200 hover:text-indigo-400"
                >
                  github.com/sagi0312
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          data-netlify="true"
          method="POST"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I'm a self-starter, meticulous, a quick learner with experience
            interacting with clients.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
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
              autoComplete="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
