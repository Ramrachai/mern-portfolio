"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaFacebookF, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "@/assets/logo.png"
import Image from "next/image";
import styles from "@/components/Header/headers.module.scss"
import { RoundButton, SquareButton } from "../shared/StyledComponents";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState("home")
    const [isSticky, setIsSticky] = useState(false)
    const handleClick = (sectionId) => {
        setActiveSection(sectionId)
    }

    useEffect( ()=> {
        const handleScroll = () => {
            const scroll = window.scrollY
            setIsSticky( scroll >= 200 )
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const links = [
        {
            id: 1,
            link: "home",
            href: "#home"
        },
        {
            id: 2,
            link: "features",
            href: "#features",
        },
        {
            id: 3,
            link: "portfolio",
            href: "#portfolio",
        },
        {
            id: 4,
            link: "resume",
            href: "#resume",
        },
        {
            id: 5,
            link: "testimonial",
            href: "#testimonial",
        },
        {
            id: 6,
            link: "clients",
            href: "#clients",
        },
        {
            id: 7,
            link: "pricing",
            href: "#pricing",
        },
        {
            id: 8,
            link: "blog",
            href: "#blog",
        },
        {
            id: 9,
            link: "contact",
            href: "#contact",
        },
    ];

    return (
        <nav className={`flex justify-between items-center w-full h-20 p-4 md:p-12 nav ${isSticky ? styles.sticky : ''}`}>
            <div>
                <Link
                    className=""
                    href="/"
                    rel="noreferrer"
                >
                    <Image src={logo} height={70} className="h-[50px] w-fit" alt="logo" />
                </Link>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, href }) => (
                    <li
                        key={id}
                        className={`nav-links px-4 cursor-pointer uppercase font-montserrat hover:text-secondary duration-200 link-underline opacity-70 text-[13px] ${activeSection == href.slice(1) ? styles.active : ""} `}
                    >
                        <Link href={href} alt={link} onClick={() => handleClick(href.slice(1))}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4  md:hidden "
            >
                {nav ? <RoundButton> <IoCloseOutline size={20} /></RoundButton> : <RoundButton> <CiMenuBurger size={20} /> </RoundButton>}
            </div>

            {nav && (
                <div className="absolute top-0 left-0 h-screen w-full bg-[#111111a8]">

                    <div className="flex p-6 flex-col justify-start items-start absolute top-0 left-0 w-2/3 h-screen bg-[#191b1e] overflow-y-auto">
                        <div className="m-4 border-b border-b-[#ffffff12] pb-6 flex flex-wrap justify-between">
                            <Link
                                className=""
                                href="/"
                                rel="noreferrer"
                            >
                                <Image src={logo} height={70} className="h-[50px] w-fit" />
                            </Link>
                            <RoundButton onClick={() => setNav(false)}> <IoCloseOutline size={20} /></RoundButton>
                            <p className="mt-6 text-body w-full">Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</p>
                        </div>

                        <ul className="w-full border-b border-b-[#ffffff12] pb-6">
                            {links.map(({ id, link, href }) => (
                                <li
                                    key={id}
                                    className={`px-4 cursor-pointer capitalize py-2 text-md font-montserrat ${activeSection == href.slice(1) ? styles.active : ''}`}
                                >
                                    <Link alt={link} onClick={() => { handleClick(href.slice(1)); setNav(!nav); }} href={href}>{link}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className="m-4">
                            <p>FIND ME WITH</p>
                            <div className=" flex gap-4 mt-4">
                                <SquareButton href={"#"}>
                                    <FaFacebookF size={20}/>
                                </SquareButton>

                                <a href="#" className="social-icons"> <i className="facebook-icon"></i>  </a> 

                                <SquareButton href={"#"}>
                                    <FaTwitter size={20}/>
                                </SquareButton>
                                <SquareButton href={"#"}>
                                    <FaLinkedinIn size={20}/>
                                </SquareButton>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Header;