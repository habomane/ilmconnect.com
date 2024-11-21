import { Outlet } from "react-router-dom";
//component imports
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const AppLayout: React.FC = () => {
  return (
      <div className="grid h-screen grid-rows-[auto_1fr_auto] relative font-base">
        <Header/>
        <Navigation/>
        <Outlet/>
        <Footer />
      </div>
  );
};
