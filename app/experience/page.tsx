const expData = [
    {
        company:"CSS Founder",
        period:"June 2024 - Present",
        des1:`Architecting a scalable <b>ETA Visa application</b> utilizing Next.js, focusing on optimized web performance, strict TypeScript
                        interfaces, and premium responsive design. <b>Engineering frontend features for VisitsVisa  </b>, a high-volume platform handling
                        thousands of daily users, driving improvements in core web vitals and overall user retention.`,
                        des2:`Managing a dynamic queue of <b>client-facing web products</b>, ensuring timely delivery of maintainable UI components, fluid
                        animations, and <b>robust API integrations.</b>`
    },{
        company:"Get Web India",
        period:"Jan 2023 - Apr 2024",
        des1:`Implementing <b>performance optimizations</b> & best practices to ensure fast, efficient, and reliable applications.`,
        des2:`Developing and maintaining <b>pixel-perfect UI components</b> that not only align precisely with design specifications but also
enhance usability, interactivity, and <b>overall visual appeal</b>, ensuring users enjoy a seamless digital experience.`
    },
    {
        company:"My Growthacking",
        period:"Oct 2022 - Dec 2022",
        des1:`Learned modern frontend development practices, reusable components, and <b>clean coding standards</b> while working on real
projects.`,
        des2:`Worked with designers and developers to convert UI designs into <b>interactive web interfaces.</b>`
    }
]

export default function experience() {
    return (
        <>

<div>
    {expData.map((exp,index)=>(
        <div key={index} className="pt-10 pb-6">
<div className="flex justify-between items-center mb-3">
                    <h1 className="text font-bold border-b">{exp.company}</h1>
                    <p>{exp.period}</p>
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: `• ${exp.des1}` }}/>
                    <p dangerouslySetInnerHTML={{ __html:`• ${exp.des2}`}}/>
                </div>
        </div>
    ))}
</div>

            

        </>
    )
}