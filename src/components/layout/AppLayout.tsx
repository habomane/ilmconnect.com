import { Outlet } from "react-router-dom";
//component imports
import { Navigation } from "@/components/layout/Navigation";
// import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useEffect, useState } from "react";
import { getUserKeyFromStorage } from "@/util";
export const AppLayout: React.FC = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userKey = getUserKeyFromStorage();
    if(userKey !== "null") {setIsLoggedIn(true); }
  }, []);
  return (
      <div className="flex flex-col h-screen overflow-x-hidden">
        <Header/>
        {
          isLoggedIn ? (
            <div className="flex flex-col-reverse md:flex-row md:flex-grow">
            <Navigation/>
            <div className="flex-grow ">
            <Outlet/>
            </div>
          </div>
          ): (<Outlet/>)
        }
        {/* <Footer/> */}
      </div>
  );
};
