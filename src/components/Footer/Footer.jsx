import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto text-center">
    {/* Name / Logo */}
    <h2 className="text-xl font-semibold text-[#c7f837]">Pravansh Patel</h2>

    {/* Navigation Links - Responsive */}
    <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
      {[
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "work" },
      ].map((item, index) => (
        <button
          key={index}
          onClick={() => handleScroll(item.id)}
          className="hover:text-[#c7f837] text-sm sm:text-base my-1"
        >
          {item.name}
        </button>
      ))}
    </nav>

    {/* Copyright Text */}
    <p className="text-sm text-gray-400 mt-6">
      © 2025 Pravansh Patel. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
