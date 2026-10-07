import { border, eyebrow, muted, pageTitle } from "../lib/styles";

const skills = ["React.js", "Next.js", "Redux Toolkit", "JavaScript", "TypeScript", "Chart.js", "REST API", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Ant Design", "GSAP", "Bootstrap", "Figma", "Git", "GitHub", "Browser DevTools"];

export default function Skills() {
  return (
    <section className="pt-[65px] min-[701px]:pt-[95px]" aria-labelledby="skills-title">
      <p className={eyebrow}>Tools I work with</p>
      <h1 id="skills-title" className={pageTitle}>Skills</h1>
      <ul className="mt-10 flex flex-wrap gap-4">
        {skills.map((skill) => <li key={skill} className={`border px-[18px] py-2.5 ${border} ${muted}`}>{skill}</li>)}
      </ul>
    </section>
  );
}
