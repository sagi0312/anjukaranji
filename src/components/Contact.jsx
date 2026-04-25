import { useState } from "react";

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

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="contact" className="bg-gray-900">
        <div className="container px-10 py-20 mx-auto max-w-xl">
          {/* Section header */}
          <div className="mb-10 text-center">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-normal mb-4"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Let's talk
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Got a role or project in mind? Drop me a message and I'll get back
              to you.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
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
                className="w-full bg-green-400 text-gray-900 font-semibold text-sm py-2.5 px-7 rounded-lg hover:bg-green-300 transition-colors focus:outline-none"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Links */}
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:anjukaranji@gmail.com"
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anju-karanji"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sagi0312"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="/Anju-Karanji-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              Résumé
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
