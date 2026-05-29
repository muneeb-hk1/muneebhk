import Link from "next/link"

const projectData = [
    {
        title: `<b>ETA Visa Application</b>`,
        link: "https://etacard.vercel.app/",
        des1: `Engineered a scalable and high-performance <b>ETA Visa application</b> using Next.js and TypeScript. The platform streamlines the entire travel documentation intake process with a strong focus on modern component architecture, clean state management, and premium user experience.`,
        des2: `I significantly optimized performance by implementing <b>Static Site Generation (SSG)</b> along with dynamic route <b>lazy-loading</b>. These improvements drastically minimized initial page load times and ensured instantaneous UI responsiveness, even on slower mobile networks and low-bandwidth conditions.`
    },
    {
        title: `<b>Visitsvisa</b>`,
        link: "http://visitsvisa.com/",
        des1: `Contributed to the frontend development of <b>VisitsVisa</b>, a private tourism agency platform dedicated to making international travel simple, secure, and hassle-free.`,
        des2: `<b>I optimized critical rendering paths</b> and reduced latency across the application, ensuring a fast, stable, and pixel-perfect experience on both desktop and mobile devices. The improvements enhanced overall user satisfaction and conversion rates.`
    },
    {
        title: `<b>SiteChecking</b>`,
        link: "http://sitechecking.vercel.app/",
        des1: `Developed a powerful responsive <b>site-testing</b> utility built with React and Tailwind CSS. This tool helps developers and designers audit layout responsiveness and <b>performance across multiple device</b> viewports simultaneously in real-time.`,
        des2: `To achieve maximum speed and efficiency, I engineered a highly <b>optimized DOM structure</b> with carefully implemented lazy-loaded components.`
    },
    {
        title: `<b>Stylam</b>`,
        link: "https://stylam.com/",
        des1: `Designed and developed intuitive, user-friendly web interfaces for Stylam, <b>Asia’s largest laminate sheet manufacturer</b>. The focus was on creating clean, modern, and easy-to-navigate digital experiences that effectively showcase their extensive product range.`,
        des2: `I focused heavily on performance <b>optimization by minimizing asset blocking</b> overhead and fine-tuning DOM painting pathways.`
    },
    {
        title: `<b>User Board</b>`,
        link: "https://muneeb-hk1.github.io/vspagy/",
        des1: `Created a high-performance, responsive enterprise-grade UI clone using JavaScript (ES6) and advanced CSS architecture. The interface was designed to support complex interactive workflows with seamless usability.`,
        des2: `I focused heavily on performance optimization by minimizing asset blocking overhead and fine-tuning DOM painting pathways.`
    }
]

export default function projects() {
    return (
        <>
            <div className="pt-10 pb-3">
                {projectData.map((data, index) => (
                    <div key={index} className="mb-18">
                        <div className="flex justify-between items-center mb-3">
                            <h2 dangerouslySetInnerHTML={{ __html: `${data.title}` }} className="underline" />
                            <Link href={data.link} className="underline text-blue-600">view here</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p dangerouslySetInnerHTML={{ __html: `${data.des1}` }} />
                            <p dangerouslySetInnerHTML={{ __html: `${data.des2}` }} />
                        </div>
                        <hr className="mt-6" />
                    </div>
                ))}
            </div>

        </>
    )
}