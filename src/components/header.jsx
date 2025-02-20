"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Button from "./button";

const Header = ({ links }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isMobileMenuOpen &&
                !e.target.closest(".mobile-nav") &&
                !e.target.closest(".m_menu_trigger")
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <header className="header">
            <div className="header_wrapper container has__flex items__center">
                <div className="brand_logo">
                    <Link href="/">
                        <Image width={250} height={70} alt="Techintegrations Logo" src="/dark-logo.webp" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav-list has__flex has__gap justify__center" key="desktop-nav">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link href={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="other_actions has__flex has__gap">
                    <Button label="Get Started" href="/" style="button" />
                    <Button label="Hire Us" href="/" style="button_sec" />
                </div>
                <div className="mobile_menu-wrapper">
                    <button className="m_menu_trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu />
                    </button>
                    <nav className={`mobile-nav ${isMobileMenuOpen ? "is-visible" : ""}`}>
                        <ul className="mobile-nav-list has__flex flex__column justify__center has__gap" key="mobil-nav">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="mobile-nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;