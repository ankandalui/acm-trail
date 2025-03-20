import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md py-4 fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ACM Student Chapter</h1>

          {/* Mobile menu button with animated icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white relative w-6 h-6 z-50"
            aria-label="Menu"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-2"
              }`}
            ></span>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <a href="/" className="hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                className="hover:text-accent transition-colors"
              >
                Team
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-accent transition-colors">
                Events
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu - Sliding from right */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-primary shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="pt-20 px-6">
            <ul className="flex flex-col space-y-6 text-white">
              <li>
                <a
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg hover:text-accent transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-30" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 30 }}
          onClick={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
}
