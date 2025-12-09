import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Waiz Alam",
  initials: "WA",
  url: "https://github.com/decodewidwaiz",
  location: "Bhubaneswar, Odisha",
  locationLink: "https://maps.app.goo.gl/PRsVT3WR4uwGjmw99",
  description:
    "Full-Stack Developer & AI Engineer specializing in Generative AI, RAG systems, deep learning, and intelligent web applications. I combine modern web technologies with machine learning to build scalable and impactful solutions.",
  summary:
    "I am a B.Tech CSE student passionate about AI, deep learning, full-stack development, and building smart, production-ready applications. My work spans RAG pipelines, computer vision (YOLO), ML/DL projects, automation tools, and modern web apps using MERN, Next.js, and Python. I enjoy solving real-world problems and continuously exploring cutting-edge technologies.",

  avatarUrl: "/me.jpg",

  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "RAG",
    "LangChain",
    "YOLOv5",
    "Streamlit",
    "TensorFlow",
    "PyTorch",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "OpenCV",
    "Flask",
    "Git",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "mdwaiz8619@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/decodewidwaiz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waiz-alam/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MohdWaiz85",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mdwaiz8619@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
  company: "Nexus E1",
  href: "#",
  badges: ["Remote"],
  location: "India · Remote",
  logoUrl: "/nexus.jpg",
  start: "Aug 2025",
  end: "Present",
  positions: [
    {
      title: "Contributor",
      employmentType: "Full-time",
      start: "Aug 2025",
      end: "Present",
      bullets: [
        "Created and fine-tuned a custom extension for Algolog",
        "Implemented backend features with hands-on development and optimization",
      ],
    },
  ],
},

  ],

  education: [
    {
      school: "ITER, Siksha 'O' Anusandhan",
      href: "https://www.soa.ac.in/iter",
      degree: "Bachelor's in Technology, B.Tech (CSE)",
      logoUrl: "/soa.png",
      start: "2024",
      end: "Pursuing",
    },
  ],

  projects: [
    {
      title: "SikshaFlow AI",
      href: "#",
      dates: "2nd Year",
      active: true,
      description:
        "An AI-powered education platform that transforms simple prompts into complete lecture materials, interactive quizzes, and personalized doubt-solving sessions to enhance learning efficiency.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "HuggingFace",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "ShadCN UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/video1.mp4",
    },
    {
      title: "VisionAI",
      href: "#",
      dates: "2nd Year",
      active: true,
      description:
        "An assistive AI platform designed for visually impaired users, offering real-time currency note recognition, multilingual voice assistance, and complete scan history tracking for enhanced accessibility and independence.",
      technologies: [
        "YOLOv5",
        "OpenCV",
        "React",
        "TensorFlow",
        "NumPy",
        "Flask",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/decodewidwaiz/VisionAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/video2.mp4",
    },

    {
      title: "DeepSeek vs LLaMA RAG",
      href: "https://github.com/decodewidwaiz/GenAi-2025/tree/main/deepseek-llama-rag",
      dates: "2nd Year",
      active: true,
      description:
        "A Retrieval-Augmented Generation comparison platform that evaluates DeepSeek and LLaMA-3 models side-by-side using custom PDF documents, highlighting differences in reasoning, accuracy, and response quality.",
      technologies: [
        "Python",
        "Streamlit",
        "LangChain",
        "FAISS",
        "ChromaDB",
        "DeepSeek API",
        "LLaMA 3 API",
        "OpenAI Assistants",
        "PyPDF2",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/decodewidwaiz/GenAi-2025/tree/main/deepseek-llama-rag",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/video3.mp4",
    },

    {
      title: "KisanMitra",
      href: "https://kisan-mitra-20.vercel.app/",
      dates: "2nd Year",
      active: true,
      description:
        "A government-certified digital agriculture platform offering guided subsidy support, AI-powered crop recommendations, direct farmer-to-buyer marketplace, and IoT-enabled rural connectivity. Designed to eliminate middlemen, boost farmer income, and simplify complex subsidy processes with stepwise guidance and automation.",
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "Three.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "Flask",
        "LoRa",
        "ESP32",
      ],
      links: [
        {
          type: "Website",
          href: "https://kisan-mitra-20.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/decodewidwaiz/DevBharat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/video4.mp4",
    },
  ],

  hackathons: [
    {
      title: "Rewind And Recode, 2025 - IIIT Bhubaneswar",
      dates: "November 7th, 2025",
      location: "Winner",
      description:
        "Built SikshaFlow AI, an intelligent education platform that generates complete lecture materials, interactive quizzes, and personalized doubt-solving sessions from simple prompts.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/festival/logo/150x150/68b42b441c300_Frame_8.png?d=125x125",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/decodewidwaiz/SikshaFlowAi",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1qBPwyc3wEj0-h8cPFzWB3hlFPBeLHlhm/view?usp=drive_link",
        },
      ],
    },
  ],
} as const;
