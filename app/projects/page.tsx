import ProjectGrid from "../components/ProjectGrid";
import { eyebrow, pageTitle } from "../lib/styles";

export default function Projects() {
  return (
    <section className="pt-[65px] min-[701px]:pt-[95px]">
      <p className={eyebrow}>Selected work</p>
      <h1 className={pageTitle}>Projects</h1>
      <div className="mt-[45px]"><ProjectGrid detailed /></div>
    </section>
  );
}
