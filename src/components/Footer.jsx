import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-7 bg-secondary">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 pb-4">
                    <div className="col-span-10">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-1">
                            <img
                                src="/logo.png"
                                alt="Hero Logo"
                                className="block max-w-10"
                            />
                            <span className="text-white text-base font-bold capitalize leading-[26px]">
                                HERO.IO
                            </span>
                        </Link>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-xl font-medium text-white mb-2">Social Links</h4>
                        <div className="flex gap-2 flex-wrap">
                            <Link to="#" target="_blank" className="cursor-pointer bg-white rounded-full p-1 grid place-items-center max-w-fit">
                                <FaFacebookF />
                            </Link>
                            <Link to="#" target="_blank" className="cursor-pointer bg-white rounded-full p-1 grid place-items-center max-w-fit">
                                <FaXTwitter />
                            </Link>
                            <Link to="#" target="_blank" className="cursor-pointer bg-white rounded-full p-1 grid place-items-center max-w-fit">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-white text-base text-center pt-4 border-t border-gray-700">
                    Copyright © 2025 - All right reserved
                </p>
            </div>
        </footer>
    );
}