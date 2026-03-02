import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={wrapRef}>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          My journey, what I enjoy building, and a bit of personality.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-2xl border bg-white p-6 md:p-8 leading-relaxed text-gray-700
                   dark:bg-[#111] dark:border-white/10 dark:text-gray-200"
      >
        <motion.p variants={item}>
          I started my programming journey out of pure curiosity. I was always
          fascinated by how websites and applications work behind the scenes.
          What began with simple HTML and CSS experiments gradually turned into
          a deep passion for building complete digital products.
        </motion.p>

        <motion.p variants={item} className="mt-4">
          As I progressed, I moved into JavaScript, React, and full-stack
          development—learning how to design not just interfaces, but systems
          that solve real-world problems. I enjoy building clean, responsive web
          applications where usability, performance, and smooth interaction
          matter.
        </motion.p>

        <motion.p variants={item} className="mt-4">
          Outside of programming, I like staying curious and balanced. I enjoy
          exploring UI inspirations, learning new technologies, and keeping
          myself disciplined. I also like music, creative thinking, and staying
          active—these help me stay motivated and consistent.
        </motion.p>

        <motion.div variants={item} className="mt-6 grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border p-4 bg-gray-50 dark:bg-white/5 dark:border-white/10">
            <p className="text-xs text-gray-500 dark:text-gray-400">I enjoy</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              Dashboards & UI Systems
            </p>
          </div>

          <div className="rounded-xl border p-4 bg-gray-50 dark:bg-white/5 dark:border-white/10">
            <p className="text-xs text-gray-500 dark:text-gray-400">I focus on</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              Clean code + UX + Performance
            </p>
          </div>

          <div className="rounded-xl border p-4 bg-gray-50 dark:bg-white/5 dark:border-white/10">
            <p className="text-xs text-gray-500 dark:text-gray-400">I’m like</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              Curious, consistent, detail-oriented
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}