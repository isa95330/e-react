import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegUser,
  FaShoppingCart,
} from "react-icons/fa";
import logo from "../assets/flower.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Accueil",
      
    },
    {
      id: 2,
      link: "Boutique",
    },
    {
      id: 3,
      link: "à propos",
    },
    {
      id: 4,
      link: "Points de vente",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="img"></img>

        <div></div>
        <div className="icon">
          <span className="icon1">
            {" "}
            <FaSearch size={30} />{" "}
          </span>
          <span className="icon2">
            <FaRegUser size={30} />
          </span>
          <span className="icon3">
            {" "}
            <FaShoppingCart size={30} />
          </span>
        </div>

        <div className="text">
          <ul className="link">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
