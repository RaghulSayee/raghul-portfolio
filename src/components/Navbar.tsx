"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";

const navigationLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Research", href: "/#research" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="theme-navbar theme-border fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
<a
  href="/#home"
  onClick={closeMenu}
  className="group flex items-center gap-0.3"
  aria-label="Go to homepage"
>
  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
    <Image
      src="/logo/rs-logo-transparent_v2.png"
      alt="Raghul Sayee logo"
      width={96}
      height={96}
      priority
      unoptimized
      className="h-20 w-20 max-w-none scale-[1.2] object-contain"
    />
  </div>
</a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="theme-muted text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={toggleMenu}
            className="theme-surface theme-border theme-text flex h-10 w-10 items-center justify-center rounded-lg border transition hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 lg:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu-open theme-navbar theme-border border-t px-6 py-5 backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="theme-border theme-muted border-b py-4 text-base transition last:border-b-0 hover:pl-2 hover:text-violet-600 dark:hover:text-violet-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}