import { format } from "date-fns";
import headerLogo from "../assets/logo.svg";

const Header = () => {
  const todayDate = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center my-4">
      <img src={headerLogo} alt="header logo" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p>{todayDate}</p>
    </div>
  );
};

export default Header;
