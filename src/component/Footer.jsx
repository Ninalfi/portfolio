export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white dark:bg-[#0B0B0B] dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row gap-2 justify-between">
        <span>© {new Date().getFullYear()} Alfi Sharin Ninad. All rights reserved.</span>
        <span>React • Tailwind • Framer Motion • GSAP • Lenis</span>
      </div>
    </footer>
  );
}