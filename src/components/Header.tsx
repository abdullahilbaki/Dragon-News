import headerLogo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center my-4">
      <img src={headerLogo} alt="header logo" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
