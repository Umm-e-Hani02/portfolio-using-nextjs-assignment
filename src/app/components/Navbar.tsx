import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-slate-900 bg-opacity-60 backdrop-blur-3xl shadow-lg h-16 flex items-center justify-center fixed w-full z-10">
            <ul className="flex space-x-3 text-gray-200">
                <li>
                    <Link href="#home" className="hover:text-yellow-600 transition duration-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="hover:text-yellow-600 transition duration-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#skills" className="hover:text-yellow-600 transition duration-300">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href="#projects" className="hover:text-yellow-600 transition duration-300 ">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-yellow-600 transition duration-300">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

