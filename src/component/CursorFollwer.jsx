import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Start hidden until mouse moves
    gsap.set(dot, { x: -100, y: -100, opacity: 0, scale: 1 });

    const move = (e) => {
      gsap.to(dot, {
        x: e.clientX - 10, // center
        y: e.clientY - 10,
        duration: 0.18,
        ease: "power3.out",
        opacity: 1,
      });
    };

    const enterInteractive = () => {
      gsap.to(dot, { scale: 2.0, duration: 0.25, ease: "power3.out" });
    };

    const leaveInteractive = () => {
      gsap.to(dot, { scale: 1.0, duration: 0.25, ease: "power3.out" });
    };

    window.addEventListener("mousemove", move);

    // Enlarge on hover for interactive elements
    const interactives = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor='hover']"
    );

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive);
      el.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enterInteractive);
        el.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="
        pointer-events-none fixed left-0 top-0 z-[9999]
        h-8 w-8 rounded-full border border-amber-700 mix-blend-difference
        dark:border-red-500/70
      "
    />
  );
}