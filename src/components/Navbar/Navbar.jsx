import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "github", label: "GitHub Stats" },
    { id: "contact", label: "Contact" },
  ];

  return (
   <nav
  className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-8 lg:px-12 ${
    isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
  }`}>
  <div className="text-white py-5">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-lg font-semibold cursor-pointer">
      <span className="text-[#c7f837]">&lt;</span>
      <span className="text-white">Pravansh</span>
      <span className="text-[#c7f837]">/</span>
      <span className="text-white">Patel</span>
      <span className="text-[#c7f837]">&gt;</span>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-8 text-gray-300">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`cursor-pointer hover:text-[#c7f837] ${
            activeSection === item.id ? "text-[#c7f837]" : ""
          }`}
        >
          <button onClick={() => handleMenuItemClick(item.id)}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>

    {/* Social Icons */}
    <div className="hidden md:flex space-x-4">
      <a
        href="https://github.com/Pravansh5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#c7f837]"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/pravansh-patel/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#c7f837]"
      >
        <FaLinkedin size={24} />
      </a>
    </div>

    {/* Mobile Menu Icon */}
    <div className="md:hidden">
      {isOpen ? (
        <FiX
          className="text-3xl text-[#c7f837] cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <FiMenu
          className="text-3xl text-[#c7f837] cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
    </div>
  </div>

  {/* Mobile Menu Items */}
  {isOpen && (
  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
      <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer hover:text-[#c7f837] ${
              activeSection === item.id ? "text-[#c7f837]" : ""
            }`}
          >
            <button onClick={() => handleMenuItemClick(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Pravansh5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#c7f837]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pravansh-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#c7f837]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </ul>
    </div>
  )}
</nav>

  );
};

export default Navbar;
