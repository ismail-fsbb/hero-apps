import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-primary text-base font-semibold capitalize underline"
            : "text-black/90 text-base font-medium capitalize";

    return (
        <header className="w-full bg-white border-b border-[#E9E9E9]">
            <nav className="flex items-center justify-between px-20 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1">
                    <img
                        src="/logo.png"
                        alt="Hero Logo"
                        className="block max-w-10"
                    />
                    <span className="text-[#632EE3] text-base font-bold capitalize leading-[26px]">
                        HERO.IO
                    </span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-apps" className={navLinkClass}>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation" className={navLinkClass}>
                            Installation
                        </NavLink>
                    </li>
                </ul>

                {/* Action Button */}
                <Link to="https://github.com/ismail-fsbb" target="_blank">
                    <button className="flex items-center gap-2 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 cursor-pointer">
                        <FaGithub className="text-white" />
                        <span className="text-white text-base font-semibold capitalize">
                            Contribute
                        </span>
                    </button>
                </Link>
            </nav>
        </header>
    );
}
