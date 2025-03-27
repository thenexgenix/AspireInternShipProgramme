import React from "react";
import pda from "../../Assets/logos/PDA Logo.png";
import itbi from "../../Assets/logos/Cuet_incubatior.webp";
import ictDivision from "../../Assets/logos/ict-division.png";
import bhtpa from "../../Assets/logos/bhtpa-bangladesh-hi-tech-park-authority-144365.jpg";
import asp from "../../Assets/logos/aspire-edu.png";
import { Link } from "react-router";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-[#5F1D91] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Info */}
          <div className="space-y-4 ">
            <div className="flex flex-col justify-start items-start ">
              <img src={asp} alt="Aspire Internship Program" />
              <h3 className="text-xl font-semibold">
                Aspire Education Foundation{" "}
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Founded By</p>
              <div className="bg-white rounded-lg p-1.5 w-32">
                {/* pda  logo */}
                <img
                  src={pda}
                  alt="Founder Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm mt-4">Supported By</p>
              <div className="flex gap-2">
                {/*  Supported logos */}
                <div className="bg-white rounded p-2 w-40 h-16">
                  <img
                    src={itbi}
                    alt="IT Business Incubatior, CUET"
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-white rounded p-2 w-40 h-16">
                  <img
                    src={ictDivision}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded p-2 w-40 h-16">
                  <img
                    src={bhtpa}
                    alt="Bangladesh High Tech Park"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm mt-4">
                Aspire Professional Development Initiative Founded by
                <br />
                PDA (Pathway for Domestic Alternatives)
                <br />
                Aspire Education Foundation
              </p>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="our-program/internship" className="hover:underline">
                  internship
                </Link>
              </li>
              <li>
                <Link to="collaborators" className="hover:underline">
                  collaborators
                </Link>
              </li>
              <li>
                <Link to="stories" className="hover:underline">
                  stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-sm">
              Subscribe to our Newsletter to get You weekly Dose of News,Updates
              and Tips
            </p>
            <div className="space-y-2 ">
              <div className="flex items-center bg-white rounded-lg p-2">
                <ImMail className="text-purple-900 w-5 h-5 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent text-purple-800 outline-none flex-1"
                />
              </div>
              <button className="w-full bg-white text-purple-800 py-2 px-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end gap-4 mt-8 text-2xl">
          <a href="#" className="text-white hover:text-purple-200">
            <FaSquareTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/aspire-internship-program/"
            className="text-white hover:text-purple-200"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/aspireinternhsipprogram.pda"
            className="text-white hover:text-purple-200"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a href="" className="text-white hover:text-purple-200">
            <FaSquareInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 pt-8 border-t border-purple-700">
          <p>
            © 2025 Aspire. All rights reserved. Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
