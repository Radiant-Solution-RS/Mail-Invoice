import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import EmailSetup from "./EmailSetup";
import DataRetrieval from "./DataRetrieval";
import ScrapedData from "./ScrapedData";
import RulesAutomation from "./RulesAutomation";
import ExportTable from "./ExportTable";

function DashboardLayout() {
  const [activeMenu, setActiveMenu] = useState("home"); // 👈 keys only

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <MainContent />;
      case "emailSetup":
        return <EmailSetup />;
      case "dataRetrieval":
        return <DataRetrieval />;
      case "scrapedData":
        return <ScrapedData />;
      case "rulesAutomation":
        return <RulesAutomation />;
      case "masterData":
        return <div className="p-6">👥 Master Data</div>;
      case "suppliers":
        return <div className="p-6">📈 Reports</div>;
      case "export":
        return <ExportTable />;
      default:
        return <div className="p-6">🔍 Select a menu from Sidebar</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 overflow-y-auto">
        <Header activeMenu={activeMenu} /> {/* pass key */}
        {renderContent()}
      </div>
    </div>
  );
}

export default DashboardLayout;
