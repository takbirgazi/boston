"use client"
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useEffect, useState } from "react";



const Header = () => {
    // for scroll navbar start 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    // for scroll navbar end 

    // when scroll top then header will hidden start
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setAtTop(currentScrollPos < 10);
            const isScrollingDown = currentScrollPos > prevScrollPos;
            setVisible(!isScrollingDown || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);
    // when scroll top then header will hidden end

    const links = [
        {
            id: 1,
            title: "About",
            slag: "/about-us"
        },
        {
            id: 2,
            title: "Services",
            slag: "/services"
        },
        {
            id: 3,
            title: "Blog",
            slag: "/blog"
        },

    ]
    return (
        // <nav className="bg-transparent py-4 z-40 fixed w-full">
        <nav
            className={`py-3 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                } ${atTop
                    ? "bg-transparent"
                    : "bg-white border-b border-[#1ecb155e]"
                }`}
        >
            <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
                <Link href="/" className="flex gap-1 items-center">
                    <figure>
                        <Image className="h-auto w-[150px]" src={atTop ? "https://www.madebydesignesia.com/themes/rentaly/images/logo-light.png" : "https://www.madebydesignesia.com/themes/rentaly/images/logo.png"} height={380} width={850} alt="Logo" />
                    </figure>
                </Link>
                <div className="hidden md:flex justify-center items-center gap-4">
                    {
                        links.map(menu => <Link className={`font-semibold hover:text-[#1ecb15] transition-colors duration-300 ${atTop ? "text-white" : "text-gray-800"}`} href={menu.slag} key={menu.id}>{menu.title}</Link>)
                    }
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <Link className="text-sm hover:shadow-2xl shadow-[#1ecb15] rounded-sm bg-mainColor text-white px-7 py-1.5 font-extrabold" href="/" >Sing In</Link>
                </div>
                <MobileMenu atTop={atTop} links={links} />
            </div>
        </nav>
    );
};

export default Header;