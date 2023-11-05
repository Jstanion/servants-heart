import Link from "next/link";
import Image from "next/image";
import React from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="navbar p-0 border-primary border-solid border-2">
      <div className="navbar-start">
        <div className="dropdown text-primary">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`${Styles.dropdownItems} grid menu menu-sm dropdown-content text-primary mt-3 z-[1] shadow-lg bg-base-100 rounded-box w-32`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            {/* <li>
              <Link href="/events">Events</Link>
            </li> */}
            <li>
              <Link href="/team">The Team</Link>
            </li>
            <div className="divider m-0 justify-self-center w-11/12 "></div>
            <li>
              <Link href="/donate">Donate</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/logo.png"
          className="ml-2"
          width={200}
          height={50}
          alt="logo"
        />
      </div>
      <div className="navbar hidden p-0 lg:flex lg:w-full">
        <ul className="menu menu-horizontal text-primary p-0 lg:flex lg:justify-evenly lg:w-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/news">Our Story</Link>
          </li>
          {/* <li>
            <Link href="/events">Events</Link>
          </li> */}
          <li>
            <Link href="/team">The Team</Link>
          </li>
          <div className="divider lg:divider-horizontal"></div>
          <li>
            <Link href="/donate">Donate</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
