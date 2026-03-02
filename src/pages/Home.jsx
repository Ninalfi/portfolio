import { useEffect, useRef } from "react";
import { education, experience, profile, projects, skills } from "../data/portfolioData";
import { motion } from "framer-motion";
import Skills from "../component/Skills";
import Navbar from "../component/Navbar";
import GsapReveal from "../component/GsapReveal";
import SectionTitle from "../component/SectionTitle";
import ProjectCard from "../component/ProjectCard";
import Footer from "../component/Footer";
import profilePhoto from "../assets/image.png";
import About from "../component/About";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const projectsGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1) HERO: stagger reveal (runs on load)
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      // 2) HERO IMAGE: soft parallax while scrolling
      if (heroImgRef.current && heroRef.current) {
        gsap.to(heroImgRef.current, {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3) PROJECTS: stagger cards on scroll
      if (projectsGridRef.current) {
        gsap.fromTo(
          ".project-card",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: projectsGridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-gray-900 dark:bg-[#0B0B0B] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        id="home"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="hero-item text-sm text-gray-600 dark:text-gray-300">
              {profile.location}
            </p>

            <h1 className="hero-item text-3xl md:text-5xl font-bold mt-2">
              {profile.name}
            </h1>

            <p className="hero-item mt-3 text-lg md:text-xl text-gray-900 dark:text-white">
              {profile.designation}
            </p>

            <p className="hero-item mt-4 text-gray-600 dark:text-gray-300">
              {profile.tagline}
            </p>

            {/* Resume + socials */}
            <div className="hero-item mt-6 flex flex-wrap gap-3">
              <a
                href={profile.resumeHref || "#"}
                download
                className="rounded-xl bg-black text-white px-5 py-2.5 text-sm hover:opacity-90
                           dark:bg-white dark:text-black"
              >
                View / Download Resume
              </a>

              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border bg-white px-4 py-2.5 text-sm hover:bg-gray-50
                             dark:bg-[#111] dark:text-white dark:border-white/10 dark:hover:bg-[#171717]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex md:justify-end">
            <div
              ref={heroImgRef}
              className="rounded-3xl border bg-white p-3 shadow-sm
                         dark:bg-[#111] dark:border-white/10"
            >
              <img
                src={profilePhoto}
                alt="Professional portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <GsapReveal>
          <About />
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
              <div
                key={e.title}
                className="rounded-2xl border bg-white p-6
                           dark:bg-[#111] dark:border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {e.year}
                  </p>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {e.institute}
                </p>

                <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-200 space-y-1">
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
            <div
              className="rounded-2xl border bg-white p-6 text-gray-700
                         dark:bg-[#111] dark:border-white/10 dark:text-gray-200"
            >
              No professional experience added yet.
            </div>
          ) : (
            <div className="grid gap-6">
              {experience.map((x) => (
                <div
                  key={x.role}
                  className="rounded-2xl border bg-white p-6
                             dark:bg-[#111] dark:border-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {x.role}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {x.year}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {x.company}
                  </p>

                  <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-200 space-y-1">
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
          <div
            ref={projectsGridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p) => (
              <div key={p.slug} className="project-card">
                <ProjectCard project={p} />
              </div>
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
          <div
            className="rounded-2xl border bg-white p-6 grid md:grid-cols-3 gap-4 text-sm
                       dark:bg-[#111] dark:border-white/10"
          >
            <div className="rounded-xl border p-4 dark:border-white/10">
              <p className="text-gray-600 dark:text-gray-300">Email</p>
              <a
                className="font-semibold hover:underline text-gray-900 dark:text-white"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>

            <div className="rounded-xl border p-4 dark:border-white/10">
              <p className="text-gray-600 dark:text-gray-300">Phone</p>
              <a
                className="font-semibold hover:underline text-gray-900 dark:text-white"
                href={`tel:${profile.phone}`}
              >
                {profile.phone}
              </a>
            </div>

            <div className="rounded-xl border p-4 dark:border-white/10">
              <p className="text-gray-600 dark:text-gray-300">WhatsApp</p>
              <a
                className="font-semibold hover:underline text-gray-900 dark:text-white"
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