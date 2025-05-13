import { format } from "date-fns";
import headerLogo from "../assets/logo.svg";
import { Link } from "react-router";

const Header = () => {
  const todayDate = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center my-4">
      <Link to={"/"}>
        <img src={headerLogo} alt="header logo" />
      </Link>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p>{todayDate}</p>
    </div>
  );
};

export default Header;
