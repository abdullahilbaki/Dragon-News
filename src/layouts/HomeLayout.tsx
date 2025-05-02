import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const homeLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default homeLayout;
