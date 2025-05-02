import { NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-between py-4">
      {/* left empty div */}
      <div></div>

      {/* middle nav links */}
      <div className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      {/* right div */}
      <div className="flex items-center gap-3">
        <CgProfile className="text-4xl"/>
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
