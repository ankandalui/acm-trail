import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Team", link: "#our-team" },
    { name: "Events", link: "#events" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="sticky inset-x-0 top-0 z-40 w-full">
      {/* Desktop Navigation */}
      <div
        className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 lg:flex transition-all duration-300 ease-in-out shadow-[0_4px_16px_rgba(54,116,181,0.05)] ${
          isScrolled
            ? "bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(54,116,181,0.1),_0_4px_16px_rgba(54,116,181,0.06),_0_0_0_1px_rgba(255,255,255,0.1)_inset] border-white/20 w-[70%] translate-y-5"
            : "w-full translate-y-0"
        }`}
        style={{ minWidth: "800px" }}
      >
        {/* Logo */}
        <div className="relative z-20 mr-4 flex items-center justify-center px-1 py-1 w-20 h-20">
          <img
            src="/fiem-acm-logo.svg"
            alt="ACM Logo"
            width="100"
            height="100"
            className="rounded-full w-full h-full object-cover drop-shadow-lg"
          />
        </div>

        {/* Desktop Menu Items */}
        <div
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-4 text-lg font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-4"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`link-${idx}`}
              href={item.link}
              className="relative px-6 py-3 text-neutral-600 dark:text-neutral-300 transition-colors hover:text-zinc-800 dark:hover:text-white"
              onMouseEnter={() => setHoveredItem(idx)}
            >
              {hoveredItem === idx && (
                <div className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800 transition-all duration-200 ease-out" />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative z-20">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-white text-black text-lg font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-[10px] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] w-[90%] px-3 rounded-md translate-y-5"
            : "w-full px-0 rounded-[2rem] translate-y-0"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex w-full flex-row items-center justify-between px-4">
          {/* Mobile Logo */}
          <div className="relative z-20 flex items-center justify-center w-16 h-16">
            <img
              src="/fiem-acm-logo.svg"
              alt="ACM Logo"
              width="48"
              height="48"
              className="rounded-full w-full h-full object-cover drop-shadow-lg"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-3"
            aria-label="Menu"
          >
            {/* Menu Icon */}
            <svg
              className={`w-7 h-7 text-black dark:text-white transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`w-7 h-7 text-black dark:text-white absolute top-3 left-3 transition-opacity duration-200 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 top-16 z-50 w-full flex-col items-start justify-start gap-4 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-8 shadow-[0_8px_32px_rgba(54,116,181,0.1)] transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "flex opacity-100 scale-100"
              : "hidden opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-xl font-medium text-white hover:text-blue-300 transition-colors py-3"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
