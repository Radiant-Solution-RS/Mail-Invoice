import React from "react";
import {
  Home,
  ShoppingBag,
  FileText,
  Users,
  Share2,
  BarChart3,
  Search,
  LogOut,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const { t, i18n } = useTranslation();

  const homeItem = { key: "home", icon: Home, label: t("sidebar.home") };

  const operatorsItems = [
    { key: "emailSetup", icon: ShoppingBag, label: t("sidebar.emailSetup") },
    { key: "dataRetrieval", icon: FileText, label: t("sidebar.dataRetrieval") },
    { key: "scrapedData", icon: FileText, label: t("sidebar.scrapedData") },
    { key: "rulesAutomation", icon: Share2, label: t("sidebar.rulesAutomation") },
    { key: "masterData", icon: Users, label: t("sidebar.masterData") },
    { key: "suppliers", icon: Users, label: t("sidebar.suppliers") }, 
    { key: "export", icon: BarChart3, label: t("sidebar.export") }, 
  ];

  const settingsItems = [
    { key: "userManagement", label: t("sidebar.userManagement") },
    { key: "account", label: t("sidebar.account") },
    { key: "help", label: t("sidebar.help") },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* App Name */}
        <div className="p-4">
          <h1 className="text-lg font-semibold text-gray-900 mb-4">
            {t("appName")}
          </h1>

          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder={t("sidebar.search") || "Search"}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4">
          {/* Home */}
          <button
            onClick={() => setActiveMenu(homeItem.key)}
            className={`w-full flex items-center gap-3 px-3 py-2 mb-3 rounded-md transition ${
              activeMenu === homeItem.key
                ? "bg-gray-100 text-black font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <homeItem.icon size={18} />
            <span className="text-sm">{homeItem.label}</span>
          </button>

          {/* Operator Group */}
          <p className="text-xs font-bold text-black uppercase mt-4 mb-2 px-3">
            Operator
          </p>
          {operatorsItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveMenu(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-md transition ${
                activeMenu === item.key
                  ? "bg-gray-100 text-black font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}

          {/* Setting Group */}
          <p className="text-xs font-bold text-gray-500 uppercase mt-6 mb-2 px-3">
            Setting
          </p>
          {settingsItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveMenu(item.key)}
              className={`w-full text-left px-3 py-2 mb-1 text-sm rounded-md transition ${
                activeMenu === item.key
                  ? "bg-gray-100 text-black font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        {/* Language Toggle ✅ */}
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
          }
          className="w-full mb-3 text-sm py-2 border rounded-md text-center hover:bg-gray-50 transition"
        >
          {i18n.language === "en" ? "🇩🇪 Switch to German" : "🇬🇧 Switch to English"}
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">Gustavo Xavier</p>
            <p className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md inline-block">
              Admin
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-2 text-red-500 text-sm font-medium hover:text-red-600 transition">
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
