// ── Types ──────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  firstName: string;
  role: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  about: string;
  resumePath: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  contributions: string[];
  techStack: string[];
  type: 'professional' | 'project';
  org?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  techHighlights?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  url?: string;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  details: string[];
  score?: string;
  techHighlights?: string[];
}

// ── Data ───────────────────────────────────────────────────────────────

export const resumeData = {
  personal: {
    name: "Sudharshan Geddam",
    firstName: "Sudharshan",
    role: "Mobile Application Developer",
    email: "sudharshangeddam04@gmail.com",
    location: "Visakhapatnam, India",
    github: "https://github.com/SudharshanGeddam",
    linkedin: "https://www.linkedin.com/in/sudharshan-geddam/",
    about:
      "Mobile Application Developer with hands-on experience building production-grade Flutter applications integrated with Firebase and REST APIs. Strong foundation in role-based systems, responsive UI, and cross-functional collaborative development.",
    resumePath: "https://drive.google.com/file/d/1uf8bsSoqDLYJiYruQaG4kQ2fd50AHXn0/view?usp=drive_link",
  } satisfies PersonalInfo,

  featuredWork: [
    {
      id: "mechzie",
      title: "Mechzie",
      subtitle: "On-Demand Automobile Service Platform",
      context:
        "Built at Varna Infotech as the frontend developer, owning two complete Flutter applications end-to-end for an on-demand automobile service startup.",
      contributions: [
        "Built and shipped two complete Flutter applications — Service Taker and Service Provider — owning frontend development and backend integration end-to-end.",
        "Integrated Firebase Authentication, Cloud Firestore, and REST APIs to connect application workflows with backend services.",
        "Implemented role-based access workflows, user dashboards, and scalable mobile features across both applications.",
        "Collaborated with a 3-member cross-functional team, working directly with the Managing Director.",
      ],
      techStack: ["Flutter", "Firebase Auth", "Cloud Firestore", "REST APIs", "Dart"],
      type: "professional",
      org: "Varna Infotech",
    },
    {
      id: "unihub",
      title: "UNIHUB",
      subtitle: "AI-Powered Study Assistant",
      context:
        "Developed the Flutter frontend for an AI-powered study assistant supporting AI chat, study planning, and document scanning features.",
      contributions: [
        "Developed the Flutter frontend for an AI-powered study assistant application supporting AI chat, study planning, and document scanning features.",
        "Integrated Firebase Authentication and connected UI workflows with backend-driven AI functionalities.",
        "Designed reusable and responsive UI components optimized for mobile usability.",
      ],
      techStack: ["Flutter", "Firebase", "AI Integration", "Dart"],
      type: "project",
    },
    {
      id: "cyclot",
      title: "Cyclot",
      subtitle: "Bike Management & Inventory System",
      context:
        "Developed during internship at HCL Tech — a Flutter-based bike management app for allocation tracking, returns, and inventory operations.",
      contributions: [
        "Developed a Flutter-based bike management app for allocation tracking, returns, and inventory operations.",
        "Implemented role-based access control (Employee, Security, Admin) using Firebase Authentication and Cloud Firestore.",
        "Built dashboard interfaces and chart-based data visualization using fl_chart.",
      ],
      techStack: ["Flutter", "Firebase Auth", "Cloud Firestore", "fl_chart", "Dart"],
      type: "professional",
      org: "HCL Tech",
    },
  ] satisfies FeaturedWork[],

  experience: [
    {
      id: "varna-infotech",
      role: "Flutter Developer (Part-Time)",
      company: "Varna Infotech (Mechzie)",
      period: "05/2026 – Present",
      location: "Visakhapatnam",
      description: [
        "Built and shipped two complete Flutter applications — Service Taker and Service Provider — for Mechzie, an on-demand automobile service platform, owning frontend development and backend integration end-to-end.",
        "Integrated Firebase Authentication, Cloud Firestore, and REST APIs to connect application workflows with backend services, collaborating with a 3-member cross-functional team.",
        "Implemented role-based access workflows, user dashboards, and scalable mobile features across both applications.",
        "Worked directly with the Managing Director and team to ensure smooth development cycles and launch readiness.",
      ],
      techHighlights: ["Flutter", "Firebase", "REST APIs", "Dart"],
    },
    {
      id: "hcl-tech",
      role: "Android Developer Trainee",
      company: "HCL Tech",
      period: "01/2024 – 04/2024",
      description: [
        "Developed Cyclot, a Flutter-based bike management app for allocation tracking, returns, and inventory operations.",
        "Implemented role-based access control (Employee, Security, Admin) using Firebase Authentication and Cloud Firestore.",
        "Built dashboard interfaces and chart-based data visualization using fl_chart.",
      ],
      techHighlights: ["Flutter", "Firebase", "fl_chart"],
    },
  ] satisfies Experience[],

  skills: [
    {
      category: "Languages",
      skills: ["Dart", "Java", "Python", "SQL", "C"],
    },
    {
      category: "Mobile & Frameworks",
      skills: ["Flutter", "Android Development"],
    },
    {
      category: "Backend & Services",
      skills: ["Firebase Authentication", "Cloud Firestore", "REST API Integration"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology [CSE]",
      institution: "Raghu Engineering College",
      period: "2024 – 2027",
      score: "8.9 CGPA",
    },
    {
      id: "diploma",
      degree: "Computer Engineering [CME]",
      institution: "Government Polytechnic College",
      period: "2021 – 2024",
      score: "81.57%",
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate [SSC]",
      institution: "Aditya Public School",
      period: "2020",
      score: "84.8%",
    },
  ] satisfies Education[],

  certifications: [
    { id: "cert-1", title: "Flutter Course completion", issuer: "ICTRD", url: "https://drive.google.com/file/d/1ITduycoRlQ4nLgKO-sg3nOeL3qFj8TXK/view?usp=drive_link" },
    { id: "cert-2", title: "Java Course completion", issuer: "NPTEL", url: "https://drive.google.com/file/d/1IP03hlnrRRw9WnuycT-DI52FTwAPYdg7/view?usp=drive_link" },
    { id: "cert-3", title: "Internship completion certificate", issuer: "HCL Tech", url: "https://drive.google.com/file/d/10A1fz0WwVzbF0_kUiRGVa6iHUQIu2-M8/view?usp=drive_link" },
    { id: "cert-4", title: "Python completion Certificate", issuer: "Reliance Foundation", url: "https://drive.google.com/file/d/1GKxJmnqUc1uQqCfTmiILCHFcrui8YQkr/view?usp=drive_link" },
    { id: "cert-5", title: "SQL & DBMS", issuer: "Eduskills Foundation", url: "https://drive.google.com/file/d/1V8hT4TPvIzoIenuoNOBSPAPYriUMEMMV/view?usp=sharing" },
    { id: "cert-6", title: "TCS ION", issuer: "TCS", url: "https://drive.google.com/file/d/1IKJCjEo-FmdJiqZid8fyqf8CTRmtwX4k/view?usp=drive_link" },
  ] satisfies Certification[],

  timeline: [
    {
      id: "tl-varna",
      type: "work",
      title: "Flutter Developer (Part-Time)",
      subtitle: "Varna Infotech (Mechzie)",
      period: "05/2026 – Present",
      location: "Visakhapatnam",
      details: [
        "Built and shipped two complete Flutter applications for an on-demand automobile service platform.",
        "Integrated Firebase Auth, Firestore, and REST APIs with a 3-member cross-functional team.",
        "Implemented role-based access workflows, dashboards, and scalable mobile features.",
      ],
      techHighlights: ["Flutter", "Firebase", "REST APIs"],
    },
    {
      id: "tl-btech",
      type: "education",
      title: "Bachelor of Technology [CSE]",
      subtitle: "Raghu Engineering College",
      period: "2024 – 2027",
      details: [],
      score: "8.9 CGPA",
    },
    {
      id: "tl-hcl",
      type: "work",
      title: "Android Developer Trainee",
      subtitle: "HCL Tech",
      period: "01/2024 – 04/2024",
      details: [
        "Developed Cyclot — a Flutter-based bike management app for allocation tracking and inventory.",
        "Implemented role-based access control with Firebase Auth and Firestore.",
        "Built dashboard interfaces with chart-based data visualization.",
      ],
      techHighlights: ["Flutter", "Firebase", "fl_chart"],
    },
    {
      id: "tl-diploma",
      type: "education",
      title: "Computer Engineering [CME]",
      subtitle: "Government Polytechnic College",
      period: "2021 – 2024",
      details: [],
      score: "81.57%",
    },
    {
      id: "tl-ssc",
      type: "education",
      title: "Secondary School Certificate [SSC]",
      subtitle: "Aditya Public School",
      period: "2020",
      details: [],
      score: "84.8%",
    },
  ] satisfies TimelineEntry[],
};
