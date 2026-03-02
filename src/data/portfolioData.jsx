export const profile = {
  name: "Alfi Sharin Ninad",
  designation: "Full Stack Developer",
  tagline:
    "I build modern, clean, high-performance web apps with great UX & animations.",
  location: "Bangladesh",
  resumeHref: "/resume.pdf", 
  email: "alfininad192@gmail.com",
  phone: "+8801613787093",
  whatsapp: "+8801613787093", 
  socials: [
    { label: "GitHub", href: "https://github.com/Ninalfi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alfi-sharin-ninad-389230333/?skipRedirect=true" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588291481817" },
  ],
};

export const about = {
  paragraphs: [
    "My programming journey started with curiosity—how websites actually work. I began with HTML/CSS, then moved to JavaScript, and eventually fell in love with building full applications using React and Node.",
    "I enjoy building projects where design meets logic: clean layouts, smooth interactions, and well-structured code. I’m especially interested in dashboards, e-commerce systems, and products that solve real problems.",
    "Outside of programming, I enjoy learning new tools, exploring UI inspirations, and staying active. I like music and creative thinking—anything that keeps me curious and improving every day.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS / Tailwind", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 80 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 62 },
      { name: "REST APIs", level: 72 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git/GitHub", level: 78 },
      { name: "Postman", level: 65 },
      { name: "GSAP", level: 65 },
      { name: "Vercel/Netlify", level: 70 },
    ],
  },
];

export const education = [
  {
    title: "BSc in Computer Science & Engineering",
    institute: "Jagannth University",
    year: "2022 - Present",
    details: [
      "Relevant: DSA, DBMS, OOP, Web Development, Python, JS.",
      "Built multiple full-stack projects & UI-focused apps",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer (Intern)",
    company: "Programming Hero",
    year: "2026",
    points: [
      "Built responsive pages and reusable UI components.",
      "Integrated REST APIs and handled loading/error states.",
      "Improved performance and accessibility.",
    ],
  },
];

export const projects = [
  {
    slug: "bookcourier",
    name: "BookCourier – Book Delivery Platform",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
    stack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    description:
      "A modern book marketplace/delivery system with dashboard, blog, and book listing.",
    live: "https://book-courier-9e429.web.app ",
    github: "https://github.com/Ninalfi/BookCourier-Client",
    challenges: [
      "Role-based UI access for Admin/Librarian/User.",
      "Building reusable cards and consistent layouts.",
      "Creating a clean dashboard experience.",
    ],
    improvements: [
      "Add advanced analytics & report exporting.",
      "Add real-time notifications.",
      "Improve SEO for blog pages.",
    ],
  },
  {
    slug: "shoplite",
    name: "ShopLite – E-commerce Frontend",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    stack: ["React", "React Router", "Tailwind"],
    description:
      "E-commerce UI with product listing, cart flow, and responsive design.",
    live: "https://your-live-link.com/shoplite",
    github: "https://github.com/yourusername/shoplite-client",
    challenges: [
      "Managing cart state across routes.",
      "Designing a scalable UI system for products.",
    ],
    improvements: ["Add backend + payment (Stripe).", "Add admin product panel."],
  },
  {
    slug: "weatherwise",
    name: "WeatherWise – Weather Dashboard",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    stack: ["React", "API", "Tailwind"],
    description: "Weather dashboard with search, clean UI and error handling.",
    live: "https://your-live-link.com/weatherwise",
    github: "https://github.com/yourusername/weatherwise-client",
    challenges: [
      "Handling API rate limits and empty states.",
      "Making UI responsive across devices.",
    ],
    improvements: ["Add hourly/weekly charts.", "Save favorite cities."],
  },
];