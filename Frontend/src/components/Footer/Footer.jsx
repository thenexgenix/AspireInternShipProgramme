import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import cuet from "../../Assets/logos/Cuet_incubatior.webp";
import Pda from "../../Assets/logos/PDA Logo.png";
import aspireLogo from "../../Assets/logos/aspire-edu.png";
import ictdivision from "../../Assets/logos/images-of_itbi.webp";

const Footer = () => {
  return (
    <footer className="bg-[#5F1D91] text-white py-8 px-4 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Left Section */}
        <div className="space-y-4  ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              <img src={aspireLogo} alt="Aspire Internship Programme" />
            </div>
            <h2 className="text-xl font-semibold">
              Aspire Education Foundation
            </h2>
          </div>
          <div className=" bg-white text-black flex flex-col gap-2 font-bold px-16 py-12  md:-translate-x-2 lg:translate-x-5 xl:-translate-x-52 rounded-4xl">
            <p>Founded By</p>
            <div className=" text-black py-2 px-4 w-44 inline-block rounded-3xl">
              <img
                src={Pda}
                alt="PDA (Pathway for Domestic Alternatives)"
                className="h-20"
              />
            </div>
            <p>Supported By</p>
            <div className="flex space-x-4 flex-col">
              <div className="flex  gap-9">
                <img
                  src={ictdivision}
                  alt="Bangladesh High Tech Park "
                  className="h-14 object-scale-down"
                />{" "}
              </div>
              <div>
                <img
                  src={cuet}
                  alt="IT Business Incubatior,Cuet"
                  className="h-14 mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-start items-start gap-5">
          <div>
            <h3 className="text-lg md:text-2xl  font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-2">
              Subscribe to our Newsletter to get your weekly dose of news,
              updates, and tips
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-md text-black w-full md:w-auto bg-white"
            />
            <button className="bg-[#c65bd4] px-4 py-2 rounded-md hover:bg-pink-600">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="text-xl cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-gray-300" />
            <FaFacebook className="text-xl cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
          </div>
          <div className=" text-white text-sm py-2 px-4 rounded-md">
            Aspire Professional Development Initiative Founded by PDA (Pathway
            for Domestic Alternatives) Aspire Education Foundation
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 border-t border-white pt-4">
        &copy; 2025 Aspire. All rights reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
