import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand info section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <h2 className="text-2xl font-bold mb-6">audiophile</h2>
            <p className="text-gray-400 mb-8">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
            </p>
            <p className="text-gray-400">Copyright 2021. All Rights Reserved</p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center md:items-end">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/headphones"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                }
              >
                HEADPHONES
              </NavLink>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                }
              >
                SPEAKERS
              </NavLink>
              <NavLink
                to="/earphones"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                }
              >
                EARPHONES
              </NavLink>
            </ul>

            <div className="flex gap-4 mt-8 md:mt-auto">
                <FaFacebookSquare size={20}/>
                <FaTwitter size={20}/>
                <RiInstagramFill size={20}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;