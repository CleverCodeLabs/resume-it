import { FC } from "react";
import { RiContactsLine, RiProfileLine } from "react-icons/ri";

const Navbar: FC = () => {
  return (
    <div>
      <a>
        <RiContactsLine />
      </a>
      <a>
        <RiProfileLine />
      </a>
    </div>
  );
};

export default Navbar;
