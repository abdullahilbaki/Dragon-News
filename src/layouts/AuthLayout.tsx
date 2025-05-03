import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="container mx-auto p-4">
        <Navbar />
      </header>

      <main className="container mx-auto p-4 flex items-center justify-center pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
