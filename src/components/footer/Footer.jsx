import React from "react";
import { Link } from "react-router-dom";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import mail from "../../assets/mail.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="px-8 md:px-20  bg-[#0D130F] max-w-full h-full">
      <div className="flex flex-col gap-10 tab:flex-row tab:justify-between tab:gap-40">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-y-10 flex-wrap lg:gap-14 xl:gap-20 mt-10 mb-1">
          <div>
            <h3 className="text-primary mb-4 text-white">Product</h3>
            <ul className="text-sm flex flex-col gap-3 text-white">
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">Workload</Link>
              </li>
              <li>
                <Link to="#">Time</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-white">Company</h3>
            <ul className="text-sm flex flex-col gap-3 text-white">
              <li>
                <Link to="#">Real Work</Link>
              </li>
              <li>
                <Link to="#">About & Contact</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-white">Resources</h3>
            <ul className="text-sm flex flex-col gap-3 text-white">
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Help & About</Link>
              </li>
              <li>
                <Link to="#">Customer </Link>
              </li>
            </ul>
          </div>
          <div className="mx-48">
            <Link>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <span className="tab:text-[1rem] text-white">
                Empowering Innovation, Securing Futures
              </span>
            </Link>
            <div className="flex gap-4 mt-2">
              <img src={discord} alt="discord" />
              <img src={twitter}  alt='twitter'/>
              <img src={mail}  alt="mail"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
