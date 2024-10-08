import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DashSidebar } from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

const Dashboard = () => {
  const location = useLocation(); //current location
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); //to get the url
    const tabFromUrl = urlParams.get("tab"); //
    //console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/*Sidebar */}
        <DashSidebar />
      </div>
      {/*profile */}
      {tab === "profile" && <DashProfile />}
    </div>
  );
};

export default Dashboard;
