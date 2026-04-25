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
  const [submitted, setSubmitted] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
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
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  }

  const contactItems = [
    {
      icon: MapPinIcon,
      label: "Woodstock, Georgia",
      href: null,
    },
    {
      icon: EnvelopeIcon,
      label: "anjukaranji@gmail.com",
      href: "mailto:anjukaranji@gmail.com",
    },
    {
      icon: LinkIcon,
      label: "linkedin.com/in/anju-karanji",
      href: "https://www.linkedin.com/in/anju-karanji",
    },
    {
      icon: LinkIcon,
      label: "github.com/sagi0312",
      href: "https://github.com/sagi0312",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="contact" className="bg-gray-900">
        <div className="container px-10 py-20 mx-auto">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-normal"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Hire Me
            </h2>
          </div>

          <div className="flex sm:flex-nowrap flex-wrap gap-10">
            {/* Left — map + contact info */}
            <div className="lg:w-2/3 md:w-1/2 w-full rounded-xl overflow-hidden relative min-h-80">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                style={{ filter: "opacity(0.4) grayscale(0.3)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Woodstock+Georgia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 p-6 border-t border-gray-800">
                <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">
                  Find me at
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactItems.map(({ icon: Icon, label, href }) => (
                    <li key={label} className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 shrink-0 text-green-400" />
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="text-gray-400 hover:text-green-400 text-sm transition-colors break-all"
                        >
                          {label}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">{label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:w-1/3 md:w-1/2 w-full">
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-10">
                  <span className="text-green-400 text-3xl mb-4">✓</span>
                  <h3
                    className="text-2xl font-normal mb-3"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "#e8e3d5",
                    }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  data-netlify="true"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <p className="text-gray-400 leading-relaxed text-sm">
                    I'm a self-starter, meticulous, and a quick learner with
                    experience working closely with clients. Let's talk.
                  </p>

                  {[
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      value: name,
                      setter: setName,
                      autoComplete: "name",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      value: email,
                      setter: setEmail,
                      autoComplete: "email",
                    },
                  ].map(({ id, label, type, value, setter, autoComplete }) => (
                    <div key={id} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={id}
                        className="text-xs font-semibold tracking-widest uppercase text-gray-500"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        autoComplete={autoComplete}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 text-sm outline-none text-gray-100 py-2.5 px-3.5 transition-colors"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold tracking-widest uppercase text-gray-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 text-sm outline-none text-gray-100 py-2.5 px-3.5 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start bg-green-400 text-gray-900 font-semibold text-sm py-2.5 px-7 rounded-lg hover:bg-green-300 transition-colors focus:outline-none"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
