export type Skill = {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};

export let SKILLS: Skill[] = [
  {
    id: "1",
    name: "React",
    description: "Frontend library",
    category: "Frontend",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Next.js",
    description: "Fullstack framework",
    category: "Fullstack",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "TypeScript",
    description: "Typing system",
    category: "Fullstack",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function getSkills() {
  return [...SKILLS];
}

export async function addSkill(skill: Skill) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  SKILLS = [...SKILLS, skill];
  console.log("Skills updated", SKILLS);
  return getSkills();
}
