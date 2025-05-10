import { Link, NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-between py-4">
      {/* left empty div */}
      <div>{auth && auth?.user?.email}</div>

      {/* middle nav links */}
      <div className="flex gap-3 text-gray-500 *:hover:underline">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      {/* right div */}
      <div className="flex items-center gap-3">
        <CgProfile className="text-4xl" />
        <Link to={"/auth/login"} className="btn btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
