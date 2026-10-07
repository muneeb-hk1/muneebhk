import ContactLinks from "./components/ContactLinks";
import ProjectGrid from "./components/ProjectGrid";
import { eyebrow, interactive, muted, pageTitle } from "./lib/styles";

export default function Home() {
  return (
    <>
      <section className="pt-[65px] min-[701px]:pt-[106px]" aria-labelledby="intro-title">
       
        <p className={eyebrow}></p>
        <h1 id="intro-title" className={pageTitle}>Hola, I’m Muneeb.</h1>
        <p className={`max-w-[825px] text-lg leading-[29px] min-[701px]:text-xl min-[701px]:leading-[31px] ${muted}`}>
          I turn designs into working websites, from visual editors to travel applications. My focus is on clear navigation, thoughtful details, and pages that feel comfortable on any screen.
        </p>
         <ul className="mt-[26px] mb-[30px] flex flex-wrap gap-x-[22px] gap-y-3 text-xs leading-[22px] tracking-[0.5px] text-[#838895] uppercase min-[701px]:mt-[31px] min-[701px]:mb-9 min-[701px]:gap-x-8 min-[701px]:text-sm" aria-label="Experience highlights">
          <li>Frontend Software Engineer</li>
          <li>3+ years of experience</li>
        </ul>
        <ContactLinks />
      </section>
      <section id="about" className="mt-[60px] scroll-mt-8 min-[801px]:mt-[70px]" aria-labelledby="about-title">
        <h2 className={`mb-[25px] flex gap-[22px] ${eyebrow}`} id="about-title"><span>01</span> About</h2>
        <div className={`max-w-[1060px] space-y-4 text-md leading-6 ${muted}`}>
          <p>
            I started at <strong className="font-semibold text-[#1b1b1d] [html[data-theme=dark]_&]:text-[#ededee]">Get Web India</strong> in 2023, moving from an internship into a full-time UI role. At <strong className="font-semibold text-[#1b1b1d] [html[data-theme=dark]_&]:text-[#ededee]">CSS Founder</strong>, I grew into frontend engineering, working on page builders, forms, and reusable components.
          </p>
          <p>
            Conversations with customers shape how I work. I listen for where they get stuck, ask questions, and use that feedback to make the next iteration easier to use.
          </p>
          <a className={`inline-flex min-h-11 items-center gap-2 text-[#1b1b1d] underline decoration-[#838895] underline-offset-4 [html[data-theme=dark]_&]:text-[#ededee] ${interactive}`} href="https://muneeb-hk1.github.io/resume/muneeb_sde_resume.pdf" target="_blank" rel="noopener noreferrer">Read my résumé <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section id="projects" className="mt-[60px] scroll-mt-8 min-[701px]:mt-[70px]" aria-labelledby="projects-title">
        <h2 className={`mb-[25px] flex gap-[22px] ${eyebrow}`} id="projects-title"><span>02</span> Projects</h2>
        <ProjectGrid />
      </section>
    </>
  );
}
