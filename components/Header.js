"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaFacebookF, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import logo from "./../assets/logo.png"
import Image from "next/image";
import SocialButton from "./shared/SocialButton";

const Header = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "features",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "resume",
        },
        {
            id: 5,
            link: "testimonial",
        },
        {
            id: 6,
            link: "clients",
        },
        {
            id: 7,
            link: "pricing",
        },
        {
            id: 8,
            link: "blog",
        },
        {
            id: 9,
            link: "contact",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 p-4 md:p-12 nav">
            <div>
                <Link
                    className=""
                    href="/"
                    rel="noreferrer"
                >
                    <Image src={logo} height={70} className="h-[50px] w-fit" />
                </Link>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer uppercase font-montserrat hover:text-secondary duration-200 link-underline opacity-70 text-[13px]"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-secondary md:hidden "
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <div className="absolute top-0 left-0 h-screen w-full bg-[#111111a8]">

                    <div className="flex p-6 flex-col justify-start items-start absolute top-0 left-0 w-2/3 h-screen bg-primary overflow-y-auto">
                        <div className="m-4 border-b border-b-[#ffffff12] pb-6">
                            <Link
                                className=""
                                href="/"
                                rel="noreferrer"
                            >
                                <Image src={logo} height={70} className="h-[50px] w-fit" />
                            </Link>
                            <p className="mt-6 text-body">Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</p>
                        </div>

                        <ul className="w-full border-b border-b-[#ffffff12] pb-6">
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-2 text-md font-montserrat"
                                >
                                    <Link onClick={() => setNav(!nav)} href={link}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="m-4">
                            <p>FIND ME WITH</p>
                            <div className=" flex gap-6 mt-4">
                                <FaFacebookF /> 
                                <FaTwitter /> 
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Header;