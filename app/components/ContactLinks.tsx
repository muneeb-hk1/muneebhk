import { FiMail, FiLinkedin, FiTwitter, FiBookOpen } from "react-icons/fi";
import { interactive, muted } from "../lib/styles";

const icon = "size-[19px] shrink-0 stroke-[1.7]";
const socialLink = `inline-flex size-11 items-center justify-center ${muted} ${interactive}`;

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 min-[701px]:gap-x-3">
      <a className={`mr-2 inline-flex min-h-11 max-w-full items-center gap-[11px] text-base min-[701px]:text-lg ${interactive}`} href="mailto:muneebkhan9569@gmail.com">
        <FiMail className={icon} aria-hidden="true" /><span className="break-all border-b border-[#838895] leading-[27px]">muneebkhan9569@gmail.com</span>
      </a>
      <a className={socialLink} href="https://www.linkedin.com/in/muneebhk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin className={icon} aria-hidden="true" /></a>
      <a className={socialLink} href="https://x.com/muneeb_hk" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FiTwitter className={icon} aria-hidden="true" /></a>
      <a className={socialLink} href="https://muneeb-hk1.github.io/resume/muneeb_sde_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume"><FiBookOpen className={icon} aria-hidden="true" /></a>
    </div>
  );
}
