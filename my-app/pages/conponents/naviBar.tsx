import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import Link from "next/link";

const NaviBar: React.FC = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full flex justify-between p-2 px-8 bg-white/90 font-semibold text-[3vw]">
      <Link href={"/"}>
        <AiOutlineHome size="1.5rem" className="m-auto" />
        <p>Main</p>
      </Link>
      <Link href={"/mobile/about"}>
        <BsPerson size="1.5rem" className="m-auto" />
        <p>About</p>
      </Link>
      <Link href={"/mobile/project"}>
        <AiOutlineProject size="1.5rem" className="m-auto" />
        <p>Project</p>
      </Link>
    </div>
  );
};

export default NaviBar;
