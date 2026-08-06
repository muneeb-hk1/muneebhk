import Link from "next/link"

export default function Home() {
  return (
    <>
      
      
       <section className="bg-white-50 pt-14 pb-8">
            <div className=" flex flex-col gap-5">
              <h1 className="sharp-font text-2xl underline">About</h1>
              <p>Hi, I’m Muneeb, a Frontend Software Engineer with <b>3+ years</b> of experience, focused on building scalable, test-ready, and user-centric interfaces for modern SaaS products.</p>

      <p>My career began at <b><span className="underline">Get Web India</span></b>, where I grew from Intern to full-time Frontend Developer over 1.4 years. In <b>April 2024</b>, I joined <b><span className="underline">CSS Founder</span></b>, progressing from Junior UI Developer to <b className="underline">Frontend Software Engineer</b>. I specialize in building dynamic, highly interactive web applications—including AI-powered interfaces—by integrating complex APIs, writing robust frontend logic, and managing application state.</p>

              <p>Much of my growth has come from staying <b>close to users—joining calls</b>, listening to their stories, and deeply understanding their pain points. These real conversations continuously shape my approach, helping me <b>build interfaces</b> with more clarity, empathy, and intent.</p>
              <Link href="https://muneeb-hk1.github.io/resume/muneeb_sde_resume.pdf" className="italic underline" target="_blank">resume link</Link>

             
            </div>
          </section>

    </>
  );
}
