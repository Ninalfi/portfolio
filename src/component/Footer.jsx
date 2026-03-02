export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-2 justify-between">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <span>React • Tailwind • Framer Motion • GSAP • Lenis</span>
      </div>
    </footer>
  );
}