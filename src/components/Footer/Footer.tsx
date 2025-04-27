import Link from "next/link";
import BottomFooter from "./BottomFooter/BottomFooter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import FooterTop from "./FooterTop/FooterTop";

const Footer = () => {
    return (
        <div className="bg-[#121212]">
            <FooterTop />
            <div className="container mx-auto max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
                <div>
                    <h4 className="text-white font-bold text-lg">About Rentaly</h4>
                    <p className="text-[#c4c4c4] pt-5">Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That&apos;s why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Contact Info</h4>
                    <div className="flex flex-col gap-3.5 pt-5">
                        <div className="flex gap-2">
                            <FaMapMarkerAlt className="text-mainColor" />
                            <p className="text-[#c4c4c4] -mt-1.5">08 W 36th St, New York, NY 10001</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdCall className="text-mainColor" />
                            <p className="text-[#c4c4c4]">+1 333 9296</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoMailOutline className="text-mainColor" />
                            <Link href="mailto:contact@example.com" className="text-white hover:text-[#1ecb15] transition-all duration-500">contact@example.com</Link>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AiOutlineFilePdf className="text-mainColor" />
                            <Link href="/" className="text-white  hover:text-[#1ecb15] transition-all duration-500">Download Brochure</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Quick Links</h4>
                    <div className="flex flex-col gap-1.5 pt-5">
                        <Link href="/" className="text-white hover:text-[#1ecb15] cursor-pointer transition-all duration-500">About</Link>
                        <Link href="/" className="text-white hover:text-[#1ecb15] cursor-pointer transition-all duration-500">Blog</Link>
                        <Link href="/" className="text-white hover:text-[#1ecb15] cursor-pointer transition-all duration-500">Careers</Link>
                        <Link href="/" className="text-white hover:text-[#1ecb15] cursor-pointer transition-all duration-500">News</Link>
                        <Link href="/" className="text-white hover:text-[#1ecb15] cursor-pointer transition-all duration-500">Partners</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Social Network</h4>
                    <div className="flex gap-2.5 py-5">
                        <Link href="/" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-[#1ecb15] cursor-pointer transition-all duration-500">
                            <FaFacebookF />
                        </Link>
                        <Link href="/" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-[#1ecb15] cursor-pointer transition-all duration-500">
                            <FaTwitter />
                        </Link>
                        <Link href="/" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-[#1ecb15] cursor-pointer transition-all duration-500">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="/" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-[#1ecb15] cursor-pointer transition-all duration-500">
                            <FaPinterest />
                        </Link>
                    </div>
                </div>
            </div>
            <BottomFooter />
        </div>
    );
};

export default Footer;