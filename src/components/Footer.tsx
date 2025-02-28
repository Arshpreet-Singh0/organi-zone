import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#F3F4F6] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond in 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
              <a href="https://x.com/arshpreet_000" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                  <Twitter size={20} className="text-[#A73F3C]"/>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/arshpreet-singh-2b30a7285/" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                  <Linkedin size={20} className="text-[#A73F3C]"/>
                </button>
              </a>
              <a href="https://github.com/Arshpreet-Singh0" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                  <Github size={20} className="text-[#A73F3C]"/>
                </button>
              </a>
              <a href="https://www.instagram.com/organizone.shop/" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none">
                  <InstagramIcon size={20} className="text-[#A73F3C]"/>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</Link></li>
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</Link></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Arshpreet-Singh0/E-Commerce" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/free-products">Free Products</Link></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer">MIT License</a></li>
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/terms">Terms &amp; Conditions</Link></li>
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/privacy">Privacy Policy</Link></li>
                  <li><Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2025</span>
              <a href="https://github.com/Arshpreet-Singh0" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Organi-Zone</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
