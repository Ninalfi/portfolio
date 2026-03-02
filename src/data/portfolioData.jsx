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
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588291481817" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
    
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
    institute: "Jagannath University",
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
      "https://i.ibb.co/mF1vtT8n/Chat-GPT-Image-Mar-2-2026-12-18-59-PM.png",
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
    slug: "gameHub",
    name: "GameHub – Game Discovery Platform",
    image:
      "https://i.ibb.co/gMGqxpgH/Chat-GPT-Image-Mar-2-2026-01-29-50-PM.png",
    stack: ["React", "API", "Tailwind"],
    description: "Game discovery platform with search, clean UI and error handling.",
    live: "https://awesome-game-hub.web.app/",
    github: "https://github.com/yourusername/gamehub-client",
    challenges: [
      "Handling API rate limits and empty states.",
      "Making UI responsive across devices.",
    ],
    improvements: ["Add hourly/weekly charts.", "Save favorite cities."],
  },
  {
    slug: "skillio",
    name: "Skillio – Skill Development Platform and online job marketplace",
    image:
      "https://i.ibb.co/FLZDYWbC/Chat-GPT-Image-Mar-2-2026-03-50-15-PM.png",
    stack: ["React", "React Router", "Tailwind"],
    description:
      "A skill development platform with course listings, user dashboard, and job marketplace.",
    live: "https://freelance-marketplace-87993.web.app/",
    github: "https://github.com/Ninalfi/freelancer-marketplace-client",
    challenges: [
      "Managing cart state across routes.",
      "Designing a scalable UI system for products.",
    ],
    improvements: ["Add backend + payment (Stripe).", "Add admin product panel."],
  },

];