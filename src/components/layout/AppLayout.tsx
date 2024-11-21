import { Outlet } from "react-router-dom";
//component imports
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const AppLayout: React.FC = () => {
  return (
      <div className="flex flex-col h-screen">
        <Header/>
        <div className="flex flex-grow">
          <Navigation/>
          <div className="flex-grow p-4">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
  );
};
