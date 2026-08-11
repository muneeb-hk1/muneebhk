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

            <div>
                {expData.map((exp, index) => (
                    <div key={index} className="pt-10 pb-4 border-b border-gray-300">
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text font-bold border-b">{exp.company}</h1>
                            <p className="text-sm">{exp.period}</p>
                        </div>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: `• ${exp.des1}` }} />
                            <p dangerouslySetInnerHTML={{ __html: `• ${exp.des2}` }} />
                        </div>
                    </div>
                ))}
            </div>



        </>
    )
}