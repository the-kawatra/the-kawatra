import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [dark, setDark] = useState(false);
  const handleDark = () => setDark(!dark);

  useEffect(() => {
    if (dark === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#ffccac] dark:bg-[#103364]">
      <div className="z-10">
        <img src={Logo} alt="Logo Image" className="w-[4rem]" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="px-4 font-medium">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 font-medium">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 font-medium">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-4 font-medium">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fcd9b8] dark:bg-[#103364] flex flex-col justify-center items-center"
        }
      >
        <ul className="flex flex-col items-center">
          <li className="py-6 text-2xl">
            <Link onClick={handleNav} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              onClick={handleNav}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex mt-16">
          <li className="mx-4">
            <a
              href="https://www.linkedin.com/in/aadarsh-kawatra"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mx-4">
            <a
              href="https://www.github.com/the-kawatra"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="mx-4">
            <a
              href="mailto:thekawatra@gmail.com"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="mx-4">
            <a
              href="https://drive.google.com/file/d/1pFC2vjCQa5aQSAF6hEhWmLm08IlHfX_E/view?usp=sharing"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Theme Switch */}
      <div className="mx-8 cursor-pointer" onClick={handleDark}>
        {dark === true ? <BsSunFill /> : <BsMoonFill />}
      </div>

      {/* Social Media Icons */}
      <div className="hidden fixed md:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[120px] p-2 bg-blue-500 dark:bg-blue-600 text-white flex items-center ml-[-75px] hover:ml-[0px] duration-300">
            <a
              href="https://www.linkedin.com/in/aadarsh-kawatra"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[110px] p-2 bg-gray-700 dark:bg-gray-800 text-white flex items-center ml-[-65px] hover:ml-[0px] duration-300">
            <a
              href="https://www.github.com/the-kawatra"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[90px] p-2 bg-red-400 dark:bg-red-500 text-white flex items-center ml-[-45px] hover:ml-[0px] duration-300">
            <a
              href="mailto:thekawatra@gmail.com"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[120px] p-2 bg-teal-600 dark:bg-teal-700 text-white flex items-center ml-[-75px] hover:ml-[0px] duration-300">
            <a
              href="https://drive.google.com/file/d/1pFC2vjCQa5aQSAF6hEhWmLm08IlHfX_E/view?usp=sharing"
              target="_blank"
              className="flex justify-between w-full items-center"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
