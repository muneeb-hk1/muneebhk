import { projectData } from "../data/projects";
import { bodyCopy, border, interactive } from "../lib/styles";

export default function ProjectGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-x-[50px] gap-y-9 min-[701px]:grid-cols-2">
      {projectData.map((project, index) => (
        <article className={`group border-t pt-5 ${border}`} key={project.link}>
          <p className="mb-3 flex items-center gap-3 text-[11px] leading-5 tracking-[1.5px] text-[#838895] uppercase">
            <span aria-hidden="true">0{index + 1}</span><span>{project.category}</span>
          </p>
          <h3 className="mb-2 text-xl leading-7 font-normal">
            <a className={`flex min-h-11 items-center justify-between gap-4 hover:underline hover:underline-offset-4 ${interactive}`} href={project.link} target="_blank" rel="noopener noreferrer">
              <span>{project.title}</span>
              <span className="text-[#838895] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </h3>
          <p className={bodyCopy}>{project.des1}</p>
          {detailed && <p className={`mt-3 ${bodyCopy}`}>{project.des2}</p>}
        </article>
      ))}
    </div>
  );
}
