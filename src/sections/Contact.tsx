import { useState } from "react";
import type { FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const email = "himani22122002@gmail.com";

  const github = "https://github.com/himani22122002-hue";

  const linkedin =
    "https://www.linkedin.com/in/himani-joshi-335838238/";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[0.05] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            05. Contact
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
            I'm open to discussing internships, software
            development opportunities, projects, and interesting
            ideas.
          </p>
        </div>


        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-xl font-semibold">
              Get in touch
            </h3>

            <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
              Feel free to reach out through email or connect
              with me on professional platforms.
            </p>


            <div className="mt-8 space-y-4">

              {/* EMAIL */}
              <a
                href={`mailto:${email}`}
                className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Email
                </p>

                <p className="mt-2 text-slate-300">
                  {email}
                </p>
              </a>


              {/* GITHUB */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  GitHub
                </p>

                <p className="mt-2 text-slate-300">
                  github.com/himani22122002-hue
                </p>
              </a>


              {/* LINKEDIN */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  LinkedIn
                </p>

                <p className="mt-2 text-slate-300">
                  linkedin.com/in/himani-joshi-335838238
                </p>
              </a>

            </div>
          </div>


          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                />
              </div>


              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                />
              </div>


              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                />
              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Send Message →
              </button>


              {/* SUCCESS MESSAGE */}
              {submitted && (
                <p className="text-center text-sm text-cyan-400">
                  Your email app should open with the message ready
                  to send.
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;