import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reads background colors from:
 *  - data-bg="..." (light)
 *  - data-bg-dark="..." (dark)
 * on each section and fades a fixed background layer smoothly.
 */
export default function BackgroundFader({ selector = "section[data-bg]" }) {
  const bgRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const sections = Array.from(document.querySelectorAll(selector));
    if (!sections.length) return;

    const getColor = (sec) => {
      const light = sec.getAttribute("data-bg");
      const dark = sec.getAttribute("data-bg-dark");
      return theme === "dark" ? dark || "#0B0B0B" : light || "#F6F3EE";
    };

    // Set initial background from the first section
    gsap.set(bg, { backgroundColor: getColor(sections[0]) });

    const triggers = sections.map((sec) => {
      return ScrollTrigger.create({
        trigger: sec,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => gsap.to(bg, { backgroundColor: getColor(sec), duration: 0.7, ease: "power2.out" }),
        onEnterBack: () => gsap.to(bg, { backgroundColor: getColor(sec), duration: 0.7, ease: "power2.out" }),
      });
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [selector, theme]);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 transition-colors"
      aria-hidden="true"
    />
  );
}