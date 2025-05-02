import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const homeLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      <main className="grid grid-cols-12 gap-4">
        <aside className="left-nav col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="right-nav col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default homeLayout;
