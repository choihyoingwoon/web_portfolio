import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const NaviBar: React.FC = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex justify-between p-4 px-8 bg-white/90 font-semibold">
      <div>
        <AiOutlineHome size="2rem" className="m-auto" />
        <p>Main</p>
      </div>
      <div>
        <BsPerson size="2rem" className="m-auto" />
        <p>About</p>
      </div>
      <div>
        <AiOutlineProject size="2rem" className="m-auto" />
        <p>Project</p>
      </div>
    </div>
  );
};

export default NaviBar;
