import { bodyCopy, border, eyebrow, pageTitle } from "../lib/styles";

const expData = [
    {
        company: "CSS Founder",
        period: "June 2024 - Present",
        des1: `Developed a <b>template-based website builder</b> with <b>20+</b> reusable page sections, allowing users to edit content and
restructure pages through drag and drop. Built the state management and component rendering flow to keep the
editor and website preview synchronized as users modify section content, visibility, and order.
`,
        des2: `Handled <b>project requirements directly</b> with team members and clients, turning functional specifications into clean,
working frontend code that <b>matched expected features.</b>`
    }, {
        company: "Get Web India",
        period: "Jan 2023 - Apr 2024",
        des1: `<b>Converted Figma designs</b> into responsive, pixel-perfect interfaces while ensuring cross-browser compatibility
and consistent user experience.
`,
        des2: `Built modular <b>UI components</b> used across multiple client websites to speed up development time. Fixed layout
bugs and <b>cross-browser styling issues</b> across Chrome, Firefox, and Safari.
`
    }
]

export default function experience() {
    return (
        <>

            <section className="pt-[65px] min-[701px]:pt-[95px]" aria-labelledby="experience-title">
                <p className={eyebrow}>Where I’ve worked</p>
                <h1 id="experience-title" className={pageTitle}>Experience</h1>
                {expData.map((exp, index) => (
                    <div key={index} className={`border-b pt-10 pb-6 ${border}`}>
                        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                            <h2 className="text-xl leading-7 font-normal">{exp.company}</h2>
                            <p className="text-xs leading-[22px] tracking-[1px] text-[#838895] uppercase">{exp.period}</p>
                        </div>
                        <div className={`space-y-3 ${bodyCopy}`}>
                            <p dangerouslySetInnerHTML={{ __html: `• ${exp.des1}` }} />
                            <p dangerouslySetInnerHTML={{ __html: `• ${exp.des2}` }} />
                        </div>
                    </div>
                ))}
            </section>



        </>
    )
}
