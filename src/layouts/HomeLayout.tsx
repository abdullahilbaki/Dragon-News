import { Outlet } from "react-router";
import Header from "../components/Header";

const homeLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
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
