import { FC } from "react";
import { RiContactsLine, RiProfileLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";

const Navbar: FC = () => {
  return (
    <div>
      <a>
        <RiContactsLine />
      </a>
      <a>
        <RiProfileLine />
      </a>
      <a>
        <GrMapLocation />
      </a>
    </div>
  );
};

export default Navbar;
