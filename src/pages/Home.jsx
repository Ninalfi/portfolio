import { about, education, experience, profile, projects, skills } from "../data/portfolioData";
import { motion } from "framer-motion";
import Skills from "../component/Skills";
import Navbar from "../component/Navbar";
import GsapReveal from "../component/GsapReveal";
import SectionTitle from "../component/SectionTitle";
import ProjectCard from "../component/ProjectCard";
import Footer from "../component/Footer";
import profilePhoto from "../assets/profile.jpeg"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F3EE] text-gray-900">
      <Navbar />

      {/* HERO */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-600"
            >
              {profile.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="text-3xl md:text-5xl font-bold mt-2"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-3 text-lg md:text-xl"
            >
              {profile.designation}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-4 text-gray-600"
            >
              {profile.tagline}
            </motion.p>

            {/* Resume + socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.resumeHref || "#"}
                download
                className="rounded-xl bg-black text-white px-5 py-2.5 text-sm hover:opacity-90"
              >
                View / Download Resume
              </a>

              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border bg-white px-4 py-2.5 text-sm hover:bg-gray-50"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border bg-white p-3 shadow-sm"
            >
              <img
                src={profilePhoto}
                alt="Professional portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle
            title="About Me"
            subtitle="My journey, what I enjoy, and a bit of personality."
          />
          <div className="rounded-2xl border bg-white p-6 leading-relaxed text-gray-700 space-y-4">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle
            title="Skills"
            subtitle="Categorized and shown in a graphical format."
          />
          <Skills groups={skills} />
        </GsapReveal>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle title="Educational Qualification" />
          <div className="grid gap-6">
            {education.map((e) => (
              <div key={e.title} className="rounded-2xl border bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-semibold text-lg">{e.title}</h3>
                  <p className="text-sm text-gray-600">{e.year}</p>
                </div>
                <p className="text-sm text-gray-700 mt-1">{e.institute}</p>
                <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle
            title="Experience"
            subtitle="Professional experience (optional)."
          />
          {experience.length === 0 ? (
            <div className="rounded-2xl border bg-white p-6 text-gray-700">
              No professional experience added yet.
            </div>
          ) : (
            <div className="grid gap-6">
              {experience.map((x) => (
                <div key={x.role} className="rounded-2xl border bg-white p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="font-semibold text-lg">{x.role}</h3>
                    <p className="text-sm text-gray-600">{x.year}</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{x.company}</p>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    {x.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </GsapReveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle
            title="Projects"
            subtitle="At least 3 projects with detail pages."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <SectionTitle
            title="Contact Information"
            subtitle="Reach out directly."
          />
          <div className="rounded-2xl border bg-white p-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border p-4">
              <p className="text-gray-600">Email</p>
              <a className="font-semibold hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-gray-600">Phone</p>
              <a className="font-semibold hover:underline" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-gray-600">WhatsApp</p>
              <a
                className="font-semibold hover:underline"
                href={
                  profile.whatsapp
                    ? `https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`
                    : "#"
                }
                target="_blank"
                rel="noreferrer"
              >
                {profile.whatsapp || "Not added"}
              </a>
            </div>
          </div>
        </GsapReveal>
      </section>

      <Footer />
    </div>
  );
}