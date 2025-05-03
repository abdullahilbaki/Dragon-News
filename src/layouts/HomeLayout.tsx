import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="container mx-auto p-4">
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      <main className="grid lg:grid-cols-12 gap-4">
        <aside className="left-nav col-span-3 lg:sticky lg:top-0 lg:h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {navigation.state === "loading" ? (
            <span className="loading loading-bars loading-xl mx-auto block mt-8"></span>
          ) : (
            <Outlet />
          )}
        </section>
        <aside className="right-nav col-span-3 lg:sticky lg:top-0 lg:h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
