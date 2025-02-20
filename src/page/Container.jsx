import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
export function Container() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {" "}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
