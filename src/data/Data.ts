// src/data/Data.ts

export const Browser = [
  {
    id: "Chrome",
    title: "Chrome",
    category: "Browser",
  },
  {
    Image: "icons/Edge.png",
    title: "Edge",
    category: "Browser",
  },
  {
    Image: "icons/Firefox.png",
    title: "Firefox",
    category: "Browser",
  },
];

export const Software = [
  {
    id: "GitHub",
    title: "GitHub",
    category: "Software",
  },
  {
    Image: "icons/Gitlab.png",
    title: "GitLab",
    category: "Software",
  },
  {
    id: "Prisma",
    title: "Prisma",
    category: "Software",
  },
];

export const Framework = [
  {
    id: "Tailwind",
    title: "Tailwind",
    category: "Framework",  
  },
  {
    id: "Express",
    title: "Express",
    category: "Framework",  
  },
];

export const Google = [
  {
    Image: "icons/FirebaseStudio.png",
    title: "Firebase Studio",
    category: "Google",
  },
  {
    id: "Firebase",
    title: "Firebase",
    category: "Google",
  },
  {
    id: "Google",
    title: "Google",
    category: "Google",
  },
];

export const Icons = [...Browser, ...Software, ...Framework, ...Google]; // ← aquí lo agregas