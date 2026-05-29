import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="p-2 flex justify-center">
      <div className="bg-gray-100 py-3 pl-6 overflow-hidden rounded-[20px] [corner-shape:squircle]">
        <ul className="flex justify-center items-center gap-10">
          <li className="general-sans-font">
            <Link href="/">Home</Link>
          </li>

           <li className="general-sans-font">
            <Link href="/tech">Skills</Link>
          </li>

           <li className="general-sans-font">
            <Link href="/experience">Experience</Link>
          </li>
           <li className="general-sans-font">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="general-sans-font">
            <Link href="https://substack.com/@muneebhk" target="_blank">Articles</Link>
          </li>
           <li className="general-sans-font" >
            <Link href="https://wa.me/919569034040" target="_blank" className="bg-gradient-to-l from-green-900 to-green-50 py-3 px-4">Contact</Link>
          </li>     
        </ul>
      </div>
    </nav>
  )
}