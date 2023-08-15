import React, { useState } from "react";
import styles from "./header.module.css";
import classNames from "classnames";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={classNames("fixed z-50 w-full top-0 bg-[#7510F7] text-white py-[10px]")}
    >
      <div
        className={classNames(styles.menuBtn, "text-right text-[6vw] pr-[3vw]")}
        onClick={toggleMenu}
      >
        <div>&#9776;</div>
        {/*<div className="absolute top-0 w-full text-center">
          최형운의 Portfolio
      </div>*/}
      </div>
      <nav
        className={classNames(
          `${styles.nav} ${isOpen ? styles.open : ""}`,
          "bg-[#7510F7] text-[6vw]"
        )}
      >
        <ul className="p-4">
          <li className="mb-4 ">
            <Link href="/" className="w-1/3 flex m-auto items-center">
              <AiOutlineHome />
              <p className="ml-2">Home</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/mobile/about"
              className="w-1/3 flex m-auto items-center"
            >
              <BsPerson />
              <p className="ml-2">About</p>
            </Link>
          </li>
          <li>
            <Link
              href="/mobile/project"
              className="w-1/3 flex m-auto items-center"
            >
              <AiOutlineProject />
              <p className="ml-2">Project</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
