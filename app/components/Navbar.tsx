import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="p-2 flex justify-center">
      <div className="bg-gray-100 py-3 pl-6 overflow-hidden rounded-full [corner-shape:squircle]">
        <ul className="flex justify-center items-center gap-6 md:gap-8">
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
        
           <li className="general-sans-font" >
            <Link href="https://wa.me/919569034040" target="_blank" className="text-white bg-gradient-to-l from-blue-700 to-blue-200 py-4 px-6">Contact</Link>
          </li>     
        </ul>
      </div>
    </nav>
  )
}