"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";


const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about", chevron: true },
  { label: "Resources", href: "#departments", chevron: true },
  { label: "Welfare", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = () => setOpen(false);   // <- add this back

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-wrap">
        <a className="brand" href="#" aria-label="UATH home">
          <Image
            src="/img/logo-header.png"
            alt="UATH logo"
            width={186}
            height={50}
            className="brand-mark"
            priority
          />
        </a>

        {/* desktop navigation */}
        <nav className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label} {l.chevron && <ChevronDown size={12} />}
            </a>
          ))}
        </nav>

        <a className="nav-portal" href="#portal">
          <span className="utility-inner">
            <Phone/>
            Emergency Call
          </span>
        </a>

        {/* mobile menu button */}
        <button
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile dropdown panel */}
      <nav
        id="mobile-panel"
        className={`mobile-panel ${open ? "is-open" : ""}`}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a className="mobile-portal" href="#portal" onClick={close}>
          Emergency Calls
        </a>
      </nav>
    </header>
  );
}
