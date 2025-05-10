import { Link, NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { FirebaseError } from "firebase/app";

const Navbar = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Must be used within an AuthProvider");
  }

  const { user, logOut } = context;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          console.error("Logout error:", error.code, error.message);
        } else {
          console.error("Unknown error occurred during Logout");
        }
      });
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-between py-4">
      {/* left empty div */}
      <div>{user && user?.email}</div>

      {/* middle nav links */}
      <div className="flex gap-3 text-gray-500 *:hover:underline">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>

      {/* right div */}
      <div className="flex items-center gap-3">
        <CgProfile className="text-4xl" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-neutral">
            Log out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
